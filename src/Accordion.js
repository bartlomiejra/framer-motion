import {AnimatePresence, motion} from 'framer-motion'
import React, {useState} from 'react'


const variants = {
open: {opacity: 1, height: 'auto'},
closed: {opacity: 0, height: 0},
}
const Accordion = () => {
	const [ isToggled, setIsToggled ] = useState(false);
	return (
		<article>

		<h2 role="button" onClick={() => setIsToggled(prevState => !prevState)}>
			The Heading </h2>
		<AnimatePresence>
			{isToggled && 
			<motion.div
			variants={variants}
			style={{overflow: 'hidden'}}
			initial="closed"
			animate="open"
			exit="closed"
			>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, voluptatibus? Officiis eius illo similique minus esse, hic totam voluptatem ad dolorum laborum unde sunt magnam? Sapiente molestiae incidunt consequatur ea.
			</p>
			</motion.div>			
			}
		</AnimatePresence>
			</article>
	)
}


export default Accordion;