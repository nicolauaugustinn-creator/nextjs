"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2, Eye, Search, Calendar, MoreVertical, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const blogPosts = [
  {
    id: 1,
    title: "Cum sa-ti calculezi numarul destinului",
    excerpt: "Afla cum sa descoperi numarul destinului tau si ce inseamna el pentru viata ta...",
    category: "Numerologie",
    status: "published",
    date: "15 Mar 2024",
    views: 1245,
    image: "/professional-woman-headshot.png"
  },
  {
    id: 2,
    title: "Cele 9 cifruri si semnificatia lor",
    excerpt: "Fiecare cifra de la 1 la 9 poarta o energie unica. Descopera ce inseamna fiecare...",
    category: "Numerologie",
    status: "published",
    date: "12 Mar 2024",
    views: 892,
    image: "/professional-man-headshot.png"
  },
  {
    id: 3,
    title: "Meditatia pentru incepatori",
    excerpt: "Ghid complet pentru cei care vor sa inceapa practica meditatiei zilnice...",
    category: "Meditatie",
    status: "draft",
    date: "10 Mar 2024",
    views: 0,
    image: "/professional-latina-woman-headshot.png"
  },
]

export default function AdminBlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Blog</h1>
          <p className="text-muted-foreground">Scrie si gestioneaza articolele de pe blog</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gold hover:bg-gold/90 text-background">
              <Plus className="mr-2 h-4 w-4" />
              Articol Nou
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl bg-card border-border">
            <DialogHeader>
              <DialogTitle className="font-serif text-foreground">Articol Nou</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Titlu</Label>
                <Input id="title" placeholder="Titlul articolului" className="bg-background border-border" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="excerpt">Rezumat</Label>
                <Textarea id="excerpt" placeholder="Scurt rezumat al articolului..." className="bg-background border-border" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content">Continut</Label>
                <Textarea id="content" placeholder="Scrie articolul aici..." className="min-h-[200px] bg-background border-border" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Categorie</Label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Selecteaza" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="numerologie">Numerologie</SelectItem>
                      <SelectItem value="meditatie">Meditatie</SelectItem>
                      <SelectItem value="dezvoltare">Dezvoltare Personala</SelectItem>
                      <SelectItem value="spiritualitate">Spiritualitate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Status</Label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Selecteaza" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Publicat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Imagine Cover</Label>
                <Input id="image" type="file" accept="image/*" className="bg-background border-border" />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Anuleaza</Button>
              <Button variant="outline">Salveaza ca Draft</Button>
              <Button className="bg-gold hover:bg-gold/90 text-background">Publica</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Cauta articole..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-card border-border"
        />
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-gold/30 sm:flex-row"
          >
            <div className="aspect-video w-full overflow-hidden rounded-lg sm:aspect-square sm:w-32">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="font-medium text-foreground">{post.title}</h3>
                  <Badge
                    variant="outline"
                    className={post.status === "published" ? "border-emerald-500/50 text-emerald-400" : "border-amber-500/50 text-amber-400"}
                  >
                    {post.status === "published" ? "Publicat" : "Draft"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {post.views} vizualizari
                  </span>
                  <Badge variant="outline">{post.category}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Pencil className="mr-1 h-4 w-4" />
                    Editeaza
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        Previzualizare
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Sterge
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
