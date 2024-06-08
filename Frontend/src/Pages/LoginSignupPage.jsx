import React, { useEffect, useState } from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

function LoginSignupPage() {
    const [login, setLogin] = useState(true)

    return (
        <> 
            <div className='h-dvh w-full bg-zinc-400 flex items-center justify-center'>
                <div className='w-5/12 h-3/4 bg-cyan-300 rounded'>
                    <div className='w-full flex justify-around mt-10'>
                        <button className='bg-sky-500 hover:bg-sky-700 rounded px-2 py-3' onClick={()=>{setLogin(true)}}>Log in</button>
                       <button className='bg-sky-500 hover:bg-sky-700  rounded px-2 py-3' onClick={()=>{setLogin(false)}}>Sign up</button>
                    </div>
                {!login?(
                    <SignUp />
                ):(
                    <Login />
                )}

                </div>
            </div>
        </>
    )
}

export default LoginSignupPage