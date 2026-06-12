import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LangProvider } from "@/lib/lang-context"
import { FallingLeavesOverlay } from "@/components/karma/falling-leaves-overlay"
import "./globals.css"

const playfair = Playfair_Display({ 
  subsets: ["latin", "cyrillic"], 
  variable: "--font-playfair",
  display: "swap"
})

const inter = Inter({ 
  subsets: ["latin", "cyrillic"], 
  variable: "--font-inter",
  display: "swap"
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin", "cyrillic"], 
  variable: "--font-jetbrains-mono",
  display: "swap"
})

export const metadata: Metadata = {
  title: "KARMANUMBERS - Код Судьбы и Предназначения",
  description: "Курсы, медитации и консультации по нумерологии, кармической матрице, отношениям, энергии и личной трансформации. Узнай свой код судьбы.",
  keywords: ["нумерология", "кармическая звезда", "матрица судьбы", "предназначение", "медитации", "консультации", "энергия", "отношения"],
  authors: [{ name: "Валентина Черняк" }],
  creator: "KARMANUMBERS",
  publisher: "KARMANUMBERS",
  generator: "Next.js",
  applicationName: "KARMANUMBERS",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://karmanumbers.com",
    siteName: "KARMANUMBERS",
    title: "KARMANUMBERS - Код Судьбы и Предназначения",
    description: "Курсы, медитации и консультации по нумерологии, кармической матрице и личной трансформации",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KARMANUMBERS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KARMANUMBERS - Код Судьбы и Предназначения",
    description: "Курсы, медитации и консультации по нумерологии",
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.png"
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className="bg-background">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="KARMANUMBERS" />
        <meta name="theme-color" content="#0a0a0f" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f8f7f4" media="(prefers-color-scheme: light)" />
      </head>
      <body className={`antialiased ${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none"
        >
          Перейти к содержимому
        </a>
        <FallingLeavesOverlay />
        <LangProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  )
}
