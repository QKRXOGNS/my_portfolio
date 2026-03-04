'use client'

import './talks.css'

const TALK = {
  title: '나혼자 만드는 MMORPG',
  subtitle: 'pk-MMORPG-Framework를 주제로 한 발표',
  githubUrl: 'https://github.com/QKRXOGNS/pk_MMORPG_Framework',
  youtubeId: '__v5LvdWP3o',
}

export default function TalksPage() {
  return (
    <div className="talks-container">
      <section className="section talks-hero">
        <div className="talks-header">
          <span className="talks-label">Talks</span>
          <h1 className="talks-title">발표</h1>
          <p className="talks-description">
            개인 프로젝트를 기반으로 한 발표 자료와 영상을 정리합니다.
          </p>
        </div>
      </section>

      <section className="section talks-section">
        <article className="talk-card card">
          <div className="talk-card-header">
            <div className="talk-card-title-wrap">
              <h2 className="talk-card-title">{TALK.title}</h2>
              <p className="talk-card-subtitle">{TALK.subtitle}</p>
            </div>
            <div className="talk-links">
              <a
                className="talk-link"
                href={TALK.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </div>
          </div>

          <div className="talk-video">
            <iframe
              className="talk-video-iframe"
              src={`https://www.youtube.com/embed/${TALK.youtubeId}`}
              title={`${TALK.title} 발표 영상`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="talk-points">
            <h3 className="talk-points-title">발표 요약</h3>
            <ul className="talk-points-list">
              <li>pk-MMORPG-Framework를 기반으로 “혼자서 MMORPG를 만들기”의 구조와 접근을 공유</li>
              <li>클라이언트(React/TS)와 서버(Socket.IO/Node) 분리 및 실시간 멀티플레이 흐름 소개</li>
              <li>빠른 개발을 위한 플레이스홀더 렌더링, 시스템 단위 확장 전략을 설명</li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  )
}

