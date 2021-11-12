import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import Titan from '../components/Titan'

const containerVariant={
    hidden:{
        opacity:0,
        y:"50vh"
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            stiffness:60
        }
    },
    exit:{
        y:"-100vh",
        transition:{
            ease:"aseaInOut",
            duration:0.5
        }
    }
}

const arrowVariant={
    first:{
        y:-5
    },
    second:{
        y:5,
        transition:{
            duration:1,
            ease:"easeIn",
            repeat: Infinity,
            repeatType:"reverse"
        }
    }
}

const About = () => {
    return (
        <motion.div className="about-container" 
        variants={containerVariant}
        initial="hidden"
        animate="show"
        exit="exit"
        >
            <motion.h1
                variants={arrowVariant}
                initial="first"
                animate="second"
            >
            <Link className="link" to="/">▲</Link>
            </motion.h1>
            <h1>About</h1>
            <div className="about-desc" >
                <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <Titan></Titan>
            </div>
            
            <motion.h1
                variants={arrowVariant}
                initial="first"
                animate="second"
            >
            <Link className="link" to="/newsletter">▼</Link>
            </motion.h1>
        </motion.div>
    )
}

export default About
