import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogPost, blogPosts } from "@/lib/blog-data"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: "Articol negasit - KARMANUMBERS",
    }
  }

  return {
    title: `${post.title} - KARMANUMBERS`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("ro-RO", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })
  }

  // Get related posts from the same category
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back link */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Inapoi la blog
            </Link>

            {/* Category */}
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-5xl text-cream mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-cream/60 text-sm mb-8">
              <div className="flex items-center gap-3">
                {post.author.avatar && (
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/30">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="text-cream font-medium">{post.author.name}</p>
                  <p className="text-cream/50 text-xs">{post.author.role}</p>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Cover Image */}
            <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-gold/20">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-gold max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Check if it's a heading
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="font-serif text-2xl md:text-3xl text-cream mt-10 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-serif text-xl md:text-2xl text-cream mt-8 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                }
                // Check if it's a list
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(line => line.startsWith('- '))
                  return (
                    <ul key={index} className="text-cream/80 space-y-2 mb-6 ml-4 list-disc">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  )
                }
                // Check if it's a blockquote
                if (paragraph.startsWith('> ')) {
                  return (
                    <blockquote key={index} className="border-l-4 border-gold pl-6 my-6 italic text-cream/70">
                      {paragraph.replace('> ', '')}
                    </blockquote>
                  )
                }
                // Regular paragraph
                return (
                  <p key={index} className="text-cream/80 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                )
              })}
            </article>

            {/* Share */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-gold/20">
              <div className="flex items-center gap-3">
                {post.author.avatar && (
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="text-cream font-medium">{post.author.name}</p>
                  <p className="text-cream/50 text-sm">{post.author.role}</p>
                </div>
              </div>
              <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                <Share2 className="w-4 h-4 mr-2" />
                Distribuie
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 mt-16 border-t border-gold/20">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl text-cream text-center mb-12">
              Articole similare
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="glass-card overflow-hidden h-full">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-gold text-xs tracking-wider uppercase">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-serif text-lg text-cream mt-2 group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto text-center">
            <BookOpen className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
              Vrei sa aprofundezi?
            </h2>
            <p className="text-cream/70 mb-8">
              Exploreaza cursurile noastre pentru o intelegere profunda a numerologiei si a energiilor karmice.
            </p>
            <Link href="/courses">
              <Button className="bg-gold text-charcoal hover:bg-gold-light">
                Vezi cursurile
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
