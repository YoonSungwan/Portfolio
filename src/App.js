import './App.css';
import './assets/style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter} from "react-router-dom";
import {Menu} from "./pages/menu";
import {TemplatePage} from "./pages/templatePage";

function App() {
  return (
      <BrowserRouter>
          <Menu/>
          <TemplatePage/>
      </BrowserRouter>
  );
}

export default App;


