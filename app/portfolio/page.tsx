'use client'

import { useMemo, useState } from 'react'
import './portfolio.css'

const previewImages = [
  '/2026-03-04 14;40;04.JPEG',
  '/2026-03-04 14;40;26.JPEG',
  '/2026-03-04 14;41;26.JPEG',
  '/2026-03-04 14;41;56.JPEG',
  '/2026-03-04 14;46;39.JPEG',
]

export default function PortfolioPage() {
  const [notice, setNotice] = useState<string | null>(null)

  const bgStyle = useMemo(() => {
    // 단일 배경보다 더 깔끔하게 보이도록 첫 이미지를 대표로 사용
    return { backgroundImage: `url('${encodeURI(previewImages[0])}')` }
  }, [])

  return (
    <div className="portfolio-container">
      <section className="section portfolio-hero">
        <div className="portfolio-header">
          <span className="portfolio-label">Portfolio</span>
          <h1 className="portfolio-title">포트폴리오</h1>
          <p className="portfolio-description">
            약 4년간의 여정에서 깨닫고 얻은 지식과 경험을 토대로 제너럴해지는 과정을 걷는 개발자{' '}
            <strong>박태훈</strong>입니다. 발전하는 AI 세상과 함께 성장하고 도메인 지식을 쌓고 있습니다.
          </p>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="portfolio-card card">
          <div className="portfolio-preview" style={bgStyle}>
            <div className="portfolio-preview-overlay" />
            <div className="portfolio-preview-grid">
              {previewImages.map((src, idx) => (
                <div key={idx} className="portfolio-preview-item">
                  <img
                    src={encodeURI(src)}
                    alt={`포트폴리오 미리보기 ${idx + 1}`}
                    className="portfolio-preview-img"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="portfolio-actions">
            <button
              type="button"
              className="portfolio-download-btn"
              onClick={() => setNotice('현재 포폴공개 기간이 아닙니다')}
            >
              포트폴리오 다운로드
            </button>
            {notice && <div className="portfolio-notice">{notice}</div>}
          </div>
        </div>
      </section>
    </div>
  )
}

