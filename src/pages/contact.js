export const Contact = () => {
    return (
        <section className="page-section bg-info" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">Contact</h2>
                        <hr className="divider"/>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-4 text-center mb-5 mb-lg-0">
                        <i className="bi-phone fs-2 mb-3 text-muted"> 연락처</i>
                        <div className="contactValue">010-5745-3358</div>
                    </div>
                    <div className="col-lg-4 text-center mb-5 mb-lg-0">
                        <i className="bi-mailbox fs-2 mb-3 text-muted"> E-mail</i>
                        <div className="contactValue">sungwanyoon@gamil.com</div>
                    </div>
                </div>
            </div>
        </section>
    );
}