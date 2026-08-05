import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import AppRouter from "./provider/AppRouter";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Main />
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        newestOnTop
        toastClassName="toasty-toast"
        bodyClassName="toasty-body"
      />
      <Footer />
    </>
  );
}

export default App;
