'use client'

import './about.css'

export default function About() {
  return (
    <div className="about-container">
      <section className="section intro-section">
        <div className="intro-content">
          <div className="intro-text">
            <span className="intro-label">소개</span>
            <h1 className="page-title">게임 디자이너</h1>
            <p className="intro-description">
              AI와 함께 개발하는 게임 디자이너로, 학부 시절 아케이드 게임과 VR 게임 개발을 시작으로 
              게임 업계에 발을 들였습니다.
            </p>
            <p className="intro-description">
              4년간 3매치 퍼즐 RPG부터 글로벌 MMORPG까지 다양한 장르를 경험했으며, 
              게임 기획과 개발을 병행하며 Unity와 Unreal Engine을 활용한 실전 프로젝트를 다수 진행했습니다.
            </p>
          </div>
          <div className="intro-image">
            <img 
              src="/ChatGPT Image 2025년 10월 30일 오전 09_57_04.png"
              alt="Profile"
              className="profile-img"
            />
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <h2 className="section-title">기술 & 툴</h2>
        <p className="section-subtitle">게임 디자인과 개발에 사용하는 주요 도구들입니다</p>

        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-category-title">기획 & 문서화</h3>
            <div className="skill-tags">
              <span className="skill-tag">Excel / Google Sheets</span>
              <span className="skill-tag">Notion</span>
              <span className="skill-tag">PowerPoint</span>
              <span className="skill-tag">Figma</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">게임 엔진 & 개발</h3>
            <div className="skill-tags">
              <span className="skill-tag">Unity</span>
              <span className="skill-tag">Unreal Engine</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">Blueprint</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">데이터 & 분석</h3>
            <div className="skill-tags">
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Google Analytics</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">협업 & 관리</h3>
            <div className="skill-tags">
              <span className="skill-tag">Jira</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Slack</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <h2 className="section-title">경력 & 경험</h2>
        <p className="section-subtitle">4년간의 게임 업계 경험</p>

        <div className="timeline">
          <div className="timeline-item card">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title">전투 기획</h3>
                <span className="timeline-period">2024.01 - 2024.10</span>
              </div>
              <p className="timeline-company">MMORPG의 전투기획 (해외)</p>
              <ul className="timeline-description">
                <li>글로벌 MMORPG 전투 시스템 기획</li>
                <li>전투 밸런싱 및 스킬 시스템 디자인</li>
                <li>해외 시장 대응 콘텐츠 기획 및 조정</li>
                <li>데이터 기반 전투 난이도 최적화</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item card">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title">게임 기획 & 개발</h3>
                <span className="timeline-period">2022 - 2024</span>
              </div>
              <p className="timeline-company">중소기업 (게임 개발사)</p>
              <ul className="timeline-description">
                <li>더 퍼스트헌터 - 3매치 퍼즐 RPG 게임 (소설 기반) 개발 및 기획</li>
                <li>3매치 퍼즐 RPG기반 여러 컨셉의 바리에이션 게임 개발및 기획</li>
                <li>위메이드 협업 p2E 해외 버전 개발 및 서비스</li>
                <li>게임 시스템 전반 설계 및 구현</li>
                <li>블록체인 기반 경제 시스템 기획 참여</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item card">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title">게임 개발 & 기획</h3>
                <span className="timeline-period">2021 - 2022 초</span>
              </div>
              <p className="timeline-company">게임 개발 (프리랜서/계약)</p>
              <ul className="timeline-description">
                <li>댄싱스타 - 아케이드 게임 개발 </li>
                <li>장애인용 버전 기획 및 개발 (파생 게임)</li>
                <li>둠스데이 2, 3 - 바이브 VR 게임을 오큘러스로 이식 및 리메이크</li>
                <li>언리얼 엔진 기반 전체 개발 및 기획 업무</li>
                <li>G-스타및 플레이X4 2년간 참여</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="contact-content card">
          <h2 className="contact-title">연락처</h2>
          <p className="contact-description">
            새로운 기회나 협업에 대해 논의하고 싶으시다면 언제든지 연락주세요.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:pk60123456@gmail.com" className="contact-link">pk60123456@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <a href="https://www.linkedin.com/in/%ED%83%9C%ED%9B%88-%EB%B0%95-697370351/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn 프로필</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🎬</span>
              <a href="https://www.youtube.com/@%EC%9A%A9%EC%9D%98%EC%B6%95%EB%B3%B5/videos" target="_blank" rel="noopener noreferrer" className="contact-link">YouTube 채널</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

