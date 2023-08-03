import Image from 'next/image'
import Navbar from './components/navbar/Navbar'

export default function Home() {
  return (
    // This is where the login page is...

    <>
      <div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <span style={{fontSize:"200%"}}>Welcome Back !</span>
          <span style={{margin:"0.5rem 0 0 0", color:"#839CB6", fontSize:"16px"}}>Log in now and unlock exclusive access.</span>
        </div>

        <div className='login-details-cont'>
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
            <button style={{border:"none", borderRadius:"0.63rem", backgroundColor:"#7AA5D2", color:"white", fontSize:"120%", cursor:"pointer", display:"flex", width:"100%",justifyContent:"center", alignItems:"center"}}>Log in</button>
          </div>

          <div className='separator-or-div'>
            <div className='sp'></div>
            <div>OR</div>
            <div className='sp'></div>
          </div>

          <div style={{display:"flex", justifyContent:"center"}}>
            <div>
              <span>Create a new Account ? <a style={{color:"#7AA5D2"}}>Sign up.</a></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
