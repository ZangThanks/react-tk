import { Provider } from "react-redux";
import "./App.css";
import store from "../store";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="w-[1280px] ml-6 flex flex-col justify-center items-start gap-4">
        <Header />
        <p className="text-red-300">Router</p>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
