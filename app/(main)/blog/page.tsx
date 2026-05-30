"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Calendar, Clock, BookOpen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { blogPosts, categories } from "@/lib/blog-data"
import { useT } from "@/lib/lang-context"

export default function BlogPage() {
  const { t, lang } = useT()
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Toate")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === "Toate" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const locale = lang === "ru" ? "ru-RU" : lang === "ua" ? "uk-UA" : lang === "ro" ? "ro-RO" : "en-GB"

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })
  }

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              {t("blog_tag")}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream mb-6">
              {t("page_blog_title")}
            </h1>
            <p className="text-cream/70 text-lg">
              {t("page_blog_subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      {featuredPost && selectedCategory === "Toate" && !search && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="glass-card overflow-hidden grid md:grid-cols-2 gap-0 group">
                  <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-gold text-sm tracking-wider uppercase mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4 group-hover:text-gold transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-cream/60 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-cream/50 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-8 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
              <Input
                type="text"
                placeholder={t("page_blog_search")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 bg-charcoal-light/50 border-white/10 text-cream placeholder:text-cream/40"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-gold text-charcoal hover:bg-gold-light"
                      : "border-gold/30 text-gold hover:bg-gold/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="glass-card overflow-hidden h-full">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-gold text-xs tracking-wider uppercase">{post.category}</span>
                        </div>
                        <h3 className="font-serif text-xl text-cream mb-3 group-hover:text-gold transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-cream/60 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-cream/40 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-cream/20 mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-cream mb-2">
                {t("page_courses_empty")}
              </h3>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
