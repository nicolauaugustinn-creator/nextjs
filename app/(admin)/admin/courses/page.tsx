"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Plus, 
  Search, 
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Users,
  DollarSign,
  BookOpen
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { courses } from "@/data/courses"

export default function AdminCoursesPage() {
  const [search, setSearch] = useState("")

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl text-cream">Cursuri</h1>
          <p className="text-cream/60">Gestionare cursuri si programe</p>
        </div>
        <Button className="bg-gold text-charcoal hover:bg-gold-light">
          <Plus className="w-4 h-4 mr-2" />
          Creeaza curs
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{courses.length}</p>
              <p className="text-cream/50 text-sm">Total cursuri</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">1,234</p>
              <p className="text-cream/50 text-sm">Studenti</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Eye className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">8,567</p>
              <p className="text-cream/50 text-sm">Vizualizari</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">$24K</p>
              <p className="text-cream/50 text-sm">Venit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
          <Input
            type="text"
            placeholder="Cauta cursuri..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-charcoal-light/50 border-white/10 text-cream"
          />
        </div>
      </div>

      {/* Courses List */}
      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 text-cream/50 text-sm font-medium">Curs</th>
              <th className="text-left p-4 text-cream/50 text-sm font-medium hidden md:table-cell">Categorie</th>
              <th className="text-left p-4 text-cream/50 text-sm font-medium hidden lg:table-cell">Lectii</th>
              <th className="text-left p-4 text-cream/50 text-sm font-medium">Durata</th>
              <th className="text-left p-4 text-cream/50 text-sm font-medium hidden md:table-cell">Status</th>
              <th className="text-right p-4 text-cream/50 text-sm font-medium">Actiuni</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <motion.tr
                key={course.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-white/5 hover:bg-white/5"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={course.coverImage}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-cream text-sm font-medium truncate">{course.title}</p>
                      <p className="text-cream/40 text-xs truncate hidden sm:block">{course.duration}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-cream/60 text-sm hidden md:table-cell">{course.category === "main" ? "Principal" : "Mini"}</td>
                <td className="p-4 text-cream/60 text-sm hidden lg:table-cell">{course.modules.reduce((acc, m) => acc + m.lessons.length, 0)}</td>
                <td className="p-4 text-gold text-sm">{course.duration}</td>
                <td className="p-4 hidden md:table-cell">
                  <span className="px-2 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-400">
                    {course.status === "available" ? "Publicat" : course.status === "coming_soon" ? "In curand" : "Arhivat"}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-cream/40 hover:text-cream hover:bg-white/5 rounded-lg">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-cream/40 hover:text-cream hover:bg-white/5 rounded-lg">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-cream/40 hover:text-red-400 hover:bg-red-500/10 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
