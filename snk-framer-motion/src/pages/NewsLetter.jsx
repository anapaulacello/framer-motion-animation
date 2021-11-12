import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

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
    }
}

const NewsLetter = () => {
    return (
        <motion.div className="newsletter-container"
        variants={containerVariant}
        initial="hidden"
        animate="show"
        >
            <motion.h1
                variants={arrowVariant}
                initial="first"
                animate="second"
            >
            <Link className="link" to="/about">▲</Link>
            </motion.h1>
            <div className="tatakae-container">
                <h1>戦え</h1>
                <h4>TATAKAE</h4>
            </div>
        </motion.div>
    )
}

export default NewsLetter
