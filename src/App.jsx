import { Provider } from "react-redux";
import "./App.css";
import store from "../store";

function App() {
  return (
    <div className="w-[1280px] ml-6">
      <Provider store={store}>
        <p className="text-red-300">Router</p>
      </Provider>
    </div>
  );
}

export default App;
