import React, { useEffect, useState } from 'react';
import {useLocation, Link} from 'react-router-dom';
import '../component_css/Login.css';
import '../component_css/Join.css';
import Header from './Header'

import axios from 'axios';

// $.ajaxSetup({
// headers: { "X-CSRFToken": '{{csrf_token}}' }
// });

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";

const User = {
    email: '김멋사@example.com',
    pw: 'test1234!!!!'
}

const Loginpage =() =>{

 // const [매개변수, 함수이름] 초기값은 string형
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    //이메일 정규식을 판단하는 또 다른 state를 만든다 그 초기값은 boolean형이다.
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);


    //버튼 상태를 판단할 state
    const [notAllow, setNotAllow] = useState(true);

    //이벤트를 받는 사용자 정의 함수를 만들자
    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        //regex부모를 가진 test객체 즉 받은 값으로 test해봤을때 들어온다면
        if(regex.test(email)){
            //"setEmailVaild"함수를 참으로 만든다.
            setEmailValid(true)
        }else{
            setEmailValid(false);
        }
    }

    const handlePassword=(e) => {
        setPw(e.target.value);
        const regex = 
        /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
        if(regex.test(pw)){
            setPwValid(true);
        }else{
            setPwValid(false);
        }
    }


    const onClickConfirmButton = () => {
        if(email === User.email && pw === User.pw ){
            alert('로그인 되었습니다.');
        }else{
            alert('등록되지 않은 회원입니다.');
        }
    }


    //두 state의 값(value가)이 변할 때 마다 함수를 실행해라
    useEffect(() => {
        //기본 초기화 값을 false로 해놨기 때문에 들어오면 true면,
        if(emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid]);


    const [isLogin,setLogin] = useState('');

    //server
    function login(){

        // axios.post('http://localhost:8000/user/api-auth/login/',{
        //     user_id:(id),
        //     password:(pw),
            
        // })
        // .then((res)=>{
        //     console.log(res);
        //     setLogin(res.data.data);
        //     console.log(isLogin);
            
        // })
    }
    


    return(
        <div className ="Loginpage">
            <Header></Header>

            <div className='logodiv'>
                <img className='logo' src='./logo.png'></img>
            </div>

            <img className='titleWrap1' src='./LOGIN.png'></img>

            <div className="contentWrap1">  
            
                <div className="inputTitle">아이디</div>
                    <div className="inputWrap">
                        <input 
                        placeholder="likelion"
                        value={id}
                        onChange={e=> setId(e.target.value)}
                        className="input"/>
                    </div>

                <div className="inputTitle">비밀번호</div>

                <div className="inputWrap">
                    <input 
                    type='password'
                    // value={password}
                    onChange={handlePassword}
                    // onChange={e=> setPassword(e.target.value)}
                    className="input"/>    
                </div>

                {/* <div className="errorMessageWrap">
                            {!pwValid && pw.length > 0 && (
                                    <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                                )
                            }
                </div> */}                

                <Link to = '/Create' state={{
                    isLogin:(isLogin)
                }}>
                    <img onClick={login} src='./btn_log.png'></img>
                </Link>
            </div> 



            {/* <body className = "body">
                <div className="Loginbox">
                    <div className="titleWrap">
                    Login    
                    </div>

                    <div className="contentWrap">
                        <div className="inputTitle">아이디</div>
                        <div className="inputWrap1">
                            <input 
                        
                                type = 'text'
                                className="input"
                                placeholder="김멋사@gmail.com"
                                value={email}
                                onChange={handleEmail}
                               
                                />
                        </div>

                        <div className="errorMessageWrap">
                            {
                                !emailValid && email.length > 0 &&(
                                <div>올바른 이메일 형식의 아이디를 입력해주세요.</div>
                                )
                            }
                        </div>

                        <div style={{marginTop: "30px"}}className="inputTitle">비밀번호</div>
                        <div className="inputWrap">
                            <input 
                                type='password'
                                className="input"
                                placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                                value={pw}
                                onChange={handlePassword}
                            />
                        </div>

                        <div className="errorMessageWrap">
                            {!pwValid && pw.length > 0 && (
                                    <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                                )
                            }
                        </div>
                    </div>

                    <div className='bottomButtonWrap'>
                        <button 
                        onClick={onClickConfirmButton}
                        disabled={notAllow}
                        className="bottomButton">
                            로그인
                        </button>
                    </div>

                </div>
            </body> */}


            {/* <div className = "imgbox">
                <img className = "Loginpagebg"
                src="./BG_login.png" alt="로그인 배경">
                </img>
            </div> */}
        </div>
    );

}

export default Loginpage;