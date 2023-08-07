/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const JobCatagury = () => {
    const [jobs,setjobs]=useState([])
    useEffect(()=>{
        fetch('job.json')
        .then(res => res.json())
        .then(data => setjobs(data))
    },[])
    return (
       <div className='mt-5'>
        <h2 className='text-center fw-bold'>Job Category List</h2>
         <div className='mt-5 d-flex justify-content-center'>
            {
                jobs.map(data => <DataDisplay key={data.id} data={data}> </DataDisplay>)
            }
        </div>
       </div>
    );
};

function DataDisplay({data}) {
    return (
        <div className='bg-info-subtle ms-3 p-5 rounded'>
         <div className='d-flex justify-content-center'>
         <img src={data.img_url} alt="" />
         </div>
        <div className='pt-2'>
        <h6>{data.job_category}</h6>
         <p>{data.job}</p>
        </div>
        </div>
    )
}
export default JobCatagury;