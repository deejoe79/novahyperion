import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Industries from './pages/Industries'
import Technologies from './pages/Technologies'
import Work from './pages/Work'
import About from './pages/About'
import Insights from './pages/Insights'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="industries" element={<Industries />} />
        <Route path="technologies" element={<Technologies />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="insights" element={<Insights />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
