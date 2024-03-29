import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Periodicals from './pages/Periodicals'
import Websites from './pages/Websites'
import NoPage from './pages/NoPage'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/periodicals" element={<Periodicals />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
