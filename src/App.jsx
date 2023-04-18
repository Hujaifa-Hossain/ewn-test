import "./App.css";
import Auth from "./pages/Auth";
import Header from "./shared/Header";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Auth />
      <Toaster />
    </div>
  );
};

export default App;
