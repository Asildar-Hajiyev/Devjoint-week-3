import { Route, Routes } from "react-router-dom"
import Main from "../pages/Main"

function AppRouter() {
  return (
   <>
    <Routes>
      <Route to="/main" element={<Main/>}/>
    </Routes>
   </>
  )
}

export default AppRouter
