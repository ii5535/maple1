import React from 'react';
import '../component_css/Startpage.css';
import {useLocation, Link} from 'react-router-dom';
import Header from './Header'


const Startpage =() =>{
  return(
    <div className="startpage">
        <Header></Header>
        <div className="Titlebox">
          <div className="TitleIcon">
          </div>
          <div className="Title">
          </div>
        </div>

        <div className='textbox'>
          <p>평범한 멋사인이던 내가</p>
          <p>릴레이테일에서 소설 속 주인공?!</p>
        </div>
        
        <div className='movebooks'>
          <Link to="Login">
           <div className='Loginbook1'></div>4
          </Link>

          <Link to="Join">
            <div className='Joinbook'></div>
          </Link>
        </div>
    </div>
  );
}


export default Startpage;