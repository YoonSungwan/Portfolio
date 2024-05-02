import {About} from "./about";
import {Projects} from "./projects";
import {Skills} from "./skills";
import {Contact} from "./contact";
import {Foot} from "./foot";
import {Head} from "./head";
import {Menu} from "./menu";
export const TemplatePage = (isMobileEvnt) => {
    return (
        <body id="page-top">
            <Menu props={isMobileEvnt.props}></Menu>
            <Head></Head>
            <About></About>
            <Skills props={isMobileEvnt.props}></Skills>
            <Projects props={isMobileEvnt.props}></Projects>
            <Contact></Contact>
            <Foot></Foot>
        </body>
    )
}