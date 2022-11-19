import {useLocation, Link} from 'react-router-dom';
import React, { useRef } from "react";
import axios from 'axios';
import Header from './Header'
import '../component_css/Main.css';
import '../component_css/Create.css'
import { useEffect, useState } from 'react';

function Create(){
    const [name,setName]=useState('');
    const [title,setTitle]=useState('');
    const [genre,setGenre]=useState('');
    const [key1,setKey1]=useState('');
    const [key2,setKey2]=useState('');
    const [key3,setKey3]=useState('');

    function postContents(e){
        console.log(title,genre,key1,key2,key3);

        // 서버에게 post
        axios.post(`http://localhost:8000/booklist/`,{
            user_name: (name),
            book_name: (title),
            genre: (genre),
            key_word1: (key1),
            key_word2: (key2),
            key_word3: (key3),
        })
        .then((res)=>{
            console.log(res);
        })
    }


    return(
        <div className='hole3'>
            <Header></Header>

            <div className='logodiv'>
                <img className='logo' src='./logo.png'></img>
            </div>  

            <div className='componentDiv'>
                <div className='createbookDiv'>
                    <div className='createDiv'>

                        <div className='createtitle'>
                            | 이름
                        </div>
                        <div>
                            <input 
                            type='text'
                            value={name}
                            onChange={e=> setName(e.target.value)}
                            className='createinput'></input>
                        </div>

                        <div className='createtitle'>
                            | 제목
                        </div>
                        <div>
                            <input 
                            type='text'
                            value={title}
                            onChange={e=> setTitle(e.target.value)}
                            className='createinput'></input>
                        </div>

                        <div className='createtitle'>
                            | 장르
                        </div>
                        <div>
                            <input 
                            type='text'
                            value={genre}
                            onChange={e=> setGenre(e.target.value)}
                            className='createinput'></input>
                        </div>

                        <div className='createtitle'>
                            | 키워드
                        </div>
                        <div>
                            <input 
                            type='text'
                            value={key1}
                            onChange={e=> setKey1(e.target.value)}
                            className='inputkey'></input>

                            <input 
                            type='text'
                            value={key2}
                            onChange={e=> setKey2(e.target.value)}
                            className='inputkey'></input>

                            <input 
                            type='text'
                            value={key3}
                            onChange={e=> setKey3(e.target.value)}
                            className='inputkey'></input>
                        </div>
                        
                        <Link to={"/Main"}>
                            <img onClick={postContents} className='createbtn' src='./btn_post.png'></img>
                        </Link>

                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Create;