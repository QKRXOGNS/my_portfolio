'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import './page.css'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [portfolioNotice, setPortfolioNotice] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className={`hero-content ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="hero-text-content">
            <div className="hero-badge">Game Designer Portfolio</div>
            <h1 className="hero-title">
              <span className="gradient-text">AI와 함께 개발하는</span>
              <br />
              게임 디자이너
            </h1>
            <p className="hero-description">
              4년 동안 여러 프로젝트를 거쳐왔고 개인 프로젝트를 진행하고 있는 개발자입니다.
            </p>
            <div className="hero-buttons">
              <Link href="/about" className="btn btn-primary">
                자세히 보기
              </Link>
              <Link href="/projects/personal" className="btn btn-secondary">
                프로젝트 보기
              </Link>
            </div>
          </div>

          <div className="hero-character">
            <Image 
              src="/Gemini_Generated_Image_abfypaabfypaabfy.png" 
              alt="Game Designer Character" 
              className="character-image"
              width={500}
              height={700}
              priority
            />
          </div>
        </div>

        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>
      </section>

      <section className="section highlights-section">
        <h2 className="section-title">전문 분야</h2>
        <p className="section-subtitle">게임 디자인의 다양한 영역에서 전문성을 발휘합니다</p>
        
        <div className="highlights-grid">
          <div className="card highlight-card">
            <div className="highlight-icon">🎮</div>
            <h3 className="highlight-title">게임 시스템 디자인</h3>
            <p className="highlight-description">
              플레이어 경험을 중심으로 한 게임 메커닉과 시스템 설계
            </p>
          </div>

          <div className="card highlight-card">
            <div className="highlight-icon">📊</div>
            <h3 className="highlight-title">밸런싱 & 경제 시스템</h3>
            <p className="highlight-description">
              데이터 기반의 게임 밸런스 조정 및 경제 시스템 구축
            </p>
          </div>

          <div className="card highlight-card">
            <div className="highlight-icon">✍️</div>
            <h3 className="highlight-title">레벨 & 콘텐츠 디자인</h3>
            <p className="highlight-description">
              몰입감 있는 레벨 구성과 흥미로운 콘텐츠 기획
            </p>
          </div>

          <div className="card highlight-card">
            <div className="highlight-icon">🎯</div>
            <h3 className="highlight-title">UI/UX 디자인</h3>
            <p className="highlight-description">
              직관적이고 사용하기 편한 게임 인터페이스 설계
            </p>
          </div>

          <div className="card highlight-card">
            <div className="highlight-icon">🤖</div>
            <h3 className="highlight-title">AI를 통한 유니티 & 언리얼 개발</h3>
            <p className="highlight-description">
              AI 기술을 활용한 효율적인 게임 개발 및 프로토타이핑
            </p>
          </div>

          <div className="card highlight-card">
            <div className="highlight-icon">🔬</div>
            <h3 className="highlight-title">AI 기반의 시스템 연구</h3>
            <p className="highlight-description">
              최신 AI 기술을 게임 시스템에 접목하는 연구 및 실험
            </p>
          </div>
        </div>
      </section>

      <section className="section portfolio-preview-section">
        <h2 className="section-title">포트폴리오</h2>
        <p className="section-subtitle">
          약 4년간의 여정에서 깨닫고 얻은 지식과 경험을 토대로 제너럴해지는 과정을 걷는 개발자{' '}
          <strong>박태훈</strong>입니다. 발전하는 AI 세상과 함께 성장하고 도메인 지식을 쌓고 있습니다.
        </p>

        <div className="portfolio-preview-card card">
          <div className="portfolio-preview-strip" aria-hidden="true">
            <div className="portfolio-preview-strip-inner">
              <img src={encodeURI('/2026-03-04 14;40;04.JPEG')} alt="" />
              <img src={encodeURI('/2026-03-04 14;40;26.JPEG')} alt="" />
              <img src={encodeURI('/2026-03-04 14;41;26.JPEG')} alt="" />
              <img src={encodeURI('/2026-03-04 14;41;56.JPEG')} alt="" />
              <img src={encodeURI('/2026-03-04 14;46;39.JPEG')} alt="" />
            </div>
          </div>

          <div className="portfolio-preview-actions">
            <Link href="/portfolio" className="portfolio-preview-link">
              포트폴리오 페이지로 이동 →
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-content">
          <h2 className="cta-title">함께 멋진 게임을 만들어보세요</h2>
          <p className="cta-description">
            새로운 프로젝트나 협업 기회에 대해 언제든 이야기 나누고 싶습니다.
          </p>
          <Link href="/about" className="btn btn-primary">
            연락하기
          </Link>
        </div>
      </section>
    </div>
  )
}

