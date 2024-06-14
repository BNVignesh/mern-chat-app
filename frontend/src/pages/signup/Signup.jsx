import React from 'react'
import { useState } from 'react'
import GenderCheck from './GenderCheck'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })
    const { loading, signup } = useSignup();
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
        await signup(inputs);
    }
    const handleGender = (gender) => {
        setInputs(prevState => ({ ...prevState, gender }));
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibokd text-center text-green-300'>sign up <span className='text-blue-500'>Chat App</span></h1>
                <form onSubmit={handlesubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'> Full name</span>
                        </label>
                        <input type="text" placeholder='Enter fullname' className='w-full input input-bordered h-10'
                            value={inputs.fullName} onChange={(e) => { setInputs({ ...inputs, fullName: e.target.value }) }}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'> Username</span>
                        </label>
                        <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'
                            value={inputs.username} onChange={(e) => { setInputs({ ...inputs, username: e.target.value }) }}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'> Password</span>
                        </label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10 m-2'
                            value={inputs.password} onChange={(e) => { setInputs({ ...inputs, password: e.target.value }) }}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'> Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10 m-2'
                            value={inputs.confirmPassword} onChange={(e) => { setInputs({ ...inputs, confirmPassword: e.target.value }) }}
                        />
                    </div>
                    <GenderCheck onCheckboxChange={handleGender} selectedGender={inputs.gender} />
                    <Link to="/login" className='link link-info m-2'>Already have an account?</Link>
                    <button className="btn btn-block btn-sm mt-2" disabled={loading}>{loading ?
                        (<span className='loading loading-spinner'></span>) : ('signup')
                    }</button>
                </form>
            </div>
        </div>
    )
}

export default Signup

// Stater code
// import React from 'react'
// import GenderCheck from './GenderCheck'

// const Signup = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibokd text-center text-green-300'>sign up <span className='text-blue-500'>Chat App</span></h1>
//                 <form action="">
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'> Full name</span>
//                         </label>
//                         <input type="text" placeholder='Enter fullname' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'> Username</span>
//                         </label>
//                         <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'> Password</span>
//                         </label>
//                         <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10 m-2' />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'> Confirm Password</span>
//                         </label>
//                         <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10 m-2' />
//                     </div>
//                     <GenderCheck/>
//                     <a href="#" className='link link-info m-2'>Already have an account?</a>
//                     <button className="btn btn-block btn-sm mt-2">Signup</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup
