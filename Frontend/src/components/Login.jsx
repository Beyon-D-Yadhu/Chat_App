import React from 'react'

function Login() {
  return (
    <>
        <div className='mt-5 w-full h-2/3 bg-slate-100 p-3'>
                        <h1>Login</h1>
                        
                        <label htmlFor="email">email:</label><br />
                        <input type="text" className='mb-3' name="" placeholder='email' id="email" /><br />

                        <label htmlFor="password">password:</label><br />
                        <input type="text" className='mb-3' name="" placeholder='password' id="password" /><br />

                        <div className='w-full flex justify-center'>
                            <button className='bg-green-300 hover:bg-sky-700 rounded px-2 mt-5 py-3'>Log in</button>
                        </div>
        </div>
    </>
  )
}

export default Login