import { useRef } from "react"
import { motion, useInView } from "framer-motion"

function Animate(props){
    const ref = useRef(null);
    const isInView = useInView(ref);

    const variants = {
        visible : {opacity: 1, rotate: 0, origin: 10, y: 0},
        hidden : {opacity: 0, rotate: 3, origin: 10, y: 50}
    }
    return(
        <motion.div
            className={props.className}
            ref={ref}
            variants={variants}
            animate={isInView ? "visible" : "hidden"}
            initial="hidden"
            transition={{ ease: [0, 0.55, 0.45, 1], delay: props.delay ||0, duration: 0.4}}
        >
            {props.children}
        </motion.div>
    );
}

export default Animate;
