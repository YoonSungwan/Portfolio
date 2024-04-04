import './App.css';
import {Head} from "./pages/head";
import {Main} from "./pages/main";
import './assets/style.css';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Head/>
        <Main/>
      </BrowserRouter>
  );
}

export default App;


