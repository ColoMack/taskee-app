'use client';

import '../globals.css'
import Image from 'next/image';
import Container from '../components/Container';
import Logo from '../components/navbar/Logo';

// the functional component..
export default function AuthenticationLayout({
  children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className='bg-white h-screen flex flex-row '>
        <div className='w-6/12'>
          <div className='left-cont-side'>
            <div>
              <div style={{height:"fit-content", width:"fit-content"}}>
                <Container>
                  <div className="logo-cont">
                      <Logo />
                      {/* The logo text */}
                      <span className="logo-text">taksee</span>
                  </div>
                </Container>
              </div>

              <div style={{margin:"3rem 0 0 0", display:"flex", justifyContent:"center"}}>
                {/* This is where the children props should be put... */}

                {/* this is what will be rendered inside the layout..(page.tsx) */}
                  
                  {children}
              </div>
            </div>
          </div>
        </div>

        <div style={{width:"50%", }}>
          <div className='h-screen flex items-center'>
            <div className='template-div'>
              <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <span style={{margin:"2.5rem 0 0 0", fontSize:"250%"}}>Welcome to <span style={{color:"#7AA5D2"}}>taskee.</span></span>
                <span style={{margin:"1.5rem 0 0 0", color:"#839CB6", fontSize:"16px"}}>Simplify your day to day tasks.</span>
                <span style={{margin:"0.5rem 0 0 0", color:"#839CB6", fontSize:"16px"}}>Sign up to get startes and effortlessly manage your tasks, stay organized and boost productivity.</span>
                <div style={{}}>
                  <Container>
                    <Image height={501} width={740} src={"/images/time_management_image.svg"} alt=''/>
                  </Container>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                  <span style={{margin:"1rem 0 0 0", color:"#839CB6", fontSize:"16px"}}>Join thousands of users who love our task management solution.</span>
                  <span style={{margin:"0.2rem 0 0 0", color:"#839CB6", fontSize:"16px"}}>We are excited to have you on board!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
