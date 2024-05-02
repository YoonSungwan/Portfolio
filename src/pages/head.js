import React from "react";
import {motion} from "framer-motion";

export const Head = () => {
    const initAni = {rotate: 320};
    const aning = {rotate: 0};
    const trans = {delay: 1};

    const variants = {
        hidden : {opacity: 0},
        visible: {opacity: 1}
    };

    return (
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <motion.div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"
                    initial="hidden" animate="visible" transition={{delay:10}}>
                    <div className="col-lg-8 align-self-end">
                        <motion.h2 className="text-white font-weight-bold"
                           variants={variants}>Frontend Developer</motion.h2>
                        <motion.h1 className="text-white font-weight-bold"
                                   // initial={initAni} animate={aning} transition={trans}
                        >
                            {/*<motion.img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/icons/nunchi.png`} alt="눈치" style={{transform: "translateX(60%)"}}*/}
                            {/*animate="hidden"/>*/}
                            Sungwan's Portfolio
                        </motion.h1>

                        {/*<h1 className="text-white font-weight-bold">Sungwan's Portfolio</h1>*/}
                        {/*<hr className="divider"/>*/}
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                    </div>
                </motion.div>
            </div>
        </header>
    );
};