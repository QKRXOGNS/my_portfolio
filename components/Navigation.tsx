'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <span className="logo-text">Game Designer</span>
        </Link>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            홈
          </Link>
          <Link href="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            소개
          </Link>
          <Link href="/talks" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            발표
          </Link>
          <Link href="/projects/personal" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            개인 프로젝트
          </Link>
          <Link href="/projects/current" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            진행중인 프로젝트
          </Link>
          <Link href="/portfolio" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            포트폴리오
          </Link>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴 토글"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

