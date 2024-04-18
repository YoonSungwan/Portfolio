export const Projects = ()  => {
    return (
        <section className="page-section" id="projects">
                <h2 className="text-center mt-0">Projects</h2>
                <hr className="divider"/>
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://its.icheon.go.kr/index.view" target="_blank"
                               title="이천시 교통정보센터" rel="noreferrer">
                                <img className="img-fluid" src="/assets/img/portfolio/fullsize/icheon.png" alt="이천시"/>
                                <div className="hover-caption">
                                    <div className="project-category text-white-50">팀 프로젝트</div>
                                    <div className="project-name">이천시 교통정보센터</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://traffic.paju.go.kr/main.view" target="_blank"
                               title="파주시 교통정보센터" rel="noreferrer">
                                <img className="img-fluid" src="/assets/img/portfolio/fullsize/paju.png" alt="파주시"/>
                            <div className="hover-caption">
                                <div className="project-category text-white-50">팀 프로젝트</div>
                                <div className="project-name">파주시 교통정보센터</div>
                            </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://its.gimpo.go.kr/index.view" target="_blank"
                               title="김포시 교통정보센터" rel="noreferrer">
                                <img className="img-fluid" src="/assets/img/portfolio/fullsize/gimpo.png" alt="김포시"/>
                                <div className="hover-caption">
                                    <div className="project-category text-white-50">팀 프로젝트</div>
                                    <div className="project-name">김포시 교통정보센터</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://its.mokpo.go.kr/its/main.view" target="_blank"
                               title="목포시 교통정보센터" rel="noreferrer">
                                <img className="img-fluid" src="/assets/img/portfolio/fullsize/mokpo.png" alt="목포시"/>
                                <div className="hover-caption">
                                    <div className="project-category text-white-50">팀 프로젝트</div>
                                    <div className="project-name">목포시 교통정보센터</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
        </section>
    )
}