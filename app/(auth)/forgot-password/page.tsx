"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-gold" />
        </div>
        <h1 className="font-serif text-3xl text-cream mb-4">
          Письмо отправлено
        </h1>
        <p className="text-cream/60 mb-8">
          Мы отправили инструкции по восстановлению пароля на вашу почту. 
          Проверьте папку &ldquo;Спам&rdquo;, если письмо не пришло.
        </p>
        <Link href="/login">
          <Button className="bg-gold text-charcoal hover:bg-gold-light">
            Вернуться к входу
          </Button>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="/login"
        className="inline-flex items-center text-cream/60 hover:text-cream mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Назад к входу
      </Link>

      <h1 className="font-serif text-3xl text-cream mb-2">
        Восстановление пароля
      </h1>
      <p className="text-cream/60 mb-8">
        Введите email, и мы отправим вам ссылку для сброса пароля
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-cream/80 text-sm mb-2 block">Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
            <Input
              type="email"
              placeholder="your@email.com"
              required
              className="pl-12 bg-charcoal-light/50 border-white/10 text-cream placeholder:text-cream/40 h-12"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gold text-charcoal hover:bg-gold-light h-12"
        >
          {isLoading ? "Отправка..." : "Отправить ссылку"}
        </Button>
      </form>
    </motion.div>
  )
}
