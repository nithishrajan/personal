import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <div className="ambient-bg" />
      <div className="app-container">
        <header className="header">
          <div className="logo">
            <span className="gradient-text">Portfolio</span>
          </div>
          <nav className="nav-links">
            <a href="#about" className="nav-item">About</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#contact" className="nav-item">Contact</a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div className="hero-content">
              <h1 className="hero-title">
                Crafting <span className="gradient-text">digital experiences</span> that matter
              </h1>
              <p className="hero-subtitle">
                I'm a full-stack developer focused on building beautiful, progressive, and scalable web applications. Let's create something amazing together.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">View Projects</button>
                <button className="btn btn-secondary">Get in Touch</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
