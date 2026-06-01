"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, Play, Music, Clock, Search, MoreHorizontal, Star, Eye } from "lucide-react"
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
import { meditationsStore, type Meditation } from "@/lib/admin-store"
import { toast } from "sonner"

export default function AdminMeditationsPage() {
  const [meditations, setMeditations] = useState<Meditation[]>([])
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editingMeditation, setEditingMeditation] = useState<Meditation | null>(null)
  const [deletingMeditation, setDeletingMeditation] = useState<Meditation | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    duration: "15 мин",
    image: "/images/meditations/default.jpg",
    audioUrl: "",
    category: "morning",
    level: "beginner" as "beginner" | "intermediate" | "advanced",
    instructor: "Мария Иванова",
    status: "draft" as "active" | "draft" | "coming_soon",
    featured: false,
  })

  useEffect(() => {
    loadMeditations()
  }, [])

  const loadMeditations = () => {
    const data = meditationsStore.getAll()
    setMeditations(data)
  }

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      description: "",
      duration: "15 мин",
      image: "/images/meditations/default.jpg",
      audioUrl: "",
      category: "morning",
      level: "beginner",
      instructor: "Мария Иванова",
      status: "draft",
      featured: false,
    })
    setEditingMeditation(null)
  }

  const openCreateDialog = () => {
    resetForm()
    setIsDialogOpen(true)
  }

  const openEditDialog = (meditation: Meditation) => {
    setEditingMeditation(meditation)
    setFormData({
      title: meditation.title,
      slug: meditation.slug,
      description: meditation.description,
      duration: meditation.duration,
      image: meditation.image,
      audioUrl: meditation.audioUrl || "",
      category: meditation.category,
      level: meditation.level,
      instructor: meditation.instructor,
      status: meditation.status,
      featured: meditation.featured,
    })
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (!formData.title.trim()) {
      toast.error("Введите название медитации")
      return
    }
    if (!formData.slug.trim()) {
      toast.error("Введите slug медитации")
      return
    }

    setIsLoading(true)

    try {
      if (editingMeditation) {
        meditationsStore.update(editingMeditation.id, formData)
        toast.success("Медитация успешно обновлена!")
      } else {
        meditationsStore.create(formData)
        toast.success("Медитация успешно создана!")
      }

      loadMeditations()
      setIsDialogOpen(false)
      resetForm()
    } catch (error) {
      toast.error("Ошибка при сохранении медитации")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = () => {
    if (!deletingMeditation) return

    setIsLoading(true)
    try {
      meditationsStore.delete(deletingMeditation.id)
      toast.success("Медитация успешно удалена!")
      loadMeditations()
      setIsDeleteDialogOpen(false)
      setDeletingMeditation(null)
    } catch (error) {
      toast.error("Ошибка при удалении медитации")
    } finally {
      setIsLoading(false)
    }
  }

  const openDeleteDialog = (meditation: Meditation) => {
    setDeletingMeditation(meditation)
    setIsDeleteDialogOpen(true)
  }

  const toggleFeatured = (meditation: Meditation) => {
    meditationsStore.update(meditation.id, { featured: !meditation.featured })
    loadMeditations()
    toast.success(meditation.featured ? "Медитация убрана из избранных" : "Медитация добавлена в избранные")
  }

  const changeStatus = (meditation: Meditation, status: "active" | "draft" | "coming_soon") => {
    meditationsStore.update(meditation.id, { status })
    loadMeditations()
    toast.success("Статус медитации обновлен")
  }

  // Filter meditations
  const filteredMeditations = meditations.filter(meditation => {
    const matchesSearch = meditation.title.toLowerCase().includes(search.toLowerCase()) ||
                         meditation.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = categoryFilter === "all" || meditation.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  // Stats
  const stats = {
    total: meditations.length,
    active: meditations.filter(m => m.status === "active").length,
    featured: meditations.filter(m => m.featured).length,
  }

  const statusColors: Record<string, string> = {
    active: "bg-green-500/20 text-green-400 border-green-500/30",
    draft: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    coming_soon: "bg-blue-500/20 text-blue-400 border-blue-500/30"
  }

  const statusLabels: Record<string, string> = {
    active: "Активная",
    draft: "Черновик",
    coming_soon: "Скоро"
  }

  const categoryLabels: Record<string, string> = {
    morning: "Утренняя",
    energy: "Энергия",
    healing: "Исцеление",
    deep: "Глубокая",
    sleep: "Сон"
  }

  const levelLabels: Record<string, string> = {
    beginner: "Начальный",
    intermediate: "Средний",
    advanced: "Продвинутый"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Медитации</h1>
          <p className="text-muted-foreground mt-1">Управление аудио-медитациями</p>
        </div>
        <Button onClick={openCreateDialog} className="bg-gold hover:bg-gold/90 text-black">
          <Plus className="w-4 h-4 mr-2" />
          Добавить медитацию
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Всего медитаций</CardTitle>
            <Music className="w-4 h-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Активных</CardTitle>
            <Play className="w-4 h-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">{stats.active}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Избранных</CardTitle>
            <Star className="w-4 h-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gold">{stats.featured}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Поиск медитаций..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-background/50"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-40 bg-background/50">
            <SelectValue placeholder="Категория" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все категории</SelectItem>
            <SelectItem value="morning">Утренние</SelectItem>
            <SelectItem value="energy">Энергия</SelectItem>
            <SelectItem value="healing">Исцеление</SelectItem>
            <SelectItem value="deep">Глубокие</SelectItem>
            <SelectItem value="sleep">Сон</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="bg-card/50 border-border/50">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead>Медитация</TableHead>
              <TableHead>Категория</TableHead>
              <TableHead>Длительность</TableHead>
              <TableHead>Уровень</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMeditations.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  Медитации не найдены. Нажмите &quot;Добавить медитацию&quot; чтобы создать первую.
                </TableCell>
              </TableRow>
            ) : (
              filteredMeditations.map((meditation) => (
                <TableRow key={meditation.id} className="border-border/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <Music className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {meditation.title}
                          {meditation.featured && (
                            <Star className="w-3 h-3 text-gold fill-gold" />
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {meditation.description}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-border/50">
                      {categoryLabels[meditation.category] || meditation.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      {meditation.duration}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-border/50">
                      {levelLabels[meditation.level]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[meditation.status]}>
                      {statusLabels[meditation.status]}
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
                        <DropdownMenuItem onClick={() => openEditDialog(meditation)}>
                          <Edit className="w-4 h-4 mr-2" />
                          Редактировать
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleFeatured(meditation)}>
                          <Star className="w-4 h-4 mr-2" />
                          {meditation.featured ? "Убрать из избранных" : "В избранное"}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeStatus(meditation, meditation.status === "active" ? "draft" : "active")}>
                          <Eye className="w-4 h-4 mr-2" />
                          {meditation.status === "active" ? "В черновики" : "Опубликовать"}
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => openDeleteDialog(meditation)}
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
            <DialogTitle>{editingMeditation ? "Редактировать медитацию" : "Создать медитацию"}</DialogTitle>
            <DialogDescription>
              {editingMeditation ? "Измените информацию о медитации" : "Заполните информацию о новой медитации"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Название *</Label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Утренняя медитация"
              />
            </div>
            <div className="space-y-2">
              <Label>Slug (URL) *</Label>
              <Input
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                placeholder="utrennyaya-meditatsiya"
              />
            </div>
            <div className="space-y-2">
              <Label>Описание</Label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Описание медитации"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Длительность</Label>
                <Input
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="15 мин"
                />
              </div>
              <div className="space-y-2">
                <Label>Категория</Label>
                <Select value={formData.category} onValueChange={(v) => setFormData({ ...formData, category: v })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Утренняя</SelectItem>
                    <SelectItem value="energy">Энергия</SelectItem>
                    <SelectItem value="healing">Исцеление</SelectItem>
                    <SelectItem value="deep">Глубокая</SelectItem>
                    <SelectItem value="sleep">Сон</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Уровень</Label>
                <Select value={formData.level} onValueChange={(v: "beginner" | "intermediate" | "advanced") => setFormData({ ...formData, level: v })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Начальный</SelectItem>
                    <SelectItem value="intermediate">Средний</SelectItem>
                    <SelectItem value="advanced">Продвинутый</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Статус</Label>
                <Select value={formData.status} onValueChange={(v: "active" | "draft" | "coming_soon") => setFormData({ ...formData, status: v })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Черновик</SelectItem>
                    <SelectItem value="active">Активная</SelectItem>
                    <SelectItem value="coming_soon">Скоро</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>URL аудио файла</Label>
              <Input
                value={formData.audioUrl}
                onChange={(e) => setFormData({ ...formData, audioUrl: e.target.value })}
                placeholder="/audio/meditation.mp3"
              />
            </div>
            <div className="space-y-2">
              <Label>URL изображения</Label>
              <Input
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="/images/meditations/cover.jpg"
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
              <Label htmlFor="featured" className="cursor-pointer">Избранная медитация</Label>
            </div>
          </div>

          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Отмена
            </Button>
            <Button 
              onClick={handleSave} 
              disabled={isLoading || !formData.title || !formData.slug}
              className="bg-gold hover:bg-gold/90 text-black"
            >
              {isLoading ? "Сохранение..." : (editingMeditation ? "Сохранить" : "Создать")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Удалить медитацию?</DialogTitle>
            <DialogDescription>
              Вы уверены, что хотите удалить медитацию &quot;{deletingMeditation?.title}&quot;? Это действие нельзя отменить.
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
