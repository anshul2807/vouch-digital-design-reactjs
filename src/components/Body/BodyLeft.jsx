import React,{useState} from 'react'
import {notification, Space } from 'antd';
import 'antd/dist/antd.css';
import './BodyLeft.css';

function BodyLeft() {
  const API_END_POINT="https://reqres.in/api/login";
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [check,setCheck]=useState(false);
  const [token,setToken]=useState('');
  const handleAPI = async ()=>{
    const responce = await fetch(API_END_POINT,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        password:password
      })
    });

    return responce.json();
  }
  const openNotificationWithIcon = (type,data) => {
    notification[type]({
      message: data,
    });
  };
  const handleToast=(data)=>{
    if(data.error){
      openNotificationWithIcon('error',data.error);
    }else{
      openNotificationWithIcon('success',"Successfully Login");
    }
  } 
  const handleLogin=(e)=>{
    e.preventDefault();
    handleAPI().then(data=>{
      if(data.token)
      setToken(data.token);
      handleToast(data);
      console.log(data);
    })
    setEmail('');
    setPassword('');
  }
  return (
    <Space>
    <div className='bodyleft'>
      <div className="bodyleft__first">
        <p className='bodyleft__first__top'>Welcome Back</p>
        <p className='bodyleft__first__down'>Sub-title text goes here</p>
      </div>
      <div className="bodyleft__second">
        <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email Address *'/>
      </div>
      <div className="bodyleft__third">
        <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password *' />
      </div>
      <div onClick={handleLogin} className="bodyleft__fourth">
        <a>Login</a>
      </div>
      <div className="bodyleft__fifth">
        <div className="bodyleft__fifth__left">
          <input checked={check} onChange={(e)=>setCheck(!check)} type="checkbox" name="remember"/>
          <label htmlFor='remember'>Remember Password</label>
        </div>
        <div className="bodyleft__fifth__right">
          <a>Forgot Password?</a>
        </div>
      </div>
      
    </div>
    </Space>
  )
}

export default BodyLeft