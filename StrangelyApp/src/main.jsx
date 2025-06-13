import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';


import ChatBox from './Components/RandomUi/ChatBox.jsx';
import MessageCard from './Components/RandomUi/SelectActionCard.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<ChatBox/>} />
      <Route path="/messagecard" element={<MessageCard/>} />
    </Routes>
    
  </BrowserRouter>
  </StrictMode>
)
