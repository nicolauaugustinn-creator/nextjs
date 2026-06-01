"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Plus, Pencil, Trash2, Eye, Search, Calendar, FileText, Loader2, Check, AlertCircle, X, Save, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
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

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  author: string
  publishedAt: string
  status: "draft" | "published"
  featured: boolean
}

const initialBlogForm: Partial<BlogPost> = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  category: "Основы",
  author: "Валентина Ведигора",
  publishedAt: new Date().toISOString().split("T")[0],
  status: "draft",
  featured: false
}

const categories = ["Основы", "Практика", "Деньги", "Отношения", "Здоровье", "Предназначение"]

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState<"all" | "published" | "draft">("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null)
  
  const [formData, setFormData] = useState<Partial<BlogPost>>(initialBlogForm)

  // Fetch posts
  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      setLoading(true)
      const response = await fetch("/api/admin/blog")
      if (!response.ok) throw new Error("Failed to fetch posts")
      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError("Ошибка загрузки статей")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // Handle form input change
  function handleInputChange(field: keyof BlogPost, value: unknown) {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Open create dialog
  function openCreateDialog() {
    setEditingPost(null)
    setFormData(initialBlogForm)
    setIsDialogOpen(true)
  }

  // Open edit dialog
  function openEditDialog(post: BlogPost) {
    setEditingPost(post)
    setFormData(post)
    setIsDialogOpen(true)
  }

  // Save post
  async function savePost() {
    try {
      setSaving(true)
      setError(null)
      
      const method = editingPost ? "PUT" : "POST"
      const body = editingPost ? { ...formData, id: editingPost.id } : formData
      
      const response = await fetch("/api/admin/blog", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      
      if (!response.ok) throw new Error("Failed to save post")
      
      setSuccess(editingPost ? "Статья обновлена!" : "Статья создана!")
      setIsDialogOpen(false)
      fetchPosts()
      
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError("Ошибка сохранения статьи")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  // Delete post
  async function deletePost() {
    if (!postToDelete) return
    
    try {
      setSaving(true)
      const response = await fetch(`/api/admin/blog?id=${postToDelete.id}`, {
        method: "DELETE"
      })
      
      if (!response.ok) throw new Error("Failed to delete post")
      
      setSuccess("Статья удалена!")
      setDeleteDialogOpen(false)
      setPostToDelete(null)
      fetchPosts()
      
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError("Ошибка удаления статьи")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "all" || post.status === selectedStatus
    return matchesSearch && matchesStatus
  })

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
          <h1 className="font-serif text-2xl md:text-3xl text-cream">Блог</h1>
          <p className="text-cream/60">Управление статьями блога</p>
        </div>
        <Button onClick={openCreateDialog} className="bg-gold hover:bg-gold/90 text-charcoal">
          <Plus className="mr-2 h-4 w-4" />
          Новая статья
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{posts.length}</p>
              <p className="text-cream/50 text-sm">Всего статей</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Eye className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{posts.filter(p => p.status === "published").length}</p>
              <p className="text-cream/50 text-sm">Опубликовано</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{posts.filter(p => p.status === "draft").length}</p>
              <p className="text-cream/50 text-sm">Черновиков</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{posts.filter(p => p.featured).length}</p>
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
            placeholder="Поиск статей..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-charcoal-light/50 border-white/10 text-cream"
          />
        </div>
        <div className="flex gap-2">
          {(["all", "published", "draft"] as const).map(status => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedStatus === status
                  ? "bg-gold text-charcoal"
                  : "bg-charcoal-light/50 text-cream/60 hover:text-cream border border-white/10"
              }`}
            >
              {status === "all" ? "Все" : status === "published" ? "Опубликовано" : "Черновики"}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card overflow-hidden group"
          >
            {/* Cover Image */}
            <div className="relative h-40 bg-charcoal-light overflow-hidden">
              <img
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-3 left-3">
                <Badge className={`${
                  post.status === "published" 
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                }`}>
                  {post.status === "published" ? "Опубликовано" : "Черновик"}
                </Badge>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="bg-charcoal/80 text-cream/70">
                  {post.category}
                </Badge>
              </div>

              {/* Featured Star */}
              {post.featured && (
                <div className="absolute bottom-3 left-3">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-serif text-lg text-cream mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-cream/50 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              
              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-cream/40 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.publishedAt}
                </span>
                <span>{post.author}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-white/10 text-cream/70 hover:bg-white/5"
                  onClick={() => openEditDialog(post)}
                >
                  <Pencil className="w-4 h-4 mr-1" />
                  Редактировать
                </Button>
                <button className="p-2 text-cream/40 hover:text-cream hover:bg-white/5 rounded-lg">
                  <Eye className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => {
                    setPostToDelete(post)
                    setDeleteDialogOpen(true)
                  }}
                  className="p-2 text-cream/40 hover:text-red-400 hover:bg-red-500/10 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-cream/20 mx-auto mb-3" />
          <p className="text-cream/50">Статьи не найдены</p>
        </div>
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-charcoal border-white/10">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-cream">
              {editingPost ? "Редактирование статьи" : "Новая статья"}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-cream">Заголовок</Label>
                <Input
                  value={formData.title || ""}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="Название статьи"
                  className="bg-charcoal-light/50 border-white/10 text-cream"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-cream">Slug (URL)</Label>
                <Input
                  value={formData.slug || ""}
                  onChange={(e) => handleInputChange("slug", e.target.value)}
                  placeholder="article-name"
                  className="bg-charcoal-light/50 border-white/10 text-cream"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-cream">Краткое описание</Label>
              <Textarea
                value={formData.excerpt || ""}
                onChange={(e) => handleInputChange("excerpt", e.target.value)}
                placeholder="Краткое описание для карточки статьи"
                className="bg-charcoal-light/50 border-white/10 text-cream min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-cream">Содержание статьи</Label>
              <Textarea
                value={formData.content || ""}
                onChange={(e) => handleInputChange("content", e.target.value)}
                placeholder="Полный текст статьи..."
                className="bg-charcoal-light/50 border-white/10 text-cream min-h-[200px]"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label className="text-cream">Категория</Label>
                <Select 
                  value={formData.category || "Основы"}
                  onValueChange={(value) => handleInputChange("category", value)}
                >
                  <SelectTrigger className="bg-charcoal-light/50 border-white/10 text-cream">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-cream">Автор</Label>
                <Input
                  value={formData.author || ""}
                  onChange={(e) => handleInputChange("author", e.target.value)}
                  placeholder="Имя автора"
                  className="bg-charcoal-light/50 border-white/10 text-cream"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-cream">Статус</Label>
                <Select 
                  value={formData.status || "draft"}
                  onValueChange={(value) => handleInputChange("status", value)}
                >
                  <SelectTrigger className="bg-charcoal-light/50 border-white/10 text-cream">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Черновик</SelectItem>
                    <SelectItem value="published">Опубликовано</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-cream">URL обложки</Label>
                <Input
                  value={formData.coverImage || ""}
                  onChange={(e) => handleInputChange("coverImage", e.target.value)}
                  placeholder="/images/blog/..."
                  className="bg-charcoal-light/50 border-white/10 text-cream"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-cream">Дата публикации</Label>
                <Input
                  type="date"
                  value={formData.publishedAt || ""}
                  onChange={(e) => handleInputChange("publishedAt", e.target.value)}
                  className="bg-charcoal-light/50 border-white/10 text-cream"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-charcoal-light/30 border border-white/5">
              <div>
                <p className="text-cream font-medium">Рекомендуемая статья</p>
                <p className="text-cream/50 text-sm">Показывать на главной странице</p>
              </div>
              <Switch 
                checked={formData.featured || false} 
                onCheckedChange={(checked) => handleInputChange("featured", checked)}
              />
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
              onClick={savePost}
              disabled={saving}
              className="bg-gold text-charcoal hover:bg-gold-light"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              {editingPost ? "Сохранить" : "Создать"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-charcoal border-white/10">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-cream">Удалить статью?</AlertDialogTitle>
            <AlertDialogDescription className="text-cream/60">
              Вы уверены, что хотите удалить статью &quot;{postToDelete?.title}&quot;? 
              Это действие нельзя отменить.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-white/10 text-cream/70">Отмена</AlertDialogCancel>
            <AlertDialogAction
              onClick={deletePost}
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
