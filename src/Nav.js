import React from 'react'
import styled from 'styled-components'

export const Nav = () => {
	return (
		<MenuNav>
			<ul>
				<li><a href="#">One</a></li>
				<li><a href="#">Two</a></li>
				<li><a href="#">Three</a></li>
				<li><a href="#">Four</a></li>
			</ul>
		</MenuNav>
	)
}


const MenuNav = styled.nav `
position: fixed;
top: 0;
left: 0;
width: 100vw;

ul{
	lost-style: none;
padding: 0;
margin: 0;
}
li{
	padding: 0;
	margin: 0; 
}


`;
export default Nav