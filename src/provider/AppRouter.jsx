import { Navigate, Route, Routes } from "react-router-dom"
import Main from "../pages/Main"
import ProductDetail from "../pages/ProductDetails"

function AppRouter() {
  return (
   <>
  <Routes>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route path="/main" element={<Main />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
   </>
  )
}

export default AppRouter
