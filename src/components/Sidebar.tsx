import React from 'react';
import '../styles/sidebar.scss';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='header'>
        <div className='about'>
          <div className='title'>about me</div>
          <div className='image'></div>
        </div>
        <div className='navbar'>
          <button className='homebtn'>Home</button>
          <button className='projectbtn'>Projects</button>
          <button className='cvbtn'>My CV</button>
        </div>
      </div>
    </div>
  );
};
