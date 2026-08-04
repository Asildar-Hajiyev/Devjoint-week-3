import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./pages/Main"
import AppRouter from "./provider/AppRouter"

function App() {
  return (
    <>
    <Header/>
    <AppRouter/>
   <Main/>
    <Footer/>
      
    </>
  )
}

export default App
