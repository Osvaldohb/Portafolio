import { BrowserRouter, Route, Routes } from "react-router-dom"

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Index from "./Pages/Index";

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes >
      <Route path="/"  element={<Index/>} />
      <Route path="/menus" element={<Index/>}/>
      <Route path="*" element={<Index/>}/>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
