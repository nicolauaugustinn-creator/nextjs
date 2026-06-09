"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useT } from "@/lib/lang-context"

export default function RegisterPage() {
  const { t } = useT()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    // Redirect to profile after registration
    router.push("/dashboard/profile")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="font-serif text-3xl text-cream mb-2">
        {t("auth_register_title")}
      </h1>
      <p className="text-cream/60 mb-8">{t("auth_register_subtitle")}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-cream/80 text-sm mb-2 block">{t("auth_name")}</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
            <Input
              type="text"
              placeholder={t("auth_name_ph")}
              required
              className="pl-12 bg-charcoal-light/50 border-white/10 text-cream placeholder:text-cream/40 h-12"
            />
          </div>
        </div>

        <div>
          <label className="text-cream/80 text-sm mb-2 block">{t("auth_email")}</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
            <Input
              type="email"
              placeholder={t("auth_email_ph")}
              required
              className="pl-12 bg-charcoal-light/50 border-white/10 text-cream placeholder:text-cream/40 h-12"
            />
          </div>
        </div>

        <div>
          <label className="text-cream/80 text-sm mb-2 block">{t("auth_password")}</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder={t("auth_password_ph")}
              required
              className="pl-12 pr-12 bg-charcoal-light/50 border-white/10 text-cream placeholder:text-cream/40 h-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream"
              aria-label={showPassword ? t("common_close") : t("common_edit")}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            className="w-4 h-4 mt-1 rounded border-white/20 bg-charcoal-light/50 text-gold focus:ring-gold"
          />
          <span className="text-cream/60 text-sm">
            {t("auth_agree")}{" "}
            <Link href="/terms" className="text-gold hover:underline">
              {t("auth_terms")}
            </Link>{" "}
            {/* and */}{" "}
            <Link href="/privacy" className="text-gold hover:underline">
              {t("auth_privacy_link")}
            </Link>
          </span>
        </label>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gold text-charcoal hover:bg-gold-light h-12"
        >
          {isLoading ? t("common_loading") : t("auth_register_btn")}
        </Button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-charcoal text-cream/40">{t("auth_or")}</span>
        </div>
      </div>

      <Button variant="outline" className="w-full border-white/10 text-cream hover:bg-white/5 h-12">
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        Google
      </Button>

      <p className="text-center text-cream/60 mt-8">
        {t("auth_has_account")}{" "}
        <Link href="/login" className="text-gold hover:underline">
          {t("auth_login_link")}
        </Link>
      </p>
    </motion.div>
  )
}
