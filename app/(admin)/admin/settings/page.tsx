"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Save,
  Globe,
  Bell,
  Shield,
  Palette,
  Mail,
  CreditCard
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const tabs = [
  { id: "general", label: "Общие", icon: Globe },
  { id: "notifications", label: "Уведомления", icon: Bell },
  { id: "security", label: "Безопасность", icon: Shield },
  { id: "appearance", label: "Внешний вид", icon: Palette },
  { id: "email", label: "Email", icon: Mail },
  { id: "payments", label: "Платежи", icon: CreditCard },
]

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl text-cream">Настройки</h1>
          <p className="text-cream/60">Управление настройками платформы</p>
        </div>
        <Button 
          onClick={handleSave}
          disabled={isSaving}
          className="bg-gold text-charcoal hover:bg-gold-light"
        >
          <Save className="w-4 h-4 mr-2" />
          {isSaving ? "Сохранение..." : "Сохранить"}
        </Button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Tabs */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                  activeTab === tab.id
                    ? "bg-gold/10 text-gold border border-gold/20"
                    : "text-cream/60 hover:bg-white/5 hover:text-cream"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-6"
          >
            {activeTab === "general" && (
              <div className="space-y-6">
                <h2 className="font-serif text-xl text-cream mb-6">Общие настройки</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-cream/80 text-sm mb-2 block">Название сайта</label>
                    <Input
                      defaultValue="KARMANUMBERS"
                      className="bg-charcoal-light/50 border-white/10 text-cream"
                    />
                  </div>
                  <div>
                    <label className="text-cream/80 text-sm mb-2 block">URL сайта</label>
                    <Input
                      defaultValue="https://karmanumbers.ru"
                      className="bg-charcoal-light/50 border-white/10 text-cream"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-cream/80 text-sm mb-2 block">Описание</label>
                  <textarea
                    defaultValue="Платформа для изучения кармической нумерологии и духовного развития"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-charcoal-light/50 border border-white/10 text-cream resize-none focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-cream/80 text-sm mb-2 block">Email для связи</label>
                    <Input
                      defaultValue="hello@karmanumbers.ru"
                      className="bg-charcoal-light/50 border-white/10 text-cream"
                    />
                  </div>
                  <div>
                    <label className="text-cream/80 text-sm mb-2 block">Telegram</label>
                    <Input
                      defaultValue="@karmanumbers"
                      className="bg-charcoal-light/50 border-white/10 text-cream"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h2 className="font-serif text-xl text-cream mb-6">Уведомления</h2>
                
                {[
                  { label: "Новые заказы", description: "Уведомления о новых покупках" },
                  { label: "Новые пользователи", description: "Уведомления о регистрациях" },
                  { label: "Отзывы", description: "Уведомления о новых отзывах" },
                  { label: "Консультации", description: "Напоминания о консультациях" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-4 border-b border-white/10">
                    <div>
                      <p className="text-cream">{item.label}</p>
                      <p className="text-cream/50 text-sm">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:bg-gold peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-cream after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <h2 className="font-serif text-xl text-cream mb-6">Безопасность</h2>
                
                <div>
                  <label className="text-cream/80 text-sm mb-2 block">Текущий пароль</label>
                  <Input
                    type="password"
                    className="bg-charcoal-light/50 border-white/10 text-cream"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-cream/80 text-sm mb-2 block">Новый пароль</label>
                    <Input
                      type="password"
                      className="bg-charcoal-light/50 border-white/10 text-cream"
                    />
                  </div>
                  <div>
                    <label className="text-cream/80 text-sm mb-2 block">Подтверждение</label>
                    <Input
                      type="password"
                      className="bg-charcoal-light/50 border-white/10 text-cream"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-white/10">
                  <div>
                    <p className="text-cream">Двухфакторная аутентификация</p>
                    <p className="text-cream/50 text-sm">Дополнительная защита аккаунта</p>
                  </div>
                  <Button variant="outline" className="border-gold/30 text-gold">
                    Включить
                  </Button>
                </div>
              </div>
            )}

            {(activeTab === "appearance" || activeTab === "email" || activeTab === "payments") && (
              <div className="text-center py-12">
                <p className="text-cream/60">Раздел в разработке</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
