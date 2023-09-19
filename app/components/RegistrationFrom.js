"use client"
import React, { useState } from 'react'

const RegistrationFrom = () => {
    const initialFormData = {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [submittedData, setSubmittedData] = useState([]);
    const [formError, setFormError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).some((field) => field === '')) {
           setFormError('Plase Fill in all fields...');

           setFormData({
            firstName:'',
            lastName:'',
            email:'',
            password:'',
           });

           setTimeout(() => {
            setFormError(null);
           }, 2000);
           return; 
        }
        
        setFormError(null);

        setSubmittedData([...submittedData, formData]);

        setFormData({
            firstName:'',
            lastName:'',
            email:'',
            password:'',
        });
    };


  return (
    <div className='m-8'>
        <h2 className='py-2 text-center text-5xl mb-5 font-bold'>Registration From</h2>
        {formError && <div className="text-red-500 text-xl border-2 border-red-500 rounded text-center ml-96 font-bold mr-96 py-3 mb-5">{formError}</div>}
        <form onSubmit={handleSubmit}  className='flex flex-col items-center'>
            <div>
                <label className='text-2xl'>FirstName</label>
                <input
                type="text"
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                className='w-80 mt-1 mb-3 placeholder:text-slate-400 block  text-black border rounded py-2 px-3 ' placeholder="Enter Your FirstName"
                 />
            </div>
            <div>
                <label  className='text-2xl'>LastName</label>
                <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                className='w-80 mt-1 mb-3 placeholder:text-slate-400 block  text-black border rounded py-2 px-3' placeholder="Enter Your LastName"
                />
            </div>
            <div>
                <label  className='text-2xl'>Email</label>
                <input 
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-80 mt-1 mb-3 placeholder:text-slate-400 block  text-black border rounded py-2 px-3' placeholder="Enter Your Email"
                />
            </div>
            <div>
                <label  className='text-2xl'>Password</label>
                <input 
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='w-80 mt-1 mb-3 placeholder:text-slate-400 block  text-black border rounded py-2 px-3' placeholder="Enter Your Passwords"
                />
            </div>
            <button type='submit' className='w-96 bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 rounded text-xl mt-5'>
                Submit
            </button>
        </form>

        {submittedData.length > 0 && (
            <div>
                <h2 className='text-2xl m-10 text-center text-green-500 font-bold'>Submitted Data</h2>
                {submittedData.map((data, index) => (
                    <div key={index} className='border-2 m-10 ml-60 mr-96 relative -right-20 p-10 text-base border-blue-500 rounded bg-stone-700 text-zinc-100 cursor-pointer'>
                        <p>Person : {index +1}</p>
                        <p>First Name: {data.firstName}</p>
                        <p>Last Name: {data.lastName}</p>
                        <p>Email: {data.email}</p>
                        <p>Password: {data.password}</p>
                        <br />
                        <hr />
                    </div>
                ))}
            </div>
        )}
    </div>
  );
};

export default RegistrationFrom