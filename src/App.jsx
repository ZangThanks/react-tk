import { Provider } from "react-redux";
import "./App.css";
import store from "../store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <Provider store={store}>
      <div className="w-[1280px] ml-6 flex flex-col justify-center items-start gap-2 bg-white text-black">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/task" element={<TaskPage />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
