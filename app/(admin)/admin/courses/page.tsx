"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, Eye, Search, MoreHorizontal, BookOpen, Users, Star, DollarSign } from "lucide-react"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { coursesStore, type Course } from "@/lib/admin-store"
import { toast } from "sonner"

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)
  const [deletingCourse, setDeletingCourse] = useState<Course | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    slug: "",
    description: "",
    image: "/images/courses/default.jpg",
    price: 0,
    originalPrice: 0,
    currency: "RUB",
    duration: "",
    lessonsCount: 0,
    level: "beginner" as "beginner" | "intermediate" | "advanced",
    category: "numerology",
    instructor: "Мария Иванова",
    rating: 5,
    studentsCount: 0,
    status: "draft" as "active" | "draft" | "coming_soon",
    featured: false,
  })

  // Load courses on mount
  useEffect(() => {
    loadCourses()
  }, [])

  const loadCourses = () => {
    const data = coursesStore.getAll()
    setCourses(data)
  }

  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      slug: "",
      description: "",
      image: "/images/courses/default.jpg",
      price: 0,
      originalPrice: 0,
      currency: "RUB",
      duration: "",
      lessonsCount: 0,
      level: "beginner",
      category: "numerology",
      instructor: "Мария Иванова",
      rating: 5,
      studentsCount: 0,
      status: "draft",
      featured: false,
    })
    setEditingCourse(null)
  }

  const openCreateDialog = () => {
    resetForm()
    setIsDialogOpen(true)
  }

  const openEditDialog = (course: Course) => {
    setEditingCourse(course)
    setFormData({
      title: course.title,
      subtitle: course.subtitle || "",
      slug: course.slug,
      description: course.description,
      image: course.image,
      price: course.price,
      originalPrice: course.originalPrice || 0,
      currency: course.currency,
      duration: course.duration,
      lessonsCount: course.lessonsCount,
      level: course.level,
      category: course.category,
      instructor: course.instructor,
      rating: course.rating,
      studentsCount: course.studentsCount,
      status: course.status,
      featured: course.featured,
    })
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (!formData.title.trim()) {
      toast.error("Введите название курса")
      return
    }
    if (!formData.slug.trim()) {
      toast.error("Введите slug курса")
      return
    }

    setIsLoading(true)

    try {
      if (editingCourse) {
        coursesStore.update(editingCourse.id, {
          ...formData,
          modules: editingCourse.modules || []
        })
        toast.success("Курс успешно обновлен!")
      } else {
        coursesStore.create({
          ...formData,
          modules: []
        })
        toast.success("Курс успешно создан!")
      }

      loadCourses()
      setIsDialogOpen(false)
      resetForm()
    } catch (error) {
      toast.error("Ошибка при сохранении курса")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = () => {
    if (!deletingCourse) return

    setIsLoading(true)
    try {
      coursesStore.delete(deletingCourse.id)
      toast.success("Курс успешно удален!")
      loadCourses()
      setIsDeleteDialogOpen(false)
      setDeletingCourse(null)
    } catch (error) {
      toast.error("Ошибка при удалении курса")
    } finally {
      setIsLoading(false)
    }
  }

  const openDeleteDialog = (course: Course) => {
    setDeletingCourse(course)
    setIsDeleteDialogOpen(true)
  }

  const toggleFeatured = (course: Course) => {
    coursesStore.update(course.id, { featured: !course.featured })
    loadCourses()
    toast.success(course.featured ? "Курс убран из избранных" : "Курс добавлен в избранные")
  }

  const changeStatus = (course: Course, status: "active" | "draft" | "coming_soon") => {
    coursesStore.update(course.id, { status })
    loadCourses()
    toast.success("Статус курса обновлен")
  }

  // Filter courses
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) ||
                         course.description.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "all" || course.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Stats
  const stats = {
    total: courses.length,
    active: courses.filter(c => c.status === "active").length,
    students: courses.reduce((sum, c) => sum + c.studentsCount, 0),
    revenue: courses.filter(c => c.status === "active").reduce((sum, c) => sum + (c.price * c.studentsCount), 0)
  }

  const statusColors: Record<string, string> = {
    active: "bg-green-500/20 text-green-400 border-green-500/30",
    draft: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    coming_soon: "bg-blue-500/20 text-blue-400 border-blue-500/30"
  }

  const statusLabels: Record<string, string> = {
    active: "Активный",
    draft: "Черновик",
    coming_soon: "Скоро"
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
          <h1 className="text-3xl font-bold text-foreground">Курсы</h1>
          <p className="text-muted-foreground mt-1">Управление курсами и обучающими материалами</p>
        </div>
        <Button onClick={openCreateDialog} className="bg-gold hover:bg-gold/90 text-black">
          <Plus className="w-4 h-4 mr-2" />
          Добавить курс
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Всего курсов</CardTitle>
            <BookOpen className="w-4 h-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Активных</CardTitle>
            <Star className="w-4 h-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">{stats.active}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Студентов</CardTitle>
            <Users className="w-4 h-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">{stats.students}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Выручка</CardTitle>
            <DollarSign className="w-4 h-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gold">{stats.revenue.toLocaleString()} ₽</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Поиск курсов..."
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
            <SelectItem value="active">Активные</SelectItem>
            <SelectItem value="draft">Черновики</SelectItem>
            <SelectItem value="coming_soon">Скоро</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="bg-card/50 border-border/50">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead>Курс</TableHead>
              <TableHead>Цена</TableHead>
              <TableHead>Уровень</TableHead>
              <TableHead>Студентов</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCourses.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  Курсы не найдены. Нажмите &quot;Добавить курс&quot; чтобы создать первый.
                </TableCell>
              </TableRow>
            ) : (
              filteredCourses.map((course) => (
                <TableRow key={course.id} className="border-border/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {course.title}
                          {course.featured && (
                            <Star className="w-3 h-3 text-gold fill-gold" />
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {course.duration} • {course.lessonsCount} уроков
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{course.price.toLocaleString()} ₽</div>
                      {course.originalPrice && course.originalPrice > course.price && (
                        <div className="text-sm text-muted-foreground line-through">
                          {course.originalPrice.toLocaleString()} ₽
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-border/50">
                      {levelLabels[course.level]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      {course.studentsCount}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[course.status]}>
                      {statusLabels[course.status]}
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
                        <DropdownMenuItem onClick={() => openEditDialog(course)}>
                          <Edit className="w-4 h-4 mr-2" />
                          Редактировать
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleFeatured(course)}>
                          <Star className="w-4 h-4 mr-2" />
                          {course.featured ? "Убрать из избранных" : "В избранное"}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeStatus(course, course.status === "active" ? "draft" : "active")}>
                          <Eye className="w-4 h-4 mr-2" />
                          {course.status === "active" ? "В черновики" : "Опубликовать"}
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => openDeleteDialog(course)}
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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingCourse ? "Редактировать курс" : "Создать курс"}</DialogTitle>
            <DialogDescription>
              {editingCourse ? "Измените информацию о курсе" : "Заполните информацию о новом курсе"}
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="basic" className="mt-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Основное</TabsTrigger>
              <TabsTrigger value="details">Детали</TabsTrigger>
              <TabsTrigger value="pricing">Цены</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Название курса *</Label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Введите название курса"
                />
              </div>
              <div className="space-y-2">
                <Label>Подзаголовок</Label>
                <Input
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Краткое описание"
                />
              </div>
              <div className="space-y-2">
                <Label>Slug (URL) *</Label>
                <Input
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                  placeholder="url-kursa"
                />
              </div>
              <div className="space-y-2">
                <Label>Описание *</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Полное описание курса"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label>URL изображения</Label>
                <Input
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="/images/courses/course.jpg"
                />
              </div>
            </TabsContent>

            <TabsContent value="details" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Длительность</Label>
                  <Input
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="4 недели"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Количество уроков</Label>
                  <Input
                    type="number"
                    value={formData.lessonsCount}
                    onChange={(e) => setFormData({ ...formData, lessonsCount: parseInt(e.target.value) || 0 })}
                  />
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
                  <Label>Категория</Label>
                  <Select value={formData.category} onValueChange={(v) => setFormData({ ...formData, category: v })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="numerology">Нумерология</SelectItem>
                      <SelectItem value="karma">Карма</SelectItem>
                      <SelectItem value="meditation">Медитация</SelectItem>
                      <SelectItem value="spiritual">Духовность</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Статус</Label>
                  <Select value={formData.status} onValueChange={(v: "active" | "draft" | "coming_soon") => setFormData({ ...formData, status: v })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Черновик</SelectItem>
                      <SelectItem value="active">Активный</SelectItem>
                      <SelectItem value="coming_soon">Скоро</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Инструктор</Label>
                  <Input
                    value={formData.instructor}
                    onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Цена (₽) *</Label>
                  <Input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Старая цена (₽)</Label>
                  <Input
                    type="number"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Количество студентов</Label>
                  <Input
                    type="number"
                    value={formData.studentsCount}
                    onChange={(e) => setFormData({ ...formData, studentsCount: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Рейтинг (1-5)</Label>
                  <Input
                    type="number"
                    min={1}
                    max={5}
                    step={0.1}
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) || 5 })}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 p-4 rounded-lg bg-muted/50">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="rounded border-border"
                />
                <Label htmlFor="featured" className="cursor-pointer">Избранный курс (показывать на главной)</Label>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Отмена
            </Button>
            <Button 
              onClick={handleSave} 
              disabled={isLoading || !formData.title || !formData.slug}
              className="bg-gold hover:bg-gold/90 text-black"
            >
              {isLoading ? "Сохранение..." : (editingCourse ? "Сохранить" : "Создать")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Удалить курс?</DialogTitle>
            <DialogDescription>
              Вы уверены, что хотите удалить курс &quot;{deletingCourse?.title}&quot;? Это действие нельзя отменить.
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
