import {About} from "./about";
import {Projects} from "./projects";
import {Skills} from "./skills";
import {Contact} from "./contact";
import {Foot} from "./foot";
import {Head} from "./head";
export const TemplatePage = () => {
    return (
        <body id="page-top">
            <Head></Head>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Foot></Foot>
        </body>
    )
}