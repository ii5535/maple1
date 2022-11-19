import React, { useState } from 'react';
import {useLocation, Link} from 'react-router-dom';
import '../component_css/Join.css';
import '../component_css/Main.css';
import Header from './Header'

import axios from 'axios';

const Joinpage = () =>{
    const [username,setUsername]=useState('');
    const [userid,setUserid]=useState('');
    const [password,setPassword]=useState('');

    function Join(){
        console.log(username,userid,password);

        //서버에게 post
        axios.post('http://localhost:8000/user/signup/',{
            user_name: (username),
            user_id: (userid),
            password: (password)
        })
        .then((res=>{
            console.log(res);
        }))
    }

    return(
        <div className ='joinpage'>
            <Header></Header>

            <div className='logodiv'>
                <img className='logo' src='./logo.png'></img>
            </div>    

            <img className='titleWrap1' src='./JOIN.png'></img>
            
            <div className="contentWrap1">
                <div className="inputTitle">이름</div>
                <div className="inputWrap">
                    <input 
                    placeholder="김멋사"
                    value={username}
                    onChange={e=> setUsername(e.target.value)}
                    className="input"/>
                </div>

                <div className="inputTitle">아이디</div>
                    <div className="inputWrap">
                        <input 
                        placeholder="likelion"
                        value={userid}
                        onChange={e=> setUserid(e.target.value)}
                        className="input"/>
                    </div>

                <div className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input 
                    type='password'
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                    className="input"/>
                </div>

                <Link to = {'/Login'}>
                    <img onClick={Join} src='./loginBtn.png'></img>
                </Link>
            </div>                

        </div>
    )

}

export default Joinpage;