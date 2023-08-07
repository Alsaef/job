/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Feturejob.css'
import { Link } from 'react-router-dom';
const FetureJob = () => {
    const [jobs,setjobs]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setjobs(data))
    },[])
    return (
        <div className='mt-4'> 
        <h2 className='text-center mb-4 fw-bold'>Featured Jobs</h2>
            <div className='row row-cols-1 row-cols-md-2 g-4 mx-auto'>
           {
            jobs.map(job => <Job key={job.id} job={job}></Job>)
           }
        </div>
        </div>
    );
};

function Job({job}){
    return (
        <div className='col'>
        <div className="card p-3" >
  <img src={job.img_url} className="card-img" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{job.company}</h5>
    <p className="card-text">Job Category: {job.job_category}</p>
    <p className="card-text"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {job.location}</p>
    <p>Salary: {job.salary}</p>

    <button className="btn btn-primary"><Link className='text-white'>View Details</Link></button>
  </div>
</div>
        </div>
    )
}
export default FetureJob;