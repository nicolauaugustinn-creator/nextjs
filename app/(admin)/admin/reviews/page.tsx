"use client"

import { useState } from "react"
import { Search, Filter, Check, X, Eye, Star, MoreVertical, MessageSquare } from "lucide-react"
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
import { reviews, Review } from "@/data/reviews"

export default function AdminReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)

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
      return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Aprobat</Badge>
    }
    return <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">In asteptare</Badge>
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "course": return "Curs"
      case "consultation": return "Consultatie"
      case "meditation": return "Meditatie"
      case "retreat": return "Retreat"
      default: return category
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-bold text-foreground">Recenzii</h1>
        <p className="text-muted-foreground">Aproba si gestioneaza recenziile clientilor</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-amber-500/20 p-2">
              <MessageSquare className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {reviews.filter(r => !r.approved).length}
              </p>
              <p className="text-sm text-muted-foreground">In asteptare</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-500/20 p-2">
              <Check className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {reviews.filter(r => r.approved).length}
              </p>
              <p className="text-sm text-muted-foreground">Aprobate</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gold/20 p-2">
              <Star className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">4.9</p>
              <p className="text-sm text-muted-foreground">Rating mediu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Cauta recenzii..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48 bg-card border-border">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toate</SelectItem>
            <SelectItem value="pending">In asteptare</SelectItem>
            <SelectItem value="approved">Aprobate</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="rounded-xl border border-border bg-card p-4 transition-all hover:border-gold/30"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                {review.clientAvatar ? (
                  <img
                    src={review.clientAvatar}
                    alt={review.clientName}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-medium">{review.clientName.charAt(0)}</span>
                  </div>
                )}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium text-foreground">{review.clientName}</h3>
                    {getStatusBadge(review.approved)}
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-gold text-gold" : "text-muted-foreground"}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  {review.text && (
                    <p className="text-sm text-muted-foreground line-clamp-2">{review.text}</p>
                  )}
                  {review.screenshotImage && (
                    <p className="text-xs text-gold">Screenshot atasat</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Categorie: <span className="text-gold">{getCategoryLabel(review.category)}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!review.approved && (
                  <>
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Check className="mr-1 h-4 w-4" />
                      Aproba
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                    >
                      <X className="mr-1 h-4 w-4" />
                      Respinge
                    </Button>
                  </>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setSelectedReview(review)}>
                      <Eye className="mr-2 h-4 w-4" />
                      Vizualizeaza
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Detail Dialog */}
      <Dialog open={!!selectedReview} onOpenChange={() => setSelectedReview(null)}>
        <DialogContent className="max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-serif text-foreground">Detalii Recenzie</DialogTitle>
          </DialogHeader>
          {selectedReview && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {selectedReview.clientAvatar ? (
                  <img
                    src={selectedReview.clientAvatar}
                    alt={selectedReview.clientName}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-medium text-xl">{selectedReview.clientName.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <h3 className="font-medium text-foreground">{selectedReview.clientName}</h3>
                  <p className="text-sm text-muted-foreground">{selectedReview.date}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < selectedReview.rating ? "fill-gold text-gold" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Categorie:</p>
                <Badge variant="outline">{getCategoryLabel(selectedReview.category)}</Badge>
              </div>
              {selectedReview.text && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Recenzie:</p>
                  <p className="text-foreground">{selectedReview.text}</p>
                </div>
              )}
              {selectedReview.screenshotImage && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Screenshot:</p>
                  <img src={selectedReview.screenshotImage} alt="Screenshot" className="rounded-lg max-h-64 object-contain" />
                </div>
              )}
              <div className="flex justify-end gap-2 pt-4">
                {!selectedReview.approved && (
                  <>
                    <Button variant="outline" className="border-red-500/50 text-red-400">
                      Respinge
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Aproba
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
