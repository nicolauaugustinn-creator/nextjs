"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, Check, X, Search, MoreHorizontal, Star, MessageSquare, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { reviewsStore, type Review } from "@/lib/admin-store"
import { toast } from "sonner"

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editingReview, setEditingReview] = useState<Review | null>(null)
  const [deletingReview, setDeletingReview] = useState<Review | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    author: "",
    avatar: "",
    rating: 5,
    text: "",
    category: "course",
    mediaType: undefined as "video" | "audio" | "screenshot" | undefined,
    mediaUrl: "",
    status: "pending" as "pending" | "approved" | "rejected",
    featured: false,
  })

  useEffect(() => {
    loadReviews()
  }, [])

  const loadReviews = () => {
    const data = reviewsStore.getAll()
    setReviews(data)
  }

  const resetForm = () => {
    setFormData({
      author: "",
      avatar: "",
      rating: 5,
      text: "",
      category: "course",
      mediaType: undefined,
      mediaUrl: "",
      status: "pending",
      featured: false,
    })
    setEditingReview(null)
  }

  const openCreateDialog = () => {
    resetForm()
    setIsDialogOpen(true)
  }

  const openEditDialog = (review: Review) => {
    setEditingReview(review)
    setFormData({
      author: review.author,
      avatar: review.avatar || "",
      rating: review.rating,
      text: review.text,
      category: review.category,
      mediaType: review.mediaType,
      mediaUrl: review.mediaUrl || "",
      status: review.status,
      featured: review.featured,
    })
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (!formData.author.trim()) {
      toast.error("Введите имя автора")
      return
    }
    if (!formData.text.trim()) {
      toast.error("Введите текст отзыва")
      return
    }

    setIsLoading(true)

    try {
      if (editingReview) {
        reviewsStore.update(editingReview.id, formData)
        toast.success("Отзыв успешно обновлен!")
      } else {
        reviewsStore.create(formData)
        toast.success("Отзыв успешно создан!")
      }

      loadReviews()
      setIsDialogOpen(false)
      resetForm()
    } catch (error) {
      toast.error("Ошибка при сохранении отзыва")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = () => {
    if (!deletingReview) return

    setIsLoading(true)
    try {
      reviewsStore.delete(deletingReview.id)
      toast.success("Отзыв успешно удален!")
      loadReviews()
      setIsDeleteDialogOpen(false)
      setDeletingReview(null)
    } catch (error) {
      toast.error("Ошибка при удалении отзыва")
    } finally {
      setIsLoading(false)
    }
  }

  const openDeleteDialog = (review: Review) => {
    setDeletingReview(review)
    setIsDeleteDialogOpen(true)
  }

  const approveReview = (review: Review) => {
    reviewsStore.approve(review.id)
    loadReviews()
    toast.success("Отзыв одобрен")
  }

  const rejectReview = (review: Review) => {
    reviewsStore.reject(review.id)
    loadReviews()
    toast.success("Отзыв отклонен")
  }

  const toggleFeatured = (review: Review) => {
    reviewsStore.update(review.id, { featured: !review.featured })
    loadReviews()
    toast.success(review.featured ? "Отзыв убран из избранных" : "Отзыв добавлен в избранные")
  }

  // Filter reviews
  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.author.toLowerCase().includes(search.toLowerCase()) ||
                         review.text.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "all" || review.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Stats
  const stats = {
    total: reviews.length,
    pending: reviews.filter(r => r.status === "pending").length,
    approved: reviews.filter(r => r.status === "approved").length,
    avgRating: reviews.length > 0 
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) 
      : "0"
  }

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    approved: "bg-green-500/20 text-green-400 border-green-500/30",
    rejected: "bg-red-500/20 text-red-400 border-red-500/30"
  }

  const statusLabels: Record<string, string> = {
    pending: "На модерации",
    approved: "Одобрен",
    rejected: "Отклонен"
  }

  const categoryLabels: Record<string, string> = {
    course: "Курс",
    consultation: "Консультация",
    meditation: "Медитация",
    general: "Общий"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Отзывы</h1>
          <p className="text-muted-foreground mt-1">Управление отзывами клиентов</p>
        </div>
        <Button onClick={openCreateDialog} className="bg-gold hover:bg-gold/90 text-black">
          <Plus className="w-4 h-4 mr-2" />
          Добавить отзыв
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Всего отзывов</CardTitle>
            <MessageSquare className="w-4 h-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">На модерации</CardTitle>
            <Eye className="w-4 h-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">{stats.pending}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Одобрено</CardTitle>
            <Check className="w-4 h-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">{stats.approved}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Средний рейтинг</CardTitle>
            <Star className="w-4 h-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gold">{stats.avgRating}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Поиск отзывов..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-background/50"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40 bg-background/50">
            <SelectValue placeholder="Статус" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все статусы</SelectItem>
            <SelectItem value="pending">На модерации</SelectItem>
            <SelectItem value="approved">Одобренные</SelectItem>
            <SelectItem value="rejected">Отклоненные</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="bg-card/50 border-border/50">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead>Автор</TableHead>
              <TableHead>Отзыв</TableHead>
              <TableHead>Рейтинг</TableHead>
              <TableHead>Категория</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReviews.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  Отзывы не найдены. Нажмите &quot;Добавить отзыв&quot; чтобы создать первый.
                </TableCell>
              </TableRow>
            ) : (
              filteredReviews.map((review) => (
                <TableRow key={review.id} className="border-border/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-medium">
                        {review.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {review.author}
                          {review.featured && (
                            <Star className="w-3 h-3 text-gold fill-gold" />
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(review.createdAt).toLocaleDateString('ru-RU')}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-xs line-clamp-2 text-sm">
                      {review.text}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-gold fill-gold" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-border/50">
                      {categoryLabels[review.category] || review.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[review.status]}>
                      {statusLabels[review.status]}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {review.status === "pending" && (
                          <>
                            <DropdownMenuItem onClick={() => approveReview(review)}>
                              <Check className="w-4 h-4 mr-2 text-green-400" />
                              Одобрить
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => rejectReview(review)}>
                              <X className="w-4 h-4 mr-2 text-red-400" />
                              Отклонить
                            </DropdownMenuItem>
                          </>
                        )}
                        <DropdownMenuItem onClick={() => openEditDialog(review)}>
                          <Edit className="w-4 h-4 mr-2" />
                          Редактировать
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleFeatured(review)}>
                          <Star className="w-4 h-4 mr-2" />
                          {review.featured ? "Убрать из избранных" : "В избранное"}
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => openDeleteDialog(review)}
                          className="text-red-400 focus:text-red-400"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Удалить
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingReview ? "Редактировать отзыв" : "Создать отзыв"}</DialogTitle>
            <DialogDescription>
              {editingReview ? "Измените информацию об отзыве" : "Заполните информацию о новом отзыве"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Имя автора *</Label>
                <Input
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="Анна К."
                />
              </div>
              <div className="space-y-2">
                <Label>Рейтинг</Label>
                <Select value={formData.rating.toString()} onValueChange={(v) => setFormData({ ...formData, rating: parseInt(v) })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[5, 4, 3, 2, 1].map(r => (
                      <SelectItem key={r} value={r.toString()}>{r} звезд</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Текст отзыва *</Label>
              <Textarea
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                placeholder="Текст отзыва..."
                rows={4}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Категория</Label>
                <Select value={formData.category} onValueChange={(v) => setFormData({ ...formData, category: v })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="course">Курс</SelectItem>
                    <SelectItem value="consultation">Консультация</SelectItem>
                    <SelectItem value="meditation">Медитация</SelectItem>
                    <SelectItem value="general">Общий</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Статус</Label>
                <Select value={formData.status} onValueChange={(v: "pending" | "approved" | "rejected") => setFormData({ ...formData, status: v })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">На модерации</SelectItem>
                    <SelectItem value="approved">Одобрен</SelectItem>
                    <SelectItem value="rejected">Отклонен</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>URL аватара (опционально)</Label>
              <Input
                value={formData.avatar}
                onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                placeholder="/images/reviews/avatar.jpg"
              />
            </div>
            <div className="flex items-center gap-2 p-4 rounded-lg bg-muted/50">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="rounded border-border"
              />
              <Label htmlFor="featured" className="cursor-pointer">Избранный отзыв (показывать на главной)</Label>
            </div>
          </div>

          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Отмена
            </Button>
            <Button 
              onClick={handleSave} 
              disabled={isLoading || !formData.author || !formData.text}
              className="bg-gold hover:bg-gold/90 text-black"
            >
              {isLoading ? "Сохранение..." : (editingReview ? "Сохранить" : "Создать")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Удалить отзыв?</DialogTitle>
            <DialogDescription>
              Вы уверены, что хотите удалить отзыв от &quot;{deletingReview?.author}&quot;? Это действие нельзя отменить.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Отмена
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? "Удаление..." : "Удалить"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
