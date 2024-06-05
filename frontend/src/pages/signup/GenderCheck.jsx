import React from 'react'

const GenderCheck = () => {
    return (
        <div className='flex'>
            <div className="form-control">
                <label className=" gap-2 cursor-pointer label">
                    <span className="label-text">Male</span>
                    <input type="checkbox" defaultChecked className="checkbox " />
                </label>
            </div>
            <div className="form-control">
                <label className=" gap-2 cursor-pointer label">
                    <span className="label-text">Female</span>
                    <input type="checkbox" defaultChecked className="checkbox " />
                </label>
            </div>

        </div >
    )
}

export default GenderCheck

//Stater code
// import React from 'react'

// const GenderCheck = () => {
//     return (
//         <div className='flex'>
//             <div className="form-control">
//                 <label className=" gap-2 cursor-pointer label">
//                     <span className="label-text">Male</span>
//                     <input type="checkbox" defaultChecked className="checkbox " />
//                 </label>
//             </div>
//             <div className="form-control">
//                 <label className=" gap-2 cursor-pointer label">
//                     <span className="label-text">Female</span>
//                     <input type="checkbox" defaultChecked className="checkbox " />
//                 </label>
//             </div>

//         </div >
//     )
// }

// export default GenderCheck
