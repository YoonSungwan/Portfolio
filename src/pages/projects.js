export const Projects = (isMobileEvnt)  => {
    const isMobCss = (isMobileEvnt.props === "M");

    return (
        <section className="page-section" id="projects">
                <h2 className="text-center mt-0">Projects</h2>
                <hr className="divider"/>
                <div className="container-fluid p-0">
                    { !isMobCss &&
                    <div className="row g-0">
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://traffic.paju.go.kr/main.view" target="_blank"
                               title="파주시 교통정보센터" rel="noreferrer">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/img/portfolio/fullsize/paju.png`} alt="파주시"/>
                                <div className="hover-caption">
                                    <div className="project-category text-white-50">팀 프로젝트</div>
                                    <div className="project-name">파주시 교통정보센터</div>
                                    <div className="project-detail">
                                        처음으로 참여한 프로젝트로 교통통계 데이터의 SQL 쿼리 작성,<br/>
                                        그래프 표출, 공지사항, 실시간 교통정보의 DSRC 페이지 등의 개발에 참여하였습니다.
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://its.gimpo.go.kr/index.view" target="_blank"
                               title="김포시 교통정보센터" rel="noreferrer">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/img/portfolio/fullsize/gimpo.png`} alt="김포시"/>
                                <div className="hover-caption">
                                    <div className="project-category text-white-50">팀 프로젝트</div>
                                    <div className="project-name">김포시 교통정보센터</div>
                                    <div className="project-detail">
                                        외부업체와 협력하여 실시간 비디오 영상 송출을 맡았으며<br/>
                                        지도 외곽선 교통링크 추가 등의 클라이언트의 요청을 정리하여 적용하였습니다.
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://its.mokpo.go.kr/its/main.view" target="_blank"
                               title="목포시 교통정보센터" rel="noreferrer">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/img/portfolio/fullsize/mokpo.png`} alt="목포시"/>
                                <div className="hover-caption">
                                    <div className="project-category text-white-50">팀 프로젝트</div>
                                    <div className="project-name">목포시 교통정보센터</div>
                                    <div className="project-detail">
                                        퍼블리싱을 제외하고 사이트 대부분의 기능을 구현하였으며 사내의 백엔드 기술자와 협의하여<br/>
                                        위성항법시스템를 통한 위치정보를 기반으로 버스 위치정보 표출을 구현하였습니다.
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://its.icheon.go.kr/index.view" target="_blank"
                               title="이천시 교통정보센터" rel="noreferrer">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/img/portfolio/fullsize/icheon.png`} alt="이천시"/>
                                <div className="hover-caption">
                                    <div className="project-category text-white-50">팀 프로젝트</div>
                                    <div className="project-name">이천시 교통정보센터</div>
                                    <div className="project-detail">
                                        PL 업무를 일부 맡아 업무를 분배하였으며 소통정보 바로가기 검색,<br/>
                                        교통정보의 VMS에 표출하는 이미지 생성, 웹접근성 심사 인증마커 대응 등의 업무를 맡았습니다.
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    }
                    { isMobCss &&
                    <div>
                        <div className="active-container projects-grid-col">
                            <img className="img-fluid"
                                 src={`${process.env.PUBLIC_URL}/assets/img/portfolio/fullsize/paju.png`}
                                 alt="파주시"/>
                            <div className="active-caption">
                                <div className="project-category text-white-50">팀 프로젝트</div>
                                <div className="project-name">파주시 교통정보센터</div>
                                <div className="project-detail">
                                    처음으로 참여한 프로젝트로 교통통계 데이터의 SQL 쿼리 작성,<br/>
                                    그래프 표출, 공지사항, 실시간 교통정보의 DSRC 페이지 등의 개발에 참여하였습니다.
                                </div>
                                <a className="portfolio-box" href="https://traffic.paju.go.kr/main.view" target="_blank"
                                   title="김포시 교통정보센터" rel="noreferrer">바로가기</a>
                            </div>
                        </div>
                        <div className="active-container projects-grid-col">
                            <img className="img-fluid"
                                 src={`${process.env.PUBLIC_URL}/assets/img/portfolio/fullsize/gimpo.png`}
                                 alt="김포시"/>
                            <div className="active-caption">
                                <div className="project-category text-white-50">팀 프로젝트</div>
                                <div className="project-name">김포시 교통정보센터</div>
                                <div className="project-detail">
                                    외부업체와 협력하여 실시간 비디오 영상 송출을 맡았으며<br/>
                                    지도 외곽선 교통링크 추가 등의 클라이언트의 요청을 정리하여 적용하였습니다.
                                </div>
                                <a className="portfolio-box" href="https://its.gimpo.go.kr/index.view" target="_blank"
                                   title="김포시 교통정보센터" rel="noreferrer">바로가기</a>
                            </div>
                        </div>
                        <div className="active-container projects-grid-col">
                            <img className="img-fluid"
                                 src={`${process.env.PUBLIC_URL}/assets/img/portfolio/fullsize/mokpo.png`} alt="목포시"/>
                            <div className="active-caption">
                                <div className="project-category text-white-50">팀 프로젝트</div>
                                <div className="project-name">목포시 교통정보센터</div>
                                <div className="project-detail">
                                    퍼블리싱을 제외하고 사이트 대부분의 기능을 구현하였으며 사내의 백엔드 기술자와 협의하여<br/>
                                    위성항법시스템를 통한 위치정보를 기반으로 버스 위치정보 표출을 구현하였습니다.
                                </div>
                                <a className="portfolio-box" href="https://its.mokpo.go.kr/its/main.view"
                                   target="_blank"
                                   title="목포시 교통정보센터" rel="noreferrer">바로가기</a>
                            </div>
                        </div>

                        <div className="active-container projects-grid-col">
                            <img className="img-fluid"
                                 src={`${process.env.PUBLIC_URL}/assets/img/portfolio/fullsize/icheon.png`} alt="이천시"/>
                            <div className="active-caption">
                                <div className="project-category text-white-50">팀 프로젝트</div>
                                <div className="project-name">이천시 교통정보센터</div>
                                <div className="project-detail">
                                    PL 업무를 일부 맡아 업무를 분배하였으며 소통정보 바로가기 검색,<br/>
                                    교통정보의 VMS에 표출하는 이미지 생성, 웹접근성 심사 인증마커 대응 등의 업무를 맡았습니다.
                                </div>
                                <a className="portfolio-box" href="https://its.icheon.go.kr/index.view" target="_blank"
                                   title="이천시 교통정보센터" rel="noreferrer">바로가기</a>
                            </div>
                        </div>
                    </div>
                    }
                </div>
        </section>
    )
}