import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>  
    </>
  )
}

export default App
