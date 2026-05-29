"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Upload, 
  Grid, 
  List, 
  Search, 
  Filter,
  MoreVertical,
  Trash2,
  Download,
  Copy,
  Image,
  Video,
  FileText,
  File
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const mediaItems = [
  { id: "1", name: "hero-image.jpg", type: "image", size: "2.4 MB", date: "15 апреля 2024", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5391083623739495321-KGl47fLM4bM3P1E6FkJFtLB7HR9VBV.jpg" },
  { id: "2", name: "meditation-bg.jpg", type: "image", size: "1.8 MB", date: "14 апреля 2024", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032199-sbZIsnBv7mcOYB11Z7nBG74tGJrbdW.jpg" },
  { id: "3", name: "course-preview.mp4", type: "video", size: "45 MB", date: "13 апреля 2024", url: "" },
  { id: "4", name: "guide.pdf", type: "document", size: "3.2 MB", date: "12 апреля 2024", url: "" },
  { id: "5", name: "retreat-photo.jpg", type: "image", size: "2.1 MB", date: "11 апреля 2024", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5429424431718667000-J2NBj5HK3zRK63nMiAe6ZkYCbU0JnB.jpg" },
  { id: "6", name: "about-photo.jpg", type: "image", size: "1.9 MB", date: "10 апреля 2024", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032188-LP5BsztskUQgp6KkclUghUGWWuUx1H.jpg" },
]

function getFileIcon(type: string) {
  switch (type) {
    case "image": return Image
    case "video": return Video
    case "document": return FileText
    default: return File
  }
}

export default function AdminMediaPage() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [search, setSearch] = useState("")
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const filteredItems = mediaItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  const toggleSelect = (id: string) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl text-cream">Медиа</h1>
          <p className="text-cream/60">Управление изображениями и файлами</p>
        </div>
        <Button className="bg-gold text-charcoal hover:bg-gold-light">
          <Upload className="w-4 h-4 mr-2" />
          Загрузить файлы
        </Button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <Input
              type="text"
              placeholder="Поиск файлов..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-charcoal-light/50 border-white/10 text-cream"
            />
          </div>
          <Button variant="outline" size="icon" className="border-white/10 text-cream/70">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          {selectedItems.length > 0 && (
            <Button variant="outline" size="sm" className="border-red-500/30 text-red-400">
              <Trash2 className="w-4 h-4 mr-2" />
              Удалить ({selectedItems.length})
            </Button>
          )}
          <div className="flex border border-white/10 rounded-lg overflow-hidden">
            <button
              onClick={() => setView("grid")}
              className={`p-2 ${view === "grid" ? "bg-white/10 text-cream" : "text-cream/40"}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 ${view === "list" ? "bg-white/10 text-cream" : "text-cream/40"}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {view === "grid" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredItems.map((item) => {
            const Icon = getFileIcon(item.type)
            const isSelected = selectedItems.includes(item.id)
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`glass-card overflow-hidden group cursor-pointer ${
                  isSelected ? "ring-2 ring-gold" : ""
                }`}
                onClick={() => toggleSelect(item.id)}
              >
                <div className="aspect-square relative bg-charcoal-light">
                  {item.type === "image" && item.url ? (
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon className="w-12 h-12 text-cream/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20">
                      <Download className="w-4 h-4 text-cream" />
                    </button>
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20">
                      <Copy className="w-4 h-4 text-cream" />
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-cream text-sm truncate">{item.name}</p>
                  <p className="text-cream/40 text-xs">{item.size}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      ) : (
        <div className="glass-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-cream/50 text-sm font-medium">Файл</th>
                <th className="text-left p-4 text-cream/50 text-sm font-medium">Тип</th>
                <th className="text-left p-4 text-cream/50 text-sm font-medium">Размер</th>
                <th className="text-left p-4 text-cream/50 text-sm font-medium">Дата</th>
                <th className="text-right p-4 text-cream/50 text-sm font-medium">Действия</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => {
                const Icon = getFileIcon(item.type)
                return (
                  <tr key={item.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-charcoal-light flex items-center justify-center overflow-hidden">
                          {item.type === "image" && item.url ? (
                            <img src={item.url} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <Icon className="w-5 h-5 text-cream/40" />
                          )}
                        </div>
                        <span className="text-cream text-sm">{item.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-cream/60 text-sm capitalize">{item.type}</td>
                    <td className="p-4 text-cream/60 text-sm">{item.size}</td>
                    <td className="p-4 text-cream/60 text-sm">{item.date}</td>
                    <td className="p-4 text-right">
                      <button className="p-2 text-cream/40 hover:text-cream">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
