import {useEffect, useRef, useState} from "react";

export const Menu = (isMobileEvnt) => {
    const [navCls, setNavCls] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        const navbarToggler = document.querySelector(".navbar-toggler");
        navbarToggler.addEventListener("click", () => {
            if(document.getElementById("navbarResponsive").classList.contains("show")) {
                document.getElementById("navbarResponsive").classList.remove("show");
            } else {
                document.getElementById("navbarResponsive").classList.add("show");
            }
        });
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    }, []);

    const onScroll = () => {
        const scrollHeight = window.scrollY + 72;
        const projectsY = document.querySelectorAll("section")[2].offsetTop;

        let chngCls = "";
        if((scrollHeight >= projectsY) && (isMobileEvnt.props === "")) {
            chngCls = "green-font";
        } else {
            chngCls = "";
        }
        setNavCls(chngCls);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className={`navbar-brand ${navCls}`} href="#page-top">Sungwan's Portfolio</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><a className={`nav-link ${navCls}`} href="#about">About</a></li>
                        <li className="nav-item"><a className={`nav-link ${navCls}`} href="#skills">Skills</a></li>
                        <li className="nav-item"><a className={`nav-link ${navCls}`} href="#projects">Projects</a></li>
                        <li className="nav-item"><a className={`nav-link ${navCls}`} href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    )
    ;
};
