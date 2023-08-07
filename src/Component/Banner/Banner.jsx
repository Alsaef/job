// eslint-disable-next-line no-unused-vars
import React from 'react';
import banner from '../../assets/images/All Images/P3OLGJ1 copy 1.png'
const Banner = () => {
    return (
        <section className='bg-light'>
           <div className='container d-flex align-items-center'>
           <div>
               <h2>One Step Closer To Your Dream Job</h2>
               <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
               <button className='btn btn-info text-white'>Get Started</button>
            </div>
            <div>
                <img className='img-fluid' src={banner} alt="" />
            </div>
           </div>
        </section>
    );
};

export default Banner;