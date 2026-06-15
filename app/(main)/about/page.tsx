import { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export const metadata: Metadata = {
  title: "О Валентине | KarmaNumbers",
  description: "Узнайте больше о Валентине Черняк, психологе по дате рождения и эксперте нумерологии",
}

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Валентина Черняк
            </h1>
            <p className="text-xl text-gold mb-6 font-semibold">
              Цифровой психолог, коуч и наставник по дате рождения
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Я помогаю людям раскрыть свой код судьбы, энергии и предназначения через нумерологию. Мой путь в эту сферу начался не из интереса, а из боли. В 2021 году я прожила сильнейший кризис, который буквально разрушил мою прежнюю реальность.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Благодаря полной отдаче, практике и глубокой внутренней работе я вошла в ТОП-10 учеников из 7000 в своём потоке. Сегодня в моём опыте уже более 749 разобранных матриц.
            </p>
            <Button className="bg-gold hover:bg-gold/90 text-black font-semibold px-8">
              Записаться на консультацию
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative h-96 md:h-full overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-16_02-04-39-VQu0ZpYHgBcyBA8ZyepsB6Nzbre4zh.jpg"
                alt="Валентина Черняк"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 md:h-full overflow-hidden rounded-2xl order-2 md:order-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-16_02-04-41-Jvw0zgGHBmP7mmDsNLnNI7GRi6SfkU.jpg"
              alt="Валентина на мероприятии KOD"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Мой путь к трансформации
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Кризис 2021 года задал мне главный вопрос: кто я и зачем это со мной произошло? Цифры стали тем языком, который дал мне ответы. Я пришла на обучение к Кристине Егизаровой и влюбилась в метод всей душой.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Благодаря исследованиям, практике и погружению в методологию, я объединила нумерологию, ведические знания и метод «Кармическая звезда». Это позволило мне глубже видеть, чувствовать и помогать людям находить ответы на их самые важные вопросы.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Мой опыт и достижения
            </h2>
            
            <div className="space-y-8">
              <div>
                <div className="text-4xl font-bold text-gold mb-2">749+</div>
                <p className="text-muted-foreground">разобранных матриц с реальными историями трансформации</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-gold mb-2">ТОП-10</div>
                <p className="text-muted-foreground">из 7000 учеников в своём потоке обучения</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-gold mb-2">3 метода</div>
                <p className="text-muted-foreground">интегрирую Кармическую звезду, Пифагорову нумерологию и ведические знания</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-gold mb-2">100%</div>
                <p className="text-muted-foreground">посвящение трансформации каждого ученика</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 md:h-full overflow-hidden rounded-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-16_02-04-43-h9aPksXgSl2tr0GzwAtcGupV7SgYaL.jpg"
              alt="Валентина в выпускном платье"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
            Моменты жизни и работы
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 overflow-hidden rounded-2xl group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-16_02-04-44-LRKwFGxAsd83VWldA1pGtXyi37DG0K.jpg"
                alt="Выпуск KOD - Валентина с однокурсниками"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="relative h-80 overflow-hidden rounded-2xl group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-16_02-04-45-0NsVFH213ZrrjGPMrqZpUD9c8LRPFx.jpg"
                alt="Валентина на сцене KOD"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="relative h-80 overflow-hidden rounded-2xl group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-16_02-04-46-XIhFLNDSOWAGbytdcrrRXScMWtqVV.jpg"
                alt="Валентина на мероприятии"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="relative h-80 overflow-hidden rounded-2xl group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-16_02-04-41-Jvw0zgGHBmP7mmDsNLnNI7GRi6SfkU.jpg"
                alt="Валентина у баннера KOD"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-gold/10 to-violet/10 rounded-3xl p-12 md:p-16 text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Моё предназначение
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Быть примером и проводником. Помогать другим пройти свой путь осознанно, выйти из кризисов и увидеть смысл в происходящем. Цифры действительно отвечают на всё. И сегодня я помогаю услышать эти ответы каждому, кто готов к изменениям.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Готовы трансформировать свою жизнь?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Начните с персональной консультации, где я расскажу вам о вашей нумерологической карте и поможу увидеть вашу истинную путь.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 text-lg">
              Записаться на консультацию
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 font-semibold px-8 text-lg">
              Узнать больше о курсах
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
