import React, { useState, useEffect } from 'react'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import { images } from '../../constants'

import './About.scss';

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const frameworks = [
  { title: 'React', value: 4, imgUrl: images.reactLogo},
  { title: 'Angular', value: 4.5, imgUrl: images.angularLogo},
  { title: 'VueJs', value: 4, imgUrl: images.vueLogo},
  { title: 'Spring Boot', value: 4, imgUrl: images.springLogo},
];

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const About = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <>
      <h2 className='head-text'>
      Ambitious, with a strong sense of initiative and the ability to work <span>independently</span> & <span>Cooperatively</span>.
      </h2>
      <br/>
      <h1 className='head__section-text'>
        Frameworks :
      </h1>

      <div className='app__framworks'>
        {frameworks.map((framework, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__frameworks-item'
            key={framework.title + index}
          >
            <img src={framework.imgUrl} alt={framework.title} />
            <h2 className='bold_text' style={{marginTop: 20}}>{framework.title}</h2>
            <Rating name="read-only" value={framework.value}  precision={0.5} readOnly />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About