import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'
const Modal = ({isToggle, setToggle, children
}) => {
	return (
		<AnimatePresence>
			{isToggle && 
			<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}>
			<motion.div
			initial={{y: 50}}
			animate={{y: 0}}
			exit={{y: 30}}
			style={{
				position: "fixed",
				bottom: "5px",
				right: "50%",
				transform: "translate3d(-90%, 0.0)"
			}}
			>
				<button onClick={() => setToggle(false)}>Close</button>
				{children}
			</motion.div>
			</motion.div>			
			}
		</AnimatePresence>
	)
}


export default Modal;