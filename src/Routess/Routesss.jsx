import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Items from "../Pages/Items"
import Sidebar from "../components/Sidebar"
const Routesss = () => {
  return (
    <>
    <Sidebar/>
    <Routes>
    <Route exact path="/" component={<Home />} />
    <Route path="/Item" component={<Items />} />
    </Routes>
    </>
  )
}

export default Routesss