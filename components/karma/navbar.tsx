"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, User, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navigation = [
  { label: "Acasa", href: "/" },
  { label: "Povestea mea", href: "/my-path" },
  {
    label: "Invatare",
    href: "/courses",
    children: [
      { label: "Cursuri", href: "/courses" },
      { label: "Mini-cursuri", href: "/courses?category=mini" },
      { label: "Practici", href: "/practices" },
      { label: "Programe avansate", href: "/courses?category=advanced" }
    ]
  },
  { label: "Meditatii", href: "/meditations" },
  { label: "Retreat", href: "/retreat" },
  { label: "Consultatii", href: "/consultations" },
  { label: "Recenzii", href: "/reviews" },
  { label: "Blog", href: "/blog" }
]

const languages = [
  { code: "ru", label: "RU" },
  { code: "ro", label: "RO" },
  { code: "en", label: "EN" },
  { code: "ua", label: "UA" }
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentLang, setCurrentLang] = useState("ru")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-dark rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                <span className="text-gold font-serif text-xl font-bold">KN</span>
              </div>
              <span className="hidden sm:block text-gold font-serif text-lg font-semibold tracking-wide">
                KARMANUMBERS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                item.children ? (
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger asChild>
                      <button className={cn(
                        "px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 hover-underline",
                        pathname.startsWith(item.href)
                          ? "text-gold"
                          : "text-foreground/80 hover:text-gold"
                      )}>
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="glass-card border-gold/20">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.href} asChild>
                          <Link
                            href={child.href}
                            className={cn(
                              "w-full cursor-pointer",
                              pathname === child.href && "text-gold"
                            )}
                          >
                            {child.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-lg transition-colors hover-underline",
                      pathname === item.href
                        ? "text-gold"
                        : "text-foreground/80 hover:text-gold"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-1 text-foreground/70 hover:text-gold">
                    <Globe className="w-4 h-4" />
                    <span className="text-xs font-medium">{currentLang.toUpperCase()}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-card border-gold/20">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className={cn(
                        "cursor-pointer",
                        currentLang === lang.code && "text-gold"
                      )}
                    >
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Login Button */}
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden sm:flex items-center gap-2 text-foreground/70 hover:text-gold"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm">Autentificare</span>
                </Button>
              </Link>

              {/* CTA Button */}
              <Link href="/consultations" className="hidden md:block">
                <Button
                  size="sm"
                  className="bg-gold hover:bg-gold-light text-background font-medium"
                >
                  Consultatie
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Inchide meniu" : "Deschide meniu"}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <div className="relative h-full pt-20 pb-6 px-4 overflow-y-auto">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.href}>
                    {item.children ? (
                      <div className="space-y-1">
                        <span className="block px-4 py-2 text-sm font-semibold text-gold">
                          {item.label}
                        </span>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block px-6 py-2 text-sm rounded-lg transition-colors",
                              pathname === child.href
                                ? "text-gold bg-gold/10"
                                : "text-foreground/70 hover:text-gold hover:bg-gold/5"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                          pathname === item.href
                            ? "text-gold bg-gold/10"
                            : "text-foreground/80 hover:text-gold hover:bg-gold/5"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="mt-6 pt-6 border-t border-border/50 space-y-3">
                  {/* Mobile Language Selector */}
                  <div className="flex items-center gap-2 px-4">
                    <Globe className="w-4 h-4 text-foreground/50" />
                    <div className="flex gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setCurrentLang(lang.code)}
                          className={cn(
                            "px-2 py-1 text-xs rounded transition-colors",
                            currentLang === lang.code
                              ? "bg-gold text-background"
                              : "text-foreground/50 hover:text-gold"
                          )}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Link href="/login" className="block px-4">
                    <Button variant="outline" className="w-full border-gold/30 text-gold hover:bg-gold/10">
                      <User className="w-4 h-4 mr-2" />
                      Autentificare
                    </Button>
                  </Link>

                  <Link href="/consultations" className="block px-4">
                    <Button className="w-full bg-gold hover:bg-gold-light text-background">
                      Solicita consultatie
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
