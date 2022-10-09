import React from 'react';
import {images} from "../../constants"

// we can use destructuring in props
// const SubHeading = (props) => (
const SubHeading = ({title}) => (
  <div style={{marginBottom:'1rem'}}>
    {/* <p className='p__cormorant'>{props.title}</p> */}
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
