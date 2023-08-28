import React from 'react';

import './About.css';
import Button from '../MiniComponents/Button';

import perfil from '../../assets/perfil.jpg';
import curriculo from '../../assets/curriculo.png';

const About = () => {
	return (
		<div className="about">
			<img
				src={perfil}
				alt=""
			/>
			<div className="about__text">
				<h1>About me</h1>
				<p>
					In love with technology, I’ve been studying and practcing{' '}
					<span>React, NodeJs, MySql</span> and <span>Javascript</span> for 4
					years, what have made me a professional in the area, and a qualified{' '}
					<span>Fullstack Developer</span>
					<span style={{ fontFamily: 'Archivo Black', color: 'black' }}>.</span>
				</p>
				<a href={curriculo} download='curriculo'><Button
					content="DOWNLOAD CV"
					color="#0063D8"
				/></a>
			</div>
		</div>
	);
};

export default About;