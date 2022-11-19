import {useLocation, Link} from 'react-router-dom';
import React,{useState, useCallback, useRef, useEffect} from 'react';
import Header from './Header'
import axios from 'axios';
import '../component_css/Write.css';
import '../component_css/Main.css';


function Write(){
    const user_name=useLocation().state.user_name;
    const genre=useLocation().state.genre;
    const key_word1=useLocation().state.key_word1;
    const key_word2=useLocation().state.key_word2;
    const key_word3=useLocation().state.key_word3;

    const [nickname,setNickname]=useState('');
    const [contents,setContents]=useState('');

    // console.log(contents);

    function postContents(e){
        console.log(contents,nickname);

        // 서버에게 post
        axios.post(`http://localhost:8000/bookdetail/`,{
            book_name: '8',
            nickname: (nickname),
            bookcontents: (contents),
        })
        .then((res)=>{
            console.log(res);
        })
    }

    return(
        <div className='hole2'>
            <Header></Header>

            <div className='logodiv'>
                <img className='logo' src='./logo.png'></img>
            </div> 

            <div className='componentDiv'>
                <div className='holemenuDiv'>
                        <div className='menuDiv'>
                            <div className='menu'>
                                주인공 
                            </div>
                            <div className='bar'>
                                |
                            </div>
                            <div className='dataname'>
                                {user_name}
                            </div>
                        
                            <div className='menu'>
                                장르
                            </div>
                            <div className='bar'>
                                |
                            </div>
                            <div className='data'>
                                {genre}
                            </div>
                        </div>
                    
                        <div className='menuDiv'>
                            <div className='keyword'>#{key_word1}</div>
                            <div className='keyword'>#{key_word2}</div>
                            <div className='keyword'>#{key_word3}</div>
                            {/* {Data[0].keyword.map(i=>(
                                <div className='keyword'>#{i}</div>
                            ))} */}
                        </div>
                </div>

                <div className='writeDiv'>
                    <div className='writerDiv'>
                        <div className='writer'>
                            글쓴이
                        </div>
                        <div className='writer'>
                            |
                        </div>
                        <input 
                        type='text' 
                        value={nickname}
                        onChange={e=> setNickname(e.target.value)}
                        className='inputWriter'></input>        
                    </div>

                    <div className='inputTextDiv'>
                        <textarea cols="10" rows="2" placeholder="내용을 입력해주세요."
                        value={contents}
                        onChange={e=> setContents(e.target.value)}
                        className='inputText'></textarea>                  

                    </div>

                    <div className='postBtn'>
                        <Link to={"/Main"}>
                            <img onClick={postContents} src='./doneBtn.png'></img>
                        </Link>
                    </div>                   
                    

                </div>

            </div>
        </div>
    )
}

export default Write;