'use client'

import Link from 'next/link'
import './current.css'

export default function CurrentProjects() {
  const currentProjects = [
    {
      id: 1,
      title: "AI 기반 방치형 2D RPG",
      status: "진행중",
      progress: 30,
      description: "기존 프로젝트에서 진행도를 30%로 조정하여 개발 중입니다. 사용 플랫폼인 뒤끝서버의 플랫폼 업데이트 및 리메이크로 인해 전면 갈아엎는 과정을 거치고 있으며, 유저 상황에 따라 변경되는 AI 기반 직업 시스템과 직업 + 캐릭터 이미지 생성까지 연동해 진행하고 있습니다.",
      tags: ["Unity", "AI", "방치형 RPG", "뒤끝서버", "온라인"],
      startDate: "2024.10",
      expectedEnd: "진행 중",
      team: "개인 프로젝트",
      myRole: "게임 디자이너, 개발자",
      tasks: [
        "뒤끝서버 플랫폼 업데이트·리메이크 대응 및 전면 재구축",
        "유저 상황에 따라 변경되는 AI 기반 직업 시스템",
        "직업 + 캐릭터 이미지 AI 생성 연동",
        "스킬 및 외형 동적 적용 연구",
        "대화 기반 유니크 선택지 스토리 시스템"
      ],
      challenges: [
        "뒤끝서버 API 변경에 따른 기존 연동 전면 수정",
        "AI API 호출 최적화 및 비용 관리",
        "실시간 콘텐츠 생성과 게임 밸런스 유지",
        "유저별 고유 콘텐츠 저장 및 로드"
      ]
    },
    {
      id: 2,
      title: "소울류 게임 with 소규모 LLM (장기 프로젝트)",
      status: "연구 단계",
      progress: 30,
      description: "학부 시절부터 개발해온 소울류 게임에 소규모 LLM을 연구 중입니다. 갓 오브 워의 아들, 라스트 오브 어스의 엘리처럼 게임 내부 상황에 맞게 행동하고 플레이어와 상호작용하는 AI NPC를 구현합니다.",
      tags: ["Unreal Engine", "소울류", "LLM", "AI NPC", "상호작용"],
      startDate: "학부시절 - 현재",
      expectedEnd: "장기 프로젝트",
      team: "개인 프로젝트",
      myRole: "게임 디자이너, AI 연구자",
      tasks: [
        "소규모 LLM 모델 최적화 및 게임 통합",
        "상황 인식 기반 NPC 행동 패턴 구현",
        "플레이어와의 자연스러운 대화 시스템",
        "전투 상황 및 스토리 진행에 따른 AI 반응"
      ],
      challenges: [
        "로컬에서 실행 가능한 경량 LLM 최적화",
        "게임 성능과 AI 품질 간의 균형",
        "다양한 상황에서 자연스러운 AI 반응 구현",
        "스토리와 AI 상호작용의 유기적 연결"
      ]
    }
  ]

  return (
    <div className="current-projects-container">
      <section className="section projects-hero">
        <div className="projects-header">
          <span className="projects-label">In Progress</span>
          <h1 className="projects-title">진행중인 프로젝트</h1>
          <p className="projects-description">
            AI 기술을 게임에 적극적으로 활용하는 진행중인 프로젝트들입니다. 
            혁신적인 AI 시스템 연구와 실제 게임 개발을 병행하고 있습니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="current-projects-list">
          {currentProjects.map((project) => (
            <article key={project.id} className="current-project-card card">
              <div className="project-status-bar">
                <div className="status-info">
                  <span className={`status-badge status-${
                    project.status === '진행중' ? 'active' : 
                    project.status === '연구 단계' ? 'research' : 
                    'planning'
                  }`}>
                    {project.status}
                  </span>
                  <span className="progress-text">{project.progress}% 완료</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <h2 className="current-project-title">{project.title}</h2>
              <p className="current-project-description">{project.description}</p>

              <div className="project-meta">
                <div className="meta-item">
                  <span className="meta-label">기간</span>
                  <span className="meta-value">{project.startDate} ~ {project.expectedEnd}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">팀 구성</span>
                  <span className="meta-value">{project.team}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">내 역할</span>
                  <span className="meta-value highlight">{project.myRole}</span>
                </div>
              </div>

              <div className="project-section">
                <h3 className="section-heading">담당 업무</h3>
                <ul className="task-list">
                  {project.tasks.map((task, index) => (
                    <li key={index} className="task-item">{task}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h3 className="section-heading">주요 과제</h3>
                <ul className="challenge-list">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="challenge-item">{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-box">
          <h2 className="cta-title">완료된 개인 프로젝트도 확인해보세요</h2>
          <p className="cta-text">지금까지 완성한 개인 프로젝트들을 소개합니다.</p>
          <Link href="/projects/personal" className="btn btn-primary">
            개인 프로젝트 보기
          </Link>
        </div>
      </section>
    </div>
  )
}

