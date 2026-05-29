"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2, Play, Pause, Music, Clock, Search, Filter, MoreVertical } from "lucide-react"
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
import { meditations } from "@/data/meditations"

export default function AdminMeditationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const categories = ["all", "relaxare", "abundenta", "vindecare", "manifestare", "somn"]

  const filteredMeditations = meditations.filter(m => {
    const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || m.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Meditatii</h1>
          <p className="text-muted-foreground">Gestioneaza biblioteca de meditatii audio</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gold hover:bg-gold/90 text-background">
              <Plus className="mr-2 h-4 w-4" />
              Adauga Meditatie
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-card border-border">
            <DialogHeader>
              <DialogTitle className="font-serif text-foreground">Adauga Meditatie Noua</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Titlu</Label>
                <Input id="title" placeholder="Numele meditatiei" className="bg-background border-border" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descriere</Label>
                <Textarea id="description" placeholder="Descrierea meditatiei..." className="bg-background border-border" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Categorie</Label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Selecteaza" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relaxare">Relaxare</SelectItem>
                      <SelectItem value="abundenta">Abundenta</SelectItem>
                      <SelectItem value="vindecare">Vindecare</SelectItem>
                      <SelectItem value="manifestare">Manifestare</SelectItem>
                      <SelectItem value="somn">Somn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration">Durata (minute)</Label>
                  <Input id="duration" type="number" placeholder="15" className="bg-background border-border" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="audio">Fisier Audio</Label>
                <Input id="audio" type="file" accept="audio/*" className="bg-background border-border" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Imagine Cover</Label>
                <Input id="image" type="file" accept="image/*" className="bg-background border-border" />
              </div>
              <div className="grid gap-2">
                <Label>Acces</Label>
                <Select>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Selecteaza tipul de acces" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Gratuit</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="vip">VIP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Anuleaza</Button>
              <Button className="bg-gold hover:bg-gold/90 text-background">Salveaza</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Cauta meditatii..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-48 bg-card border-border">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toate categoriile</SelectItem>
            <SelectItem value="relaxare">Relaxare</SelectItem>
            <SelectItem value="abundenta">Abundenta</SelectItem>
            <SelectItem value="vindecare">Vindecare</SelectItem>
            <SelectItem value="manifestare">Manifestare</SelectItem>
            <SelectItem value="somn">Somn</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Meditations Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMeditations.map((meditation) => (
          <div
            key={meditation.id}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all hover:border-gold/50"
          >
            <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src={meditation.imageUrl}
                alt={meditation.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="rounded-full bg-gold p-3 text-background">
                  <Play className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-medium text-foreground line-clamp-1">{meditation.title}</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-4 w-4" />
                      Editeaza
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Sterge
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{meditation.description}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {meditation.duration} min
                </span>
                <Badge variant="outline" className="capitalize">
                  {meditation.category}
                </Badge>
                {meditation.isPremium && (
                  <Badge className="bg-gold/20 text-gold border-gold/30">Premium</Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
