"use client"

import { motion } from "framer-motion"
import { ChevronDown, Play } from "lucide-react"
import { useState } from "react"

interface Lesson {
  id: string
  title: string
  duration: string
  videoPlaceholder?: string
  youtubeLink?: string
}

interface Module {
  id: string
  title: string
  lessons: Lesson[]
}

interface CourseModulesClientProps {
  modules: Module[]
}

export default function CourseModulesClient({ modules }: CourseModulesClientProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(0)

  return (
    <section className="py-12 md:py-20 bg-charcoal-light/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
            Программа курса
          </h2>
          <p className="text-cream/60">
            {modules?.length || 0} модулей
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {modules?.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-medium">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-cream">{module.title}</h3>
                    <p className="text-cream/50 text-sm">{module.lessons?.length || 0} уроков</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gold transition-transform ${
                    expandedModule === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedModule === index && module.lessons && (
                <div className="px-6 pb-6">
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex items-center justify-between py-2"
                      >
                        <div className="flex items-center gap-3">
                          <Play className="w-4 h-4 text-gold" />
                          <span className="text-cream">
                            {lesson.title}
                          </span>
                        </div>
                        <span className="text-cream/40 text-sm">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
