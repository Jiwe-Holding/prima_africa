import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Group from './pages/Group.jsx'
import Expertise from './pages/Expertise.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="our-group" element={<Group />} />
        <Route path="expertise" element={<Navigate to="/expertise/market-research" replace />} />
        <Route path="expertise/:slug" element={<Expertise />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
