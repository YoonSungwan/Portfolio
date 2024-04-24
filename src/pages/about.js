import React from "react";

export const About = () => {
    return (
        <section className="page-section" id="about" style={{backgroundColor : "#6cdab2"}}>
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">About me</h2>
                <hr className="divider"/>
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-baseline">
                        <ul className="basProf">
                            <li className="profKey">Name</li>
                            <li className="profVal">윤성완</li>
                        </ul>
                        <ul className="basProf">
                            <li className="profKey">Age</li>
                            <li className="profVal">만30세(94.04.30)</li>
                        </ul>
                        <p className="text-black lh-lg m-sm-5">
                            <h2>꾸준히 성장하는 인재</h2>
                            <p className="introduce">
                                주로 Frontend 개발을 맡은 웹개발자입니다.<br/>
                                힘든 과제라도 한번 시작한 이상 포기하지 않고 해내는 책임감과 <br/>
                                어떤 순간에도 교훈을 찾아내서 성장하려고 노력합니다.<br/>
                                이러한 교훈으로 얻은 경험을 통해 남들과는 다른 참신한 관점을 제시하고자 합니다.
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
}