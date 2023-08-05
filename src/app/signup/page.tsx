'use client';

import Image from "next/image";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

const AuthForm = () => {

  // this is for disabling buttons and inputs when submiting the form..
  const [isLoading, setIsLoading] = useState(false);
  
  // A react hook form submit function and other functions..
  const{
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues:{
      name: '',
      email:'',
      password:''
    }
  });

  // on submit function..
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    // Axios Register
    
  } 
}


const Signup = () => {
    return (
        <>
          <div>
            <div className="flex flex-col items-center">
                <span style={{fontSize:"200%"}}>Create a New Account</span>
                <span style={{margin:"0.5rem 0 0 0", color:"#839CB6", fontSize:"16px"}}>Sign up now and unlock exclusive access.</span>
            </div>

            <div className='login-details-cont'>
                <div className='name-div'>
                    <span style={{color:"#CBD9E7"}}>Full name</span>
                    <div className='name-cont' style={{}}>
                      <div style={{display:"flex", marginLeft:"1rem",justifyContent:"center", alignItems:"center"}}>
                        <Image src={"/images/personIcon.svg"} height={25} width={25} alt=''/>
                      </div>
                      <div style={{borderRight:"solid 1px #CBD9E7", width:"1px", height:"2.7rem", margin:"0 1rem 0 1rem"}}></div>
                      <div className='input-deets' style={{height:"90%", width:"80%", display:"flex", alignItems:"center"}}>
                        <input style={{height:"100%", width:"100%", border:"none", outline:"none"}} placeholder='Your full name'></input>
                      </div>
                    </div>
                </div>

                <div className='email-div'>
                  <span style={{color:"#CBD9E7"}}>Email</span>
                  <div className='email-cont' style={{}}>
                    <div style={{display:"flex", marginLeft:"1rem",justifyContent:"center", alignItems:"center"}}>
                      <Image src={"/images/emailIcon.svg"} height={25} width={25} alt=''/>
                    </div>
                    <div style={{borderRight:"solid 1px #CBD9E7", width:"1px", height:"2.7rem", margin:"0 1rem 0 1rem"}}></div>
                    <div className='input-deets' style={{height:"90%", width:"80%", display:"flex", alignItems:"center"}}>
                      <input style={{height:"100%", width:"100%", border:"none", outline:"none"}} placeholder='Your Email'></input>
                    </div>
                  </div>
                </div>

                <div className='pass-div'>
                  <div className='email-div'>
                    <span style={{color:"#CBD9E7"}}>Password</span>
                    <div className='email-cont' style={{}}>
                      <div style={{display:"flex", marginLeft:"1rem",justifyContent:"center", alignItems:"center"}}>
                        <Image src={"/images/passwordIcon.svg"} height={25} width={25} alt=''/>
                      </div>
                      <div style={{borderRight:"solid 1px #CBD9E7", width:"1px", height:"2.7rem", margin:"0 1rem 0 1rem"}}></div>
                      <div className='input-deets' style={{height:"90%", width:"80%", display:"flex", alignItems:"center"}}>
                        <input type='password' style={{height:"100%", width:"100%", border:"none", outline:"none"}} placeholder='Your Password'></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display:"flex", justifyContent:"center", height:"3.5rem"}}>
                  <button style={{border:"none", borderRadius:"0.63rem", backgroundColor:"#7AA5D2", color:"white", fontSize:"120%", cursor:"pointer", display:"flex", width:"100%",justifyContent:"center", alignItems:"center"}}>Create an Account</button>
                </div>

                <div className='separator-or-div'>
                  <div className='sp'></div>
                  <div>OR</div>
                  <div className='sp'></div>
                </div>

                <div style={{display:"flex", justifyContent:"center"}}>
                  <div>
                    <span>Already have an Account ? <a href="" style={{color:"#7AA5D2", textDecoration:"none"}}>Log in.</a></span>
                  </div>
                </div>
            </div>
          </div>
        </>
    );
}
 
export default Signup;