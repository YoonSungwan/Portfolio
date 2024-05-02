import {useEffect} from "react";

export const Skills = (isMobileEvnt) => {
    return (
        <section className="page-section bg-primary" id="skills">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">Skills</h2>
                        <hr className="divider divider-light"/>
                        <div className="text-white-75 mb-4">
                            <div className="personal-info skills-grid-col">
                                <div className="frontSkill">
                                    <div className="info-label">Frontend</div>
                                    <hr className="diverSkill"/>
                                    <div className={`imgBox_two${isMobileEvnt.props}`}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/icons/html-logo.png`}
                                             alt="html icon"
                                             style={{width: "50%"}}/>
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/icons/css.png`}
                                             alt="css icon"
                                             style={{width: "50%"}}/>
                                        <div className="skills-caption">실무 사용</div>
                                    </div>
                                    <div className={`imgBox${isMobileEvnt.props}`}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/icons/js-logo.png`}
                                             alt="js icon"/>
                                        <div className="skills-caption">실무 사용</div>
                                    </div>
                                    <div className={`imgBox${isMobileEvnt.props}`}>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/img/portfolio/icons/jquery-logo.png`}
                                            alt="jquery icon"/>
                                        <div className="skills-caption">실무 사용</div>
                                    </div>
                                    <div className={`imgBox${isMobileEvnt.props}`}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/icons/React-logo.png`}
                                             alt="react icon"/>
                                        <div className="skills-caption personal-skill">개인 숙련</div>
                                    </div>
                                </div>
                                <div className="endSkill">
                                    <div className="info-label">Backend</div>
                                    <hr className="diverSkill"/>
                                    <div className={`imgBox${isMobileEvnt.props}`}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/icons/java_logo.png`}
                                             alt="java icon"/>
                                        <div className="skills-caption">실무 사용</div>
                                    </div>
                                    <div className={`imgBox${isMobileEvnt.props}`}>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/img/portfolio/icons/Oracle_wordmark.png`}
                                            alt="oracle icon"/>
                                        <div className="skills-caption">실무 사용</div>
                                    </div>
                                </div>
                                <div className="etcSkill">
                                    <div className="info-label">Etc</div>
                                    <hr className="diverSkill"/>
                                    <div className={`imgBox${isMobileEvnt.props}`}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/icons/Git-logo.png`}
                                             alt="git icon"/>
                                        <div className="skills-caption">실무 사용</div>
                                    </div>
                                    <div className={`imgBox${isMobileEvnt.props}`}>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/img/portfolio/icons/Apache_Tomcat_logo.png`}
                                            alt="apache-tomcat icon"/>
                                        <div className="skills-caption">실무 사용</div>
                                    </div>
                                    <div className={`imgBox${isMobileEvnt.props}`}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/icons/JEUS-logo.png`}
                                             alt="jeus icon"/>
                                        <div className="skills-caption">실무 사용</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}