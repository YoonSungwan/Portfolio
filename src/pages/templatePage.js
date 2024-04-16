import {About} from "./about";
import {Projects} from "./projects";
import {Skills} from "./skills";
import {Contact} from "./contact";
import {Foot} from "./foot";
export const TemplatePage = () => {
    return (
        <body id="page-top">
            <header className="masthead">
                <div className="container px-4 px-lg-5 h-100">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end">
                            <h1 className="text-white font-weight-bold">Sungwan's Portfolio</h1>
                            <hr className="divider"/>
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 mb-5">
                                <h2>꾸준히 성장하는 인재</h2>
                                어떤 순간에도 교훈을 찾아내서 성장하는 개발자입니다.<br/>
                                주로 Frontend 개발을 하지만 Backend 및 publishing 개발도 가능하며<br/>
                                다양한 경험을 통해 남들과 차별화 된 새로운 관점을 제시하고자 합니다.
                            </p>
                            {/*<a className="btn btn-primary btn-xl" href="#about">Find Out More</a>*/}
                        </div>
                    </div>
                </div>
            </header>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Foot></Foot>
        </body>
    )
}