"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Search, 
  Filter,
  MoreVertical,
  Mail,
  Ban,
  UserCheck,
  Download
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const users = [
  { id: "1", name: "Анна Иванова", email: "anna@email.com", courses: 3, spent: 45000, status: "active", joined: "15 марта 2024" },
  { id: "2", name: "Михаил Петров", email: "mikhail@email.com", courses: 2, spent: 30000, status: "active", joined: "10 марта 2024" },
  { id: "3", name: "Елена Сидорова", email: "elena@email.com", courses: 1, spent: 15000, status: "active", joined: "5 марта 2024" },
  { id: "4", name: "Дмитрий Козлов", email: "dmitry@email.com", courses: 5, spent: 150000, status: "vip", joined: "1 февраля 2024" },
  { id: "5", name: "Ольга Морозова", email: "olga@email.com", courses: 0, spent: 0, status: "inactive", joined: "20 января 2024" },
  { id: "6", name: "Сергей Новиков", email: "sergey@email.com", courses: 2, spent: 27000, status: "active", joined: "15 января 2024" },
]

export default function AdminUsersPage() {
  const [search, setSearch] = useState("")

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl text-cream">Пользователи</h1>
          <p className="text-cream/60">Управление пользователями платформы</p>
        </div>
        <Button variant="outline" className="border-white/10 text-cream/70">
          <Download className="w-4 h-4 mr-2" />
          Экспорт
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
          <Input
            type="text"
            placeholder="Поиск пользователей..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-charcoal-light/50 border-white/10 text-cream"
          />
        </div>
        <Button variant="outline" className="border-white/10 text-cream/70">
          <Filter className="w-4 h-4 mr-2" />
          Фильтры
        </Button>
      </div>

      {/* Users Table */}
      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 text-cream/50 text-sm font-medium">Пользователь</th>
              <th className="text-left p-4 text-cream/50 text-sm font-medium hidden md:table-cell">Курсов</th>
              <th className="text-left p-4 text-cream/50 text-sm font-medium hidden lg:table-cell">Потрачено</th>
              <th className="text-left p-4 text-cream/50 text-sm font-medium">Статус</th>
              <th className="text-left p-4 text-cream/50 text-sm font-medium hidden md:table-cell">Регистрация</th>
              <th className="text-right p-4 text-cream/50 text-sm font-medium">Действия</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-white/5 hover:bg-white/5"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold text-sm font-medium">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-cream text-sm font-medium truncate">{user.name}</p>
                      <p className="text-cream/40 text-xs truncate">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-cream/60 text-sm hidden md:table-cell">{user.courses}</td>
                <td className="p-4 text-gold text-sm hidden lg:table-cell">
                  ₽{user.spent.toLocaleString()}
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.status === "vip"
                      ? "bg-gold/20 text-gold"
                      : user.status === "active"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-cream/10 text-cream/40"
                  }`}>
                    {user.status === "vip" ? "VIP" : user.status === "active" ? "Активен" : "Неактивен"}
                  </span>
                </td>
                <td className="p-4 text-cream/50 text-sm hidden md:table-cell">{user.joined}</td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-cream/40 hover:text-cream hover:bg-white/5 rounded-lg">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-cream/40 hover:text-cream hover:bg-white/5 rounded-lg">
                      <UserCheck className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-cream/40 hover:text-red-400 hover:bg-red-500/10 rounded-lg">
                      <Ban className="w-4 h-4" />
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
