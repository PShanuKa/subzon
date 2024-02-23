import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import SinglePage from './Pages/SinglePage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/:id"element={<SinglePage/>}/>
      </Route>
    </Routes>  
    </>
  )
}

export default App
