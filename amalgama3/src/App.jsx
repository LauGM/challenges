import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginView from './views/LoginView'
import ErrorView from './views/ErrorView'
import HomeView from './views/HomeView'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LoginView/>}/>
          <Route exact path='/home' element={<HomeView/>}/>
          <Route exact path='/error' element={<ErrorView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
