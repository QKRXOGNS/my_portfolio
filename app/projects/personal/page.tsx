'use client'

import Link from 'next/link'
import './personal.css'

/* ComfyUI 워크플로우 기술 소개용 이미지 (어떤 기술로 만들었는지) */
const artWorkflowImages = [
  '/2026-03-04 14;25;47.JPEG',
  '/2026-03-04 14;26;08.JPEG',
  '/2026-03-04 14;26;22.JPEG',
  '/2026-03-04 14;26;32.JPEG',
]

/* ComfyUI로 만든 결과물 갤러리 */
const artGalleryImages = [
  '/Adobe Express - file.png',
  '/idle_00068_.png',
  '/idle_00071_.png',
  '/idle_00075_.png',
  '/idle_00079_.png',
  '/2026-03-04 13;42;59.JPEG',
  '/2026-03-04 13;43;06.JPEG',
  '/2026-03-04 13;43;21.JPEG',
  '/2026-03-04 13;43;27.JPEG',
  '/2026-03-04 13;43;43.JPEG',
]

const YOUTUBE_EMBED_ID = 'sVaeJb68sEo'

export default function PersonalProjects() {
  const projects = [
    {
      id: 1,
      title: "pk-MMORPG-Framework",
      description: "웹 기반으로 학습할 수 있는 MMORPG 포트폴리오. 실시간 멀티플레이어 RPG 게임 프레임워크로, React + TypeScript + Socket.IO + Firebase 기반입니다. 24시간 만에 개발을 완료하고 AI와 함께 작업했습니다.",
      tags: ["React", "TypeScript", "Socket.IO", "Firebase", "Vite", "Tailwind"],
      period: "2026",
      role: "개발자",
      highlights: [
        "실시간 전투: Socket.IO 기반 멀티플레이어",
        "자동 전투, 4가지 직업(전사/궁수/마법사/가디언)",
        "레벨·장비·인벤토리·물약·아이템 분해 시스템",
        "박스 렌더링 플레이스홀더로 스프라이트 없이 플레이 가능"
      ],
      linkUrl: "https://github.com/QKRXOGNS/pk_MMORPG_Framework",
      linkLabel: "GitHub 저장소",
      imageUrl: "/527459607-dfdf1e1c-f323-45c9-b464-15ed11fbbe60.png",
    },
    {
      id: 2,
      title: "AI 에이전트와 함께 UI 개발하는 법",
      description: "유니티 프로젝트 안에서 HTML(UXML), CSS(USS), JS(C#)를 만들고, 이를 기반으로 Unity UI Toolkit을 이용해 간단하고 편하게 UI를 조정하고 목업하는 방법을 소개합니다.",
      tags: ["Unity", "UI Toolkit", "UXML", "USS", "목업"],
      period: "2026",
      role: "발표·튜토리얼",
      highlights: [
        "Unity 내 UXML/USS로 UI 구조·스타일 정의",
        "C#과 연동한 UI Toolkit 워크플로",
        "AI 에이전트와 협업한 UI 개발·목업"
      ],
      linkUrl: "https://www.youtube.com/watch?v=sVaeJb68sEo&t=326s",
      linkLabel: "YouTube 영상 보기",
      youtubeEmbedId: YOUTUBE_EMBED_ID,
    },
    {
      id: 3,
      title: "AI 기반 유니크 직업 생성 시스템",
      description: "AI API를 활용하여 Unity에서 입력한 설명을 기반으로 게임 제어 마스터 AI가 직업 이름, 스텟, 이미지까지 자동으로 생성해주는 혁신적인 시스템입니다.",
      tags: ["Unity", "AI API", "절차적 생성", "GPT"],
      period: "2026",
      role: "AI 시스템 디자이너, 개발자",
      highlights: [
        "AI API 연동을 통한 실시간 직업 생성",
        "텍스트 설명 기반 자동 스텟 밸런싱",
        "AI 이미지 생성으로 직업별 비주얼 제작",
        "게임 제어 마스터 AI를 통한 콘텐츠 관리"
      ]
    },
    {
      id: 4,
      title: "AI 기반 서사 게임 - 게임잼 참여작",
      description: "AI API를 기반으로 특정 상황을 제시하고, 플레이어가 말하는 내용을 듣고 컨셉에 맞는 AI가 상황에 맞게 성공/실패 여부를 판단하는 인터랙티브 게임입니다.",
      tags: ["AI API", "게임잼", "음성 인식", "대화형 게임"],
      period: "2026",
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
            2026년에 진행한 프로젝트입니다. AI 기술을 게임에 접목하여 새로운 가능성을 탐구하고,
            AI API와 도구를 활용한 게임 시스템·에셋 제작을 연구하고 구현합니다.
          </p>
        </div>
      </section>

      {/* 개발 — 먼저 소개 */}
      <section className="section dev-section">
        <h2 className="section-title">개발</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card card">
              {'imageUrl' in project && project.imageUrl && (
                <div className="project-image-wrap">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="project-card-image"
                  />
                </div>
              )}
              {'youtubeEmbedId' in project && project.youtubeEmbedId && (
                <div className="project-youtube-wrap">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeEmbedId}?start=326`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="project-youtube-iframe"
                  />
                </div>
              )}
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
                {'linkUrl' in project && project.linkUrl ? (
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    {'linkLabel' in project ? project.linkLabel : '자세히 보기'} →
                  </a>
                ) : (
                  <button className="project-link-btn">
                    자세히 보기 →
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 아트 — ComfyUI 과정 소개 + 기술 이미지 + 만든 이미지 갤러리 */}
      <section className="section art-section">
        <h2 className="section-title">아트</h2>
        <p className="art-intro">
          ComfyUI를 사용해 게임 에셋을 생성하는 과정을 소개합니다. 여러 플로우로 구성된 노드와
          LoRA·모델을 조합해, 애니메이션용 이미지를 여러 장 뽑고, 특정 캐릭터와 학습데이터를
          병렬로 연결해 원하는 비주얼을 만듭니다. 이미지를 픽셀아트 스타일로 변환하는 워크플로도
          활용할 수 있습니다.
        </p>

        <h3 className="art-subsection-title">사용 기술 · 작업 과정</h3>
        <p className="art-subsection-desc">
          아래는 체크포인트·LoRA 로드, 프롬프트 인코딩, KSampler, VAE 디코드 등으로 구성한
          ComfyUI 워크플로우 예시입니다.
        </p>
        <div className="art-workflow-gallery">
          {artWorkflowImages.map((src, index) => (
            <div key={index} className="art-workflow-item">
              <img
                src={encodeURI(src)}
                alt={`ComfyUI 워크플로우 ${index + 1}`}
                className="art-workflow-img"
              />
            </div>
          ))}
        </div>

        <h3 className="art-subsection-title">만든 이미지</h3>
        <p className="art-subsection-desc">
          위 워크플로우와 노드·로라·모델 조합으로 제작한 결과물입니다.
        </p>
        <div className="art-gallery">
          {artGalleryImages.map((src, index) => (
            <div key={index} className="art-gallery-item">
              <img
                src={encodeURI(src)}
                alt={`작품 ${index + 1}`}
                className="art-gallery-img"
              />
            </div>
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

