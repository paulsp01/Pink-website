import React from 'react'

const Auth = ({Username,Email,Password,ConfirmPassword}) => {
    console.log(Username+""+Email+""+Password+""+ConfirmPassword+"")
  return (
    <div className='h-300 bg-amber-400'>
        <form>
            <label>{Username}</label>
            <input type='text' placeholder='Username'/>
             <label>{Email}</label>
            <input type='email' placeholder='Username'/>
             <label>{Password}</label>
            <input type='password' placeholder='Username'/>
             <label>{ConfirmPassword}</label>
            <input type='password' placeholder='Username'/>
            <button>Submit</button>
        </form>

    </div>
  )
}

export default Auth