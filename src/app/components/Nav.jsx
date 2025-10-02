'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex justify-center items-center py-4">
        {/* Centered Logo */}
        <Link href="/">
          <Image
            src="/LRMobileNotaryLogo.png"
            alt="LR Mobile Notary Logo"
            width={140}
            height={40}
            priority
          />
        </Link>
      </div>
    </nav>
  )
}