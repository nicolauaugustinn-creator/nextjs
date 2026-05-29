import { Navbar } from "@/components/karma/navbar"
import { Footer } from "@/components/karma/footer"
import { MobileBottomNav } from "@/components/karma/mobile-bottom-nav"
import { StickyTelegramButton } from "@/components/karma/sticky-telegram-button"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <MobileBottomNav />
      <StickyTelegramButton />
    </>
  )
}
