import { PortfolioThemeProvider, usePortfolioTheme } from '../context/PortfolioThemeContext'
import HomeNavbar from '../components/home/HomeNavbar'
import HomeFooter from '../components/home/HomeFooter'
import PortfolioHero from '../components/home/PortfolioHero'
import ExperienceSection from '../components/home/ExperienceSection'
import SkillsSection from '../components/home/SkillsSection'
import EducationSection from '../components/home/EducationSection'
import ProjectsSection from '../components/home/ProjectsSection'

function HomeContent({ onSelectApp }) {
  const { mode, theme } = usePortfolioTheme()

  const cssVars =
    mode === 'dark'
      ? {
          '--home-glass-bg': 'rgba(255, 255, 255, 0.06)',
          '--home-glass-border': 'rgba(255, 255, 255, 0.12)',
          '--home-glass-hover': 'rgba(255, 255, 255, 0.14)',
          '--home-glass-border-hover': 'rgba(255, 255, 255, 0.28)',
          '--home-glass-shadow': '0 18px 50px -28px rgba(0, 0, 0, 0.65)',
          '--home-grid-line': 'rgba(255, 255, 255, 0.03)',
          '--home-text': theme.text,
        }
      : {
          '--home-glass-bg': 'rgba(255, 255, 255, 0.72)',
          '--home-glass-border': 'rgba(15, 23, 42, 0.1)',
          '--home-glass-hover': 'rgba(255, 255, 255, 0.92)',
          '--home-glass-border-hover': 'rgba(15, 23, 42, 0.16)',
          '--home-glass-shadow': '0 18px 50px -28px rgba(15, 23, 42, 0.18)',
          '--home-grid-line': 'rgba(15, 23, 42, 0.05)',
          '--home-text': theme.text,
        }

  return (
    <div
      className="min-h-svh transition-colors duration-300"
      data-theme={mode}
      style={{
        ...cssVars,
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <HomeNavbar />

      <main>
        <PortfolioHero />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection onSelectApp={onSelectApp} />
      </main>

      <HomeFooter />
    </div>
  )
}

export default function HomeView({ onSelectApp }) {
  return (
    <PortfolioThemeProvider>
      <HomeContent onSelectApp={onSelectApp} />
    </PortfolioThemeProvider>
  )
}
