export const Skills = () => {
    return (
        <section className="page-section bg-primary" id="skills">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">Skills</h2>
                        <hr className="divider divider-light"/>
                        <p className="text-white-75 mb-4">
                            <div className="personal-info">
                                <div className="frontSkill">
                                    <div className="info-label">Frontend</div>
                                    <hr className="diverSkill"/>
                                    <div className="imgBox_two">
                                        <img src="../assets/img/portfolio/icons/html-logo.png" alt="html icon" style={{width:"40%"}}/>
                                        <img src="../assets/img/portfolio/icons/css.png" alt="css icon" style={{width:"27%"}}/>
                                    </div>
                                    <div className="imgBox">
                                        <img src="../assets/img/portfolio/icons/jquery-logo.png" alt="jquery icon"/>
                                    </div>
                                    <div className="imgBox">
                                        <img src="../assets/img/portfolio/icons/React-logo.png" alt="react icon"/>
                                    </div>
                                </div>
                                <div className="endSkill">
                                    <div className="info-label">Backend</div>
                                    <hr className="diverSkill"/>
                                    <div className="imgBox">
                                        <img src="../assets/img/portfolio/icons/java_logo.png" alt="java icon"
                                             style={{width: "50%"}}/>
                                    </div>
                                    <div className="imgBox">
                                        <img src="../assets/img/portfolio/icons/Oracle_wordmark.png" alt="oracle icon"/>
                                    </div>
                                    <div className="imgBox">
                                        <img src="../assets/img/portfolio/icons/mariadb-logo.png" alt="mariadb icon"/>
                                    </div>
                                </div>
                                <div className="etcSkill">
                                    <div className="info-label">Etc</div>
                                    <hr className="diverSkill"/>
                                    <div className="imgBox">
                                        <img src="../assets/img/portfolio/icons/Git-logo.png" alt="git icon"
                                             style={{width: "50%"}}/>
                                    </div>
                                    <div className="imgBox">
                                        <img src="../assets/img/portfolio/icons/Apache_Tomcat_logo.png"
                                             alt="apache-tomcat icon"/>
                                    </div>
                                    <div className="imgBox">
                                        <img src="../assets/img/portfolio/icons/JEUS-logo.png" alt="jeus icon"/>
                                    </div>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}