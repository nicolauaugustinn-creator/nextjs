"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    id: "1",
    title: "Как числа влияют на нашу судьбу",
    excerpt: "Погрузитесь в мир нумерологии и узнайте, как числа вашей даты рождения определяют жизненный путь...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032187-7NAPoNjvAGv9GRBUIrNFmCPOMd45Fk.jpg",
    date: "15 апреля 2024",
    category: "Нумерология",
    slug: "kak-chisla-vliyaut-na-sudbu"
  },
  {
    id: "2",
    title: "Кармические уроки: как их распознать",
    excerpt: "Каждый из нас пришел в этот мир с определенными задачами. Узнайте, как определить свои кармические уроки...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5391083623739495321-KGl47fLM4bM3P1E6FkJFtLB7HR9VBV.jpg",
    date: "10 апреля 2024",
    category: "Карма",
    slug: "karmicheskie-uroki"
  },
  {
    id: "3",
    title: "Медитация для начинающих: первые шаги",
    excerpt: "Простые техники медитации, которые помогут вам обрести внутренний покой и связь с высшим Я...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032199-sbZIsnBv7mcOYB11Z7nBG74tGJrbdW.jpg",
    date: "5 апреля 2024",
    category: "Медитации",
    slug: "meditaciya-dlya-nachinayushchih"
  }
]

export function BlogPreview() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Блог
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-cream">
              Знания и мудрость
            </h2>
          </div>
          <Link href="/blog" className="mt-4 md:mt-0">
            <Button
              variant="ghost"
              className="text-gold hover:text-gold-light group"
            >
              Все статьи
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="glass-card overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-gold text-xs tracking-wider uppercase">
                        {post.category}
                      </span>
                      <span className="flex items-center text-cream/40 text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-cream mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-cream/60 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
