"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Check, X, Eye, Star, MessageSquare, Loader2, AlertCircle, Plus, Pencil, Trash2, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Review } from "@/data/reviews"

const initialReviewForm: Partial<Review> = {
  clientName: "",
  clientAvatar: "",
  text: "",
  screenshotImage: "",
  videoPlaceholder: "",
  audioPlaceholder: "",
  category: "consultation",
  rating: 5,
  date: new Date().toISOString().split("T")[0],
  featured: false,
  approved: true
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingReview, setEditingReview] = useState<Review | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [reviewToDelete, setReviewToDelete] = useState<Review | null>(null)
  
  const [formData, setFormData] = useState<Partial<Review>>(initialReviewForm)

  // Fetch reviews
  useEffect(() => {
    fetchReviews()
  }, [])

  async function fetchReviews() {
    try {
      setLoading(true)
      const response = await fetch("/api/admin/reviews")
      if (!response.ok) throw new Error("Failed to fetch reviews")
      const data = await response.json()
      setReviews(data)
    } catch (err) {
      setError("Ошибка загрузки отзывов")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // Handle form input change
  function handleInputChange(field: keyof Review, value: unknown) {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Open create dialog
  function openCreateDialog() {
    setEditingReview(null)
    setFormData(initialReviewForm)
    setIsDialogOpen(true)
  }

  // Open edit dialog
  function openEditDialog(review: Review) {
    setEditingReview(review)
    setFormData(review)
    setIsDialogOpen(true)
  }

  // Save review
  async function saveReview() {
    try {
      setSaving(true)
      setError(null)
      
      const method = editingReview ? "PUT" : "POST"
      const body = editingReview ? { ...formData, id: editingReview.id } : formData
      
      const response = await fetch("/api/admin/reviews", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      
      if (!response.ok) throw new Error("Failed to save review")
      
      setSuccess(editingReview ? "Отзыв обновлен!" : "Отзыв добавлен!")
      setIsDialogOpen(false)
      fetchReviews()
      
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError("Ошибка сохранения отзыва")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  // Delete review
  async function deleteReview() {
    if (!reviewToDelete) return
    
    try {
      setSaving(true)
      const response = await fetch(`/api/admin/reviews?id=${reviewToDelete.id}`, {
        method: "DELETE"
      })
      
      if (!response.ok) throw new Error("Failed to delete review")
      
      setSuccess("Отзыв удален!")
      setDeleteDialogOpen(false)
      setReviewToDelete(null)
      fetchReviews()
      
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError("Ошибка удаления отзыва")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  // Toggle approval
  async function toggleApproval(review: Review) {
    try {
      const response = await fetch("/api/admin/reviews", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: review.id, approved: !review.approved })
      })
      
      if (!response.ok) throw new Error("Failed to update review")
      
      setSuccess(review.approved ? "Отзыв скрыт" : "Отзыв одобрен!")
      fetchReviews()
      
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError("Ошибка обновления отзыва")
      console.error(err)
    }
  }

  // Toggle featured
  async function toggleFeatured(review: Review) {
    try {
      const response = await fetch("/api/admin/reviews", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: review.id, featured: !review.featured })
      })
      
      if (!response.ok) throw new Error("Failed to update review")
      
      setSuccess(review.featured ? "Убрано из рекомендуемых" : "Добавлено в рекомендуемые!")
      fetchReviews()
      
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError("Ошибка обновления отзыва")
      console.error(err)
    }
  }

  const filteredReviews = reviews.filter(r => {
    const matchesSearch = r.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (r.text?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)
    const matchesStatus = statusFilter === "all" || 
                         (statusFilter === "approved" && r.approved) ||
                         (statusFilter === "pending" && !r.approved)
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (approved: boolean) => {
    if (approved) {
      return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Одобрено</Badge>
    }
    return <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">Ожидает</Badge>
  }

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      course: "Курс",
      consultation: "Консультация",
      meditation: "Медитация",
      retreat: "Ретрит"
    }
    return labels[category] || category
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-gold animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Success/Error Messages */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
        >
          <Check className="w-5 h-5" />
          {success}
        </motion.div>
      )}
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400"
        >
          <AlertCircle className="w-5 h-5" />
          {error}
          <button onClick={() => setError(null)} className="ml-auto">
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl text-cream">Отзывы</h1>
          <p className="text-cream/60">Управление отзывами клиентов</p>
        </div>
        <Button onClick={openCreateDialog} className="bg-gold hover:bg-gold/90 text-charcoal">
          <Plus className="mr-2 h-4 w-4" />
          Добавить отзыв
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{reviews.length}</p>
              <p className="text-cream/50 text-sm">Всего отзывов</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Check className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{reviews.filter(r => r.approved).length}</p>
              <p className="text-cream/50 text-sm">Одобрено</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <Eye className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{reviews.filter(r => !r.approved).length}</p>
              <p className="text-cream/50 text-sm">Ожидает</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{reviews.filter(r => r.featured).length}</p>
              <p className="text-cream/50 text-sm">Рекомендуемых</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
          <Input
            placeholder="Поиск отзывов..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-charcoal-light/50 border-white/10 text-cream"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px] bg-charcoal-light/50 border-white/10 text-cream">
            <SelectValue placeholder="Статус" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все отзывы</SelectItem>
            <SelectItem value="approved">Одобренные</SelectItem>
            <SelectItem value="pending">Ожидающие</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card p-4"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center overflow-hidden shrink-0">
                {review.clientAvatar ? (
                  <img src={review.clientAvatar} alt={review.clientName} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gold font-serif text-lg">{review.clientName.charAt(0)}</span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-cream">{review.clientName}</h3>
                  {getStatusBadge(review.approved)}
                  {review.featured && (
                    <Star className="w-4 h-4 text-gold fill-gold" />
                  )}
                </div>
                
                <div className="flex items-center gap-3 text-sm text-cream/50 mb-2">
                  <span>{review.date}</span>
                  <Badge variant="outline" className="border-white/10 text-cream/50">
                    {getCategoryLabel(review.category)}
                  </Badge>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < review.rating ? "text-gold fill-gold" : "text-cream/20"}`} />
                    ))}
                  </div>
                </div>

                {review.text && (
                  <p className="text-cream/70 text-sm line-clamp-2">{review.text}</p>
                )}
                
                {review.screenshotImage && (
                  <div className="mt-2">
                    <img 
                      src={review.screenshotImage} 
                      alt="Screenshot" 
                      className="h-16 rounded-lg object-cover cursor-pointer hover:opacity-80"
                      onClick={() => setSelectedReview(review)}
                    />
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <button 
                  onClick={() => toggleApproval(review)}
                  className={`p-2 rounded-lg transition-colors ${
                    review.approved 
                      ? "text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20" 
                      : "text-cream/40 bg-charcoal-light/50 hover:bg-white/5"
                  }`}
                  title={review.approved ? "Скрыть" : "Одобрить"}
                >
                  <Check className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => toggleFeatured(review)}
                  className={`p-2 rounded-lg transition-colors ${
                    review.featured 
                      ? "text-gold bg-gold/10 hover:bg-gold/20" 
                      : "text-cream/40 bg-charcoal-light/50 hover:bg-white/5"
                  }`}
                  title={review.featured ? "Убрать из рекомендуемых" : "В рекомендуемые"}
                >
                  <Star className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => openEditDialog(review)}
                  className="p-2 text-cream/40 hover:text-cream hover:bg-white/5 rounded-lg"
                  title="Редактировать"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setSelectedReview(review)}
                  className="p-2 text-cream/40 hover:text-cream hover:bg-white/5 rounded-lg"
                  title="Просмотр"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => {
                    setReviewToDelete(review)
                    setDeleteDialogOpen(true)
                  }}
                  className="p-2 text-cream/40 hover:text-red-400 hover:bg-red-500/10 rounded-lg"
                  title="Удалить"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="w-12 h-12 text-cream/20 mx-auto mb-3" />
          <p className="text-cream/50">Отзывы не найдены</p>
        </div>
      )}

      {/* View Review Dialog */}
      <Dialog open={!!selectedReview && !isDialogOpen} onOpenChange={() => setSelectedReview(null)}>
        <DialogContent className="max-w-lg bg-charcoal border-white/10">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl text-cream">Отзыв от {selectedReview?.clientName}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-serif">{selectedReview?.clientName.charAt(0)}</span>
              </div>
              <div>
                <p className="text-cream font-medium">{selectedReview?.clientName}</p>
                <p className="text-cream/50 text-sm">{selectedReview?.date}</p>
              </div>
            </div>
            
            {selectedReview?.text && (
              <p className="text-cream/80">{selectedReview.text}</p>
            )}
            
            {selectedReview?.screenshotImage && (
              <img src={selectedReview.screenshotImage} alt="Screenshot" className="w-full rounded-lg" />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-charcoal border-white/10">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-cream">
              {editingReview ? "Редактирование отзыва" : "Добавление отзыва"}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-cream">Имя клиента</Label>
                <Input
                  value={formData.clientName || ""}
                  onChange={(e) => handleInputChange("clientName", e.target.value)}
                  placeholder="Имя клиента"
                  className="bg-charcoal-light/50 border-white/10 text-cream"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-cream">Категория</Label>
                <Select 
                  value={formData.category || "consultation"}
                  onValueChange={(value) => handleInputChange("category", value)}
                >
                  <SelectTrigger className="bg-charcoal-light/50 border-white/10 text-cream">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="course">Курс</SelectItem>
                    <SelectItem value="consultation">Консультация</SelectItem>
                    <SelectItem value="meditation">Медитация</SelectItem>
                    <SelectItem value="retreat">Ретрит</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-cream">Текст отзыва</Label>
              <Textarea
                value={formData.text || ""}
                onChange={(e) => handleInputChange("text", e.target.value)}
                placeholder="Текст отзыва..."
                className="bg-charcoal-light/50 border-white/10 text-cream min-h-[120px]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-cream">URL аватара</Label>
                <Input
                  value={formData.clientAvatar || ""}
                  onChange={(e) => handleInputChange("clientAvatar", e.target.value)}
                  placeholder="/images/reviews/avatar.jpg"
                  className="bg-charcoal-light/50 border-white/10 text-cream"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-cream">URL скриншота</Label>
                <Input
                  value={formData.screenshotImage || ""}
                  onChange={(e) => handleInputChange("screenshotImage", e.target.value)}
                  placeholder="/images/reviews/screenshot.jpg"
                  className="bg-charcoal-light/50 border-white/10 text-cream"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-cream">Рейтинг</Label>
                <Select 
                  value={String(formData.rating || 5)}
                  onValueChange={(value) => handleInputChange("rating", parseInt(value))}
                >
                  <SelectTrigger className="bg-charcoal-light/50 border-white/10 text-cream">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[5, 4, 3, 2, 1].map(r => (
                      <SelectItem key={r} value={String(r)}>{r} звезд</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-cream">Дата</Label>
                <Input
                  type="date"
                  value={formData.date || ""}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="bg-charcoal-light/50 border-white/10 text-cream"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-charcoal-light/30 border border-white/5">
                <div>
                  <p className="text-cream font-medium">Одобрено</p>
                  <p className="text-cream/50 text-sm">Показывать на сайте</p>
                </div>
                <Switch 
                  checked={formData.approved || false} 
                  onCheckedChange={(checked) => handleInputChange("approved", checked)}
                />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-charcoal-light/30 border border-white/5">
                <div>
                  <p className="text-cream font-medium">Рекомендуемый</p>
                  <p className="text-cream/50 text-sm">Показывать в блоке рекомендаций</p>
                </div>
                <Switch 
                  checked={formData.featured || false} 
                  onCheckedChange={(checked) => handleInputChange("featured", checked)}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              className="border-white/10 text-cream/70"
            >
              Отмена
            </Button>
            <Button
              onClick={saveReview}
              disabled={saving}
              className="bg-gold text-charcoal hover:bg-gold-light"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              {editingReview ? "Сохранить" : "Добавить"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-charcoal border-white/10">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-cream">Удалить отзыв?</AlertDialogTitle>
            <AlertDialogDescription className="text-cream/60">
              Вы уверены, что хотите удалить отзыв от &quot;{reviewToDelete?.clientName}&quot;? 
              Это действие нельзя отменить.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-white/10 text-cream/70">Отмена</AlertDialogCancel>
            <AlertDialogAction
              onClick={deleteReview}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Удалить"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
