import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useEffect, useRef, useState} from "react";

export const Menu = () => {
    const [navCls, setNavCls] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    }, []);

    const onScroll = () => {
        const scrollHeight = window.scrollY + 72;

        const aboutY = document.getElementById("about").offsetTop;
        const skillsY = document.getElementById("skills").offsetTop;
        const projectsY = document.getElementById("projects").offsetTop;

        let chngCls = "";
        if((scrollHeight >= aboutY && scrollHeight < skillsY) || scrollHeight >= projectsY) {
            chngCls = "green-font";
        } else if(scrollHeight >= skillsY && scrollHeight < projectsY) {
            chngCls = "yellow-font";
        }
        setNavCls(chngCls);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className={`navbar-brand ${navCls}`} href="#page-top">Frontend Developer</a>
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