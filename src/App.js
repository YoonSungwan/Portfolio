import './App.css';
import './assets/style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter} from "react-router-dom";
import {Head} from "./pages/head";
import {Main} from "./pages/main";

function App() {
  return (
      <BrowserRouter>
          <Head/>
          <Main/>
      </BrowserRouter>
  );
}

export default App;


