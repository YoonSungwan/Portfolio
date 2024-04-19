import React from "react";

export const Head = () => {
    return (
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h2 className="text-white font-weight-bold">Frontend Developer</h2>
                        <h1 className="text-white font-weight-bold">Sungwan's Portfolio</h1>
                        <hr className="divider"/>
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                    <p className="text-white-75 lh-lg">
                            <h2>꾸준히 성장하는 인재</h2>
                            주로 Frontend 개발을 맡은 웹개발자입니다.<br/>
                            어떤 순간에도 교훈을 찾아내서 성장하려고 노력하며<br/>
                            다양한 경험을 통해 남들과는 다른 참신한 관점을 제시하고자 합니다.
                        </p>
                        {/*<a className="btn btn-primary btn-xl" href="#about">Find Out More</a>*/}
                    </div>
                </div>
            </div>
        </header>
    );
};