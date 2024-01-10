import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import CreateAccount from "./pages/CreateAccount"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = {""} element = {<Home/>}/>
        <Route path = {"/dashboard"} element = {<Dashboard/>}/>
        <Route path = {"/CreateAccount"} element = {<CreateAccount/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App 