import {About} from "./about";
import {Projects} from "./projects";
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
        <Projects></Projects>
        /* Call to action*/
        <section className="page-section bg-dark text-white">
            <div className="container px-4 px-lg-5 text-center">
                <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
                <a className="btn btn-light btn-xl" href="https://startbootstrap.com/theme/creative/">Download Now!</a>
            </div>
        </section>
        /* Contact*/
        <section className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">Let's Get In Touch!</h2>
                        <hr className="divider"/>
                        <p className="text-muted mb-5">Ready to start your next project with us? Send us a messages and
                            we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">
                        /* * * * * * * * * * * * * * * **/
                        /* * * SB Forms Contact Form * **/
                        /* * * * * * * * * * * * * * * **/
                        /* This form is pre-integrated with SB Forms.*/
                        /* To make this form functional, sign up at*/
                        /* https://startbootstrap.com/solution/contact-forms*/
                        /* to get an API token!*/
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            /* Name input*/
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..."
                                       data-sb-validations="required"/>
                                <label htmlFor="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.
                                </div>
                            </div>
                            /* Email address input*/
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com"
                                       data-sb-validations="required,email"/>
                                <label htmlFor="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is
                                    required.
                                </div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.
                                </div>
                            </div>
                            /* Phone number input*/
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890"
                                       data-sb-validations="required"/>
                                <label htmlFor="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is
                                    required.
                                </div>
                            </div>
                            /* Message input*/
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text"
                                          placeholder="Enter your message here..." /*style="height: 10rem" */
                                          data-sb-validations="required"></textarea>
                                <label htmlFor="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is
                                    required.
                                </div>
                            </div>
                            /* Submit success message*/
                            /**/
                            /* This is what your users will see when the form*/
                            /* has successfully submitted*/
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br/>
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            /* Submit error message*/
                            /**/
                            /* This is what your users will see when there is*/
                            /* an error submitting the form*/
                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">Error sending message!</div>
                            </div>
                            /* Submit Button*/
                            <div className="d-grid">
                                <button className="btn btn-primary btn-xl disabled" id="submitButton"
                                        type="submit">Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-4 text-center mb-5 mb-lg-0">
                        <i className="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>+1 (555) 123-4567</div>
                    </div>
                </div>
            </div>
        </section>
        /* Footer*/
        <footer className="bg-light py-5">
            <div className="container px-4 px-lg-5">
                <div className="small text-center text-muted">Copyright &copy; 2023 - Company Name</div>
            </div>
        </footer>
        /* Bootstrap core JS*/
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        /* SimpleLightbox plugin JS*/
        <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>
        /* Core theme JS*/
        <script src="/js/scripts.js"></script>
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/
        /* * *                               SB Forms JS                               * **/
        /* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        </body>
    )
}