'use client';

import AuthForm from './components/AuthForm';


export default function Home() {
  return (
    // This is where the login page is...

    <>
      <div style={{display:"flex", flexDirection:"column", width:"70%"}}>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginBottom:"1.5rem"}}>
          <span style={{fontSize:"2.5rem"}}>Welcome Back !</span>
          <span style={{color:"#839CB6", fontSize:"16px"}}>Log in now and unlock exclusive access.</span>
        </div>
        <AuthForm />
      </div>
    </>
  )
}
