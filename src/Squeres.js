import React, { useState } from 'react'
import {motion} from 'framer-motion';
import { shuffle } from 'lodash'

const COLORS = [
	"var(--red)",
	"var(--green)",
	"var(--black)",
	"var(--blue)",
	"var(--purp)",




]
const Squeres = () => {
	const [colorsList, setColorsList]   = useState(COLORS)
	 
	return (
		<div>
			<button
			onClick={()=> setColorsList(shuffle(colorsList))}
			>Shuffle</button>
			{colorsList.map(color => (
<motion.div
 key={color}
 positionTransition
 ={{
	damping: 50,
stiffness: 10 
}}

 style={{
background: color,
height: 100,
width: 100


	
}}
/>
))}
		</div>
	)
}
export default Squeres;