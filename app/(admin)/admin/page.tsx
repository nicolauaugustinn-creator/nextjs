"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Eye,
  ShoppingCart,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { 
    label: "Всего пользователей", 
    value: "2,847", 
    change: "+12%",
    trend: "up",
    icon: Users 
  },
  { 
    label: "Активных курсов", 
    value: "8", 
    change: "+2",
    trend: "up",
    icon: BookOpen 
  },
  { 
    label: "Доход за месяц", 
    value: "₽547,000", 
    change: "+23%",
    trend: "up",
    icon: DollarSign 
  },
  { 
    label: "Конверсия", 
    value: "4.2%", 
    change: "-0.3%",
    trend: "down",
    icon: TrendingUp 
  },
]

const recentOrders = [
  { id: "ORD-001", user: "Анна Иванова", product: "Основы нумерологии", amount: 15000, status: "completed" },
  { id: "ORD-002", user: "Михаил Петров", product: "Консультация 90 мин", amount: 15000, status: "completed" },
  { id: "ORD-003", user: "Елена Сидорова", product: "Медитации (подписка)", amount: 2990, status: "pending" },
  { id: "ORD-004", user: "Дмитрий Козлов", product: "VIP-сопровождение", amount: 100000, status: "completed" },
  { id: "ORD-005", user: "Ольга Морозова", product: "Прогноз на год", amount: 12000, status: "processing" },
]

const recentUsers = [
  { name: "Мария Волкова", email: "maria@email.com", date: "2 часа назад" },
  { name: "Алексей Новиков", email: "alexey@email.com", date: "5 часов назад" },
  { name: "Светлана Белова", email: "svetlana@email.com", date: "Вчера" },
]

const upcomingConsultations = [
  { client: "Анна К.", time: "Сегодня, 15:00", type: "Нумерология" },
  { client: "Михаил П.", time: "Сегодня, 18:00", type: "Совместимость" },
  { client: "Елена С.", time: "Завтра, 10:00", type: "Бизнес" },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl text-cream">Dashboard</h1>
          <p className="text-cream/60">Добро пожаловать в панель администратора</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-white/10 text-cream/70">
            Экспорт
          </Button>
          <Button className="bg-gold text-charcoal hover:bg-gold-light">
            Добавить курс
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-gold" />
              </div>
              <span className={`flex items-center text-sm ${
                stat.trend === "up" ? "text-emerald-400" : "text-red-400"
              }`}>
                {stat.trend === "up" ? (
                  <ArrowUp className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDown className="w-4 h-4 mr-1" />
                )}
                {stat.change}
              </span>
            </div>
            <p className="font-serif text-2xl text-cream mb-1">{stat.value}</p>
            <p className="text-cream/50 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <div className="glass-card">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="font-serif text-lg text-cream">Последние заказы</h2>
              <Button variant="ghost" size="sm" className="text-gold">
                Все заказы
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-cream/50 text-sm font-medium">ID</th>
                    <th className="text-left p-4 text-cream/50 text-sm font-medium">Клиент</th>
                    <th className="text-left p-4 text-cream/50 text-sm font-medium">Продукт</th>
                    <th className="text-left p-4 text-cream/50 text-sm font-medium">Сумма</th>
                    <th className="text-left p-4 text-cream/50 text-sm font-medium">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-4 text-cream/70 text-sm">{order.id}</td>
                      <td className="p-4 text-cream text-sm">{order.user}</td>
                      <td className="p-4 text-cream/70 text-sm">{order.product}</td>
                      <td className="p-4 text-gold text-sm">₽{order.amount.toLocaleString()}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === "completed" 
                            ? "bg-emerald-500/20 text-emerald-400"
                            : order.status === "pending"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}>
                          {order.status === "completed" ? "Завершён" : 
                           order.status === "pending" ? "Ожидание" : "В процессе"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Upcoming Consultations */}
          <div className="glass-card p-6">
            <h3 className="font-serif text-lg text-cream mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gold" />
              Консультации
            </h3>
            <div className="space-y-4">
              {upcomingConsultations.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-cream text-sm">{item.client}</p>
                    <p className="text-cream/50 text-xs">{item.type}</p>
                  </div>
                  <span className="text-gold text-sm">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Users */}
          <div className="glass-card p-6">
            <h3 className="font-serif text-lg text-cream mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-gold" />
              Новые пользователи
            </h3>
            <div className="space-y-4">
              {recentUsers.map((user, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold text-sm">{user.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-cream text-sm truncate">{user.name}</p>
                    <p className="text-cream/50 text-xs truncate">{user.email}</p>
                  </div>
                  <span className="text-cream/40 text-xs">{user.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
