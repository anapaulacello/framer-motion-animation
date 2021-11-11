import React from 'react'
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import "./Home.css"

const containerVariants={
    hidden:{
        opacity:0
    },
    show:{
        opacity:1
    },
    exit:{
        y:"-100vh",
        transition:{
            ease:"aseaInOut",
            duration:0.5
        }
    }
}

export const Home = () => {
    return (
        <div className="home-container" 
        variants={containerVariants}
        init="hidden"
        animate="show"
        exit="exit"
        >
            <motion.h1
                initial={{y:-10}}
                animate={{y:10,
                    transition:{
                        duration:1,
                         ease:"easeIn",
                         repeat: Infinity,
                         repeatType:"reverse"
                         }
                }}
            >
            <Link className="link" to="/about">&#8659;</Link>
            </motion.h1>
        </div>
        
    )
}

export default Home;
