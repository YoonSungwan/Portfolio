import './App.css';
import './assets/css/styles.css';
import './assets/css/opt_style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter} from "react-router-dom";
import {TemplatePage} from "./pages/templatePage";
import {useMediaQuery} from "react-responsive";

function App() {
    const isMobileEvnt = MobileBody();
    return (
      <BrowserRouter>
          <TemplatePage props={isMobileEvnt}/>
      </BrowserRouter>
    );
}

const MobileBody = () => {
    const isActive = useMediaQuery({
        query: "(hover: none) and (pointer: coarse)"
    });
    return (
        isActive ? "M" : ""
    );
}

export default App;


