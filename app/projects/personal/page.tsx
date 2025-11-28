'use client'

import Link from 'next/link'
import './personal.css'

export default function PersonalProjects() {
  const projects = [
    {
      id: 1,
      title: "AI 기반 유니크 직업 생성 시스템",
      description: "AI API를 활용하여 Unity에서 입력한 설명을 기반으로 게임 제어 마스터 AI가 직업 이름, 스텟, 이미지까지 자동으로 생성해주는 혁신적인 시스템입니다.",
      tags: ["Unity", "AI API", "절차적 생성", "GPT"],
      period: "2025",
      role: "AI 시스템 디자이너, 개발자",
      highlights: [
        "AI API 연동을 통한 실시간 직업 생성",
        "텍스트 설명 기반 자동 스텟 밸런싱",
        "AI 이미지 생성으로 직업별 비주얼 제작",
        "게임 제어 마스터 AI를 통한 콘텐츠 관리"
      ]
    },
    {
      id: 2,
      title: "AI 기반 서사 게임 - 게임잼 참여작",
      description: "AI API를 기반으로 특정 상황을 제시하고, 플레이어가 말하는 내용을 듣고 컨셉에 맞는 AI가 상황에 맞게 성공/실패 여부를 판단하는 인터랙티브 게임입니다.",
      tags: ["AI API", "게임잼", "음성 인식", "대화형 게임"],
      period: "2025",
      role: "게임 디자이너, AI 시스템 개발자",
      highlights: [
        "AI 기반 실시간 상황 판단 시스템",
        "플레이어 음성/텍스트 입력 처리",
        "동적 스토리 분기 구현",
        "게임잼 완성작"
      ]
    }
  ]

  return (
    <div className="projects-container">
      <section className="section projects-hero">
        <div className="projects-header">
          <span className="projects-label">Portfolio</span>
          <h1 className="projects-title">개인 프로젝트</h1>
          <p className="projects-description">
            AI 기술을 게임에 접목하여 새로운 가능성을 탐구하는 개인 프로젝트들입니다. 
            AI API를 활용한 혁신적인 게임 시스템을 연구하고 구현합니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card card">
              <div className="project-header">
                <h2 className="project-title">{project.title}</h2>
                <span className="project-period">{project.period}</span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-role">
                <strong>역할:</strong> {project.role}
              </div>

              <div className="project-highlights">
                <strong>주요 성과:</strong>
                <ul>
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-footer">
                <button className="project-link-btn">
                  자세히 보기 →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-box">
          <h2 className="cta-title">진행중인 프로젝트도 확인해보세요</h2>
          <p className="cta-text">현재 개발중인 프로젝트들을 소개합니다.</p>
          <Link href="/projects/current" className="btn btn-primary">
            진행중인 프로젝트 보기
          </Link>
        </div>
      </section>
    </div>
  )
}

