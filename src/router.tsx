import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Create from 'pages/create'
import Read from 'pages/read'
import Update from 'pages/update'
import Delete from 'pages/delete'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/delete/:id" element={<Delete />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}
