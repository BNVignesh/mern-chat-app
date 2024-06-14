import React from 'react'

const GenderCheck = ({onCheckboxChange, selectedGender}) => {
    return (
        <div className='flex'>
            <div className="form-control">
                <label className={`gap-2 cursor-pointer label ${selectedGender==='male'? 'selected':""}`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" defaultChecked className="checkbox "
                        checked={selectedGender === 'male'}
                        onChange={() => {
                            onCheckboxChange('male')
                        }}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`gap-2 cursor-pointer label ${selectedGender==='female'? 'selected':""}`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" defaultChecked className="checkbox "
                        checked={selectedGender === 'female'}
                        onChange={() => {
                            onCheckboxChange('female')
                        }}
                    />
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
