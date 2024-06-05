import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibokd text-center text-green-300'>Login <span className='text-blue-500'>Chat App</span></h1>
        <form action="">
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'> Username</span>
                </label>
                <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
            </div>
            <div>
            <label className='label p-2'>
                    <span className='text-base label-text'> Password</span>
                </label>
                <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10 m-2'/>
            </div>
            <a href="#" className='link link-info m-2'>Don't have an account?</a>
            <button className="btn btn-block btn-sm mt-2">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

//STATER CODE
// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibokd text-center text-green-300'>Login <span className='text-blue-500'>Chat App</span></h1>
//         <form action="">
//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text'> Username</span>
//                 </label>
//                 <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
//             </div>
//             <div>
//             <label className='label p-2'>
//                     <span className='text-base label-text'> Password</span>
//                 </label>
//                 <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10 m-2'/>
//             </div>
//             <a href="#" className='link link-info m-2'>Don't have an account?</a>
//             <button className="btn btn-block btn-sm mt-2">block</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login