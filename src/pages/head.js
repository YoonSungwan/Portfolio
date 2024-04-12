import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useState} from "react";

export const Head = () => {
    const [value, setValue] = useState(0);
    const tabChange = (event, newVal) => {
        setValue(newVal);
    };

    const a11yProps = (idx) => {
        return idx;
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top">Frontend Developer</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    )
    ;
};