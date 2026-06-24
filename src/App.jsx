import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { CursorProvider } from './components/Cursor/CursorContext'
import CustomCursor from './components/Cursor/CustomCursor'
import Preloader from './components/Preloader/Preloader'
import Layout from './components/Layout/Layout'
import { useLenis } from './hooks/useLenis'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  const [loading, setLoading] = useState(true)
  useLenis()

  return (
    <HelmetProvider>
      <CursorProvider>
        <CustomCursor />
        {loading && <Preloader onFinish={() => setLoading(false)} />}

        <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease' }}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </CursorProvider>
    </HelmetProvider>
  )
}
