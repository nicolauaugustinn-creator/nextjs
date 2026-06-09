"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, Eye, Search, FileText, MoreHorizontal, Star, Calendar } from "lucide-react"
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
import { toast } from "sonner"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  status: "published" | "draft"
  featured: boolean
  created_at: string
  updated_at: string
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [deletingPost, setDeletingPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "/images/blog/default.jpg",
    category: "basics",
    author: "Мария Иванова",
    status: "draft" as "published" | "draft",
    featured: false,
  })

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const response = await fetch('/api/admin/blog')
      const data = await response.json()
      setPosts(data || [])
    } catch (error) {
      console.error('Error loading posts:', error)
      toast.error("Ошибка при загрузке статей")
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      image: "/images/blog/default.jpg",
      category: "basics",
      author: "Мария Иванова",
      status: "draft",
      featured: false,
    })
    setEditingPost(null)
  }

  const openCreateDialog = () => {
    resetForm()
    setIsDialogOpen(true)
  }

  const openEditDialog = (post: BlogPost) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      category: post.category,
      author: post.author,
      status: post.status,
      featured: post.featured,
    })
    setIsDialogOpen(true)
  }

  const handleSave = async () => {
    if (!formData.title.trim()) {
      toast.error("Введите заголовок статьи")
      return
    }
    if (!formData.slug.trim()) {
      toast.error("Введите slug статьи")
      return
    }

    setIsLoading(true)

    try {
      const method = editingPost ? 'PUT' : 'POST'
      const body = editingPost 
        ? { id: editingPost.id, ...formData }
        : formData

      const response = await fetch('/api/admin/blog', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      if (!response.ok) throw new Error('API error')

      toast.success(editingPost ? "Статья успешно обновлена!" : "Статья успешно создана!")
      loadPosts()
      setIsDialogOpen(false)
      resetForm()
    } catch (error) {
      toast.error("Ошибка при сохранении статьи")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!deletingPost) return

    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/blog?id=${deletingPost.id}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('API error')

      toast.success("Статья успешно удалена!")
      loadPosts()
      setIsDeleteDialogOpen(false)
      setDeletingPost(null)
    } catch (error) {
      toast.error("Ошибка при удалении статьи")
    } finally {
      setIsLoading(false)
    }
  }

  const openDeleteDialog = (post: BlogPost) => {
    setDeletingPost(post)
    setIsDeleteDialogOpen(true)
  }

  const toggleFeatured = async (post: BlogPost) => {
    try {
      const response = await fetch('/api/admin/blog', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          id: post.id, 
          ...post,
          featured: !post.featured 
        })
      })
      if (response.ok) {
        loadPosts()
        toast.success(post.featured ? "Статья убрана из избранных" : "Статья добавлена в избранные")
      }
    } catch (error) {
      toast.error("Ошибка при обновлении статьи")
    }
  }

  const togglePublished = async (post: BlogPost) => {
    const newStatus = post.status === "published" ? "draft" : "published"
    try {
      const response = await fetch('/api/admin/blog', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          id: post.id, 
          ...post,
          status: newStatus 
        })
      })
      if (response.ok) {
        loadPosts()
        toast.success(newStatus === "published" ? "Статья опубликована" : "Статья снята с публикации")
      }
    } catch (error) {
      toast.error("Ошибка при обновлении статьи")
    }
  }

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "all" || post.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Stats
  const stats = {
    total: posts.length,
    published: posts.filter(p => p.status === "published").length,
    draft: posts.filter(p => p.status === "draft").length,
  }

  const statusColors: Record<string, string> = {
    published: "bg-green-500/20 text-green-400 border-green-500/30",
    draft: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
  }

  const statusLabels: Record<string, string> = {
    published: "Опубликована",
    draft: "Черновик"
  }

  const categoryLabels: Record<string, string> = {
    basics: "Основы",
    numerology: "Нумерология",
    karma: "Карма",
    spiritual: "Духовность",
    meditation: "Медитация"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Блог</h1>
          <p className="text-muted-foreground mt-1">Управление статьями и публикациями</p>
        </div>
        <Button onClick={openCreateDialog} className="bg-gold hover:bg-gold/90 text-black">
          <Plus className="w-4 h-4 mr-2" />
          Написать статью
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Всего статей</CardTitle>
            <FileText className="w-4 h-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Опубликовано</CardTitle>
            <Eye className="w-4 h-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">{stats.published}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Черновиков</CardTitle>
            <Edit className="w-4 h-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">{stats.draft}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Поиск статей..."
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
            <SelectItem value="published">Опубликованные</SelectItem>
            <SelectItem value="draft">Черновики</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="bg-card/50 border-border/50">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead>Статья</TableHead>
              <TableHead>Категория</TableHead>
              <TableHead>Автор</TableHead>
              <TableHead>Дата</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  Статьи не найдены. Нажмите &quot;Написать статью&quot; чтобы создать первую.
                </TableCell>
              </TableRow>
            ) : (
              filteredPosts.map((post) => (
                <TableRow key={post.id} className="border-border/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {post.title}
                          {post.featured && (
                            <Star className="w-3 h-3 text-gold fill-gold" />
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {post.excerpt}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-border/50">
                      {categoryLabels[post.category] || post.category}
                    </Badge>
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.created_at).toLocaleDateString('ru-RU')}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[post.status]}>
                      {statusLabels[post.status]}
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
                        <DropdownMenuItem onClick={() => openEditDialog(post)}>
                          <Edit className="w-4 h-4 mr-2" />
                          Редактировать
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleFeatured(post)}>
                          <Star className="w-4 h-4 mr-2" />
                          {post.featured ? "Убрать из избранных" : "В избранное"}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => togglePublished(post)}>
                          <Eye className="w-4 h-4 mr-2" />
                          {post.status === "published" ? "Снять с публикации" : "Опубликовать"}
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => openDeleteDialog(post)}
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
            <DialogTitle>{editingPost ? "Редактировать статью" : "Создать статью"}</DialogTitle>
            <DialogDescription>
              {editingPost ? "Измените содержание статьи" : "Заполните информацию о новой статье"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Заголовок *</Label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Заголовок статьи"
              />
            </div>
            <div className="space-y-2">
              <Label>Slug (URL) *</Label>
              <Input
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                placeholder="url-stati"
              />
            </div>
            <div className="space-y-2">
              <Label>Краткое описание</Label>
              <Textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Краткое описание для превью"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label>Содержание</Label>
              <Textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Полный текст статьи..."
                rows={8}
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
                    <SelectItem value="basics">Основы</SelectItem>
                    <SelectItem value="numerology">Нумерология</SelectItem>
                    <SelectItem value="karma">Карма</SelectItem>
                    <SelectItem value="spiritual">Духовность</SelectItem>
                    <SelectItem value="meditation">Медитация</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Статус</Label>
                <Select value={formData.status} onValueChange={(v: "published" | "draft") => setFormData({ ...formData, status: v })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Черновик</SelectItem>
                    <SelectItem value="published">Опубликована</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Автор</Label>
              <Input
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>URL изображения</Label>
              <Input
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="/images/blog/cover.jpg"
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
              <Label htmlFor="featured" className="cursor-pointer">Избранная статья (показывать на главной)</Label>
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
              {isLoading ? "Сохранение..." : (editingPost ? "Сохранить" : "Создать")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Удалить статью?</DialogTitle>
            <DialogDescription>
              Вы уверены, что хотите удалить статью &quot;{deletingPost?.title}&quot;? Это действие нельзя отменить.
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
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [deletingPost, setDeletingPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "/images/blog/default.jpg",
    category: "basics",
    author: "Мария Иванова",
    status: "draft" as "published" | "draft",
    featured: false,
  })

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = () => {
    const data = blogStore.getAll()
    setPosts(data)
  }

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      image: "/images/blog/default.jpg",
      category: "basics",
      author: "Мария Иванова",
      status: "draft",
      featured: false,
    })
    setEditingPost(null)
  }

  const openCreateDialog = () => {
    resetForm()
    setIsDialogOpen(true)
  }

  const openEditDialog = (post: BlogPost) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      category: post.category,
      author: post.author,
      status: post.status,
      featured: post.featured,
    })
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (!formData.title.trim()) {
      toast.error("Введите заголовок статьи")
      return
    }
    if (!formData.slug.trim()) {
      toast.error("Введите slug статьи")
      return
    }

    setIsLoading(true)

    try {
      if (editingPost) {
        blogStore.update(editingPost.id, formData)
        toast.success("Статья успешно обновлена!")
      } else {
        blogStore.create(formData)
        toast.success("Статья успешно создана!")
      }

      loadPosts()
      setIsDialogOpen(false)
      resetForm()
    } catch (error) {
      toast.error("Ошибка при сохранении статьи")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = () => {
    if (!deletingPost) return

    setIsLoading(true)
    try {
      blogStore.delete(deletingPost.id)
      toast.success("Статья успешно удалена!")
      loadPosts()
      setIsDeleteDialogOpen(false)
      setDeletingPost(null)
    } catch (error) {
      toast.error("Ошибка при удалении статьи")
    } finally {
      setIsLoading(false)
    }
  }

  const openDeleteDialog = (post: BlogPost) => {
    setDeletingPost(post)
    setIsDeleteDialogOpen(true)
  }

  const toggleFeatured = (post: BlogPost) => {
    blogStore.update(post.id, { featured: !post.featured })
    loadPosts()
    toast.success(post.featured ? "Статья убрана из избранных" : "Статья добавлена в избранные")
  }

  const togglePublished = (post: BlogPost) => {
    const newStatus = post.status === "published" ? "draft" : "published"
    blogStore.update(post.id, { status: newStatus })
    loadPosts()
    toast.success(newStatus === "published" ? "Статья опубликована" : "Статья снята с публикации")
  }

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "all" || post.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Stats
  const stats = {
    total: posts.length,
    published: posts.filter(p => p.status === "published").length,
    draft: posts.filter(p => p.status === "draft").length,
  }

  const statusColors: Record<string, string> = {
    published: "bg-green-500/20 text-green-400 border-green-500/30",
    draft: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
  }

  const statusLabels: Record<string, string> = {
    published: "Опубликована",
    draft: "Черновик"
  }

  const categoryLabels: Record<string, string> = {
    basics: "Основы",
    numerology: "Нумерология",
    karma: "Карма",
    spiritual: "Духовность",
    meditation: "Медитация"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Блог</h1>
          <p className="text-muted-foreground mt-1">Управление статьями и публикациями</p>
        </div>
        <Button onClick={openCreateDialog} className="bg-gold hover:bg-gold/90 text-black">
          <Plus className="w-4 h-4 mr-2" />
          Написать статью
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Всего статей</CardTitle>
            <FileText className="w-4 h-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Опубликовано</CardTitle>
            <Eye className="w-4 h-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">{stats.published}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Черновиков</CardTitle>
            <Edit className="w-4 h-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">{stats.draft}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Поиск статей..."
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
            <SelectItem value="published">Опубликованные</SelectItem>
            <SelectItem value="draft">Черновики</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="bg-card/50 border-border/50">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead>Статья</TableHead>
              <TableHead>Категория</TableHead>
              <TableHead>Автор</TableHead>
              <TableHead>Дата</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  Статьи не найдены. Нажмите &quot;Написать статью&quot; чтобы создать первую.
                </TableCell>
              </TableRow>
            ) : (
              filteredPosts.map((post) => (
                <TableRow key={post.id} className="border-border/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {post.title}
                          {post.featured && (
                            <Star className="w-3 h-3 text-gold fill-gold" />
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {post.excerpt}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-border/50">
                      {categoryLabels[post.category] || post.category}
                    </Badge>
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.createdAt).toLocaleDateString('ru-RU')}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[post.status]}>
                      {statusLabels[post.status]}
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
                        <DropdownMenuItem onClick={() => openEditDialog(post)}>
                          <Edit className="w-4 h-4 mr-2" />
                          Редактировать
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleFeatured(post)}>
                          <Star className="w-4 h-4 mr-2" />
                          {post.featured ? "Убрать из избранных" : "В избранное"}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => togglePublished(post)}>
                          <Eye className="w-4 h-4 mr-2" />
                          {post.status === "published" ? "Снять с публикации" : "Опубликовать"}
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => openDeleteDialog(post)}
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
            <DialogTitle>{editingPost ? "Редактировать статью" : "Создать статью"}</DialogTitle>
            <DialogDescription>
              {editingPost ? "Измените содержание статьи" : "Заполните информацию о новой статье"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Заголовок *</Label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Заголовок статьи"
              />
            </div>
            <div className="space-y-2">
              <Label>Slug (URL) *</Label>
              <Input
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                placeholder="url-stati"
              />
            </div>
            <div className="space-y-2">
              <Label>Краткое описание</Label>
              <Textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Краткое описание для превью"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label>Содержание</Label>
              <Textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Полный текст статьи..."
                rows={8}
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
                    <SelectItem value="basics">Основы</SelectItem>
                    <SelectItem value="numerology">Нумерология</SelectItem>
                    <SelectItem value="karma">Карма</SelectItem>
                    <SelectItem value="spiritual">Духовность</SelectItem>
                    <SelectItem value="meditation">Медитация</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Статус</Label>
                <Select value={formData.status} onValueChange={(v: "published" | "draft") => setFormData({ ...formData, status: v })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Черновик</SelectItem>
                    <SelectItem value="published">Опубликована</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Автор</Label>
              <Input
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>URL изображения</Label>
              <Input
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="/images/blog/cover.jpg"
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
              <Label htmlFor="featured" className="cursor-pointer">Избранная статья (показывать на главной)</Label>
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
              {isLoading ? "Сохранение..." : (editingPost ? "Сохранить" : "Создать")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Удалить статью?</DialogTitle>
            <DialogDescription>
              Вы уверены, что хотите удалить статью &quot;{deletingPost?.title}&quot;? Это действие нельзя отменить.
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
