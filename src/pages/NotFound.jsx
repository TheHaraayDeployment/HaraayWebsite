// NotFound.js
import React from 'react';
import Icons from '../components/Icons';
const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Icons.Instagram  title="Home" />
      <Icons.Facebook  title="Home" />
      <Icons.Linkedin  title="Home" />
      <Icons.InstagramSquare  title="Home" /> 
      <Icons.FaLocationDot  title="Home" /> 
      <Icons.BsArrowRight  title="Home" />  
      <Icons.TbMailFilled  title="Home" />  
      <Icons.BsArrowRightCircleFill  title="Home" />  
    </div>
  );
};

export default NotFound;
