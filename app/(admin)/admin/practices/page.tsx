"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2, Search, Filter, MoreVertical, FileText, Star } from "lucide-react"
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
import { practices } from "@/data/practices"

export default function AdminPracticesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredPractices = practices.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Practici</h1>
          <p className="text-muted-foreground">Gestioneaza biblioteca de practici spirituale</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gold hover:bg-gold/90 text-background">
              <Plus className="mr-2 h-4 w-4" />
              Adauga Practica
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-card border-border">
            <DialogHeader>
              <DialogTitle className="font-serif text-foreground">Adauga Practica Noua</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Titlu</Label>
                <Input id="title" placeholder="Numele practicii" className="bg-background border-border" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descriere</Label>
                <Textarea id="description" placeholder="Descrierea practicii..." className="bg-background border-border" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="instructions">Instructiuni</Label>
                <Textarea id="instructions" placeholder="Pasii de urmat..." className="min-h-[150px] bg-background border-border" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Categorie</Label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Selecteaza" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ritualuri">Ritualuri</SelectItem>
                      <SelectItem value="afirmatii">Afirmatii</SelectItem>
                      <SelectItem value="vizualizari">Vizualizari</SelectItem>
                      <SelectItem value="respiratie">Respiratie</SelectItem>
                      <SelectItem value="jurnal">Jurnal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration">Durata (minute)</Label>
                  <Input id="duration" type="number" placeholder="10" className="bg-background border-border" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Nivel</Label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Selecteaza" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="incepator">Incepator</SelectItem>
                      <SelectItem value="intermediar">Intermediar</SelectItem>
                      <SelectItem value="avansat">Avansat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Acces</Label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Selecteaza" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Gratuit</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Imagine</Label>
                <Input id="image" type="file" accept="image/*" className="bg-background border-border" />
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
            placeholder="Cauta practici..."
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
            <SelectItem value="ritualuri">Ritualuri</SelectItem>
            <SelectItem value="afirmatii">Afirmatii</SelectItem>
            <SelectItem value="vizualizari">Vizualizari</SelectItem>
            <SelectItem value="respiratie">Respiratie</SelectItem>
            <SelectItem value="jurnal">Jurnal</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Practices Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPractices.map((practice) => (
          <div
            key={practice.id}
            className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-gold/50"
          >
            <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src={practice.coverImage}
                alt={practice.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-medium text-foreground line-clamp-1">{practice.title}</h3>
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
              <p className="text-sm text-muted-foreground line-clamp-2">{practice.description}</p>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="outline" className="capitalize">
                  {practice.category}
                </Badge>
                <Badge variant="outline" className="capitalize">
                  {practice.status}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
