import React from 'react';
import './Job.css';

const  Job = ({job, onDelete}) => {
  return (
    <div className='job'>
        <h3 className='title' style={{fontWeight:'bold'}}>{job.text}
        </h3>
        <p>{job.title}</p>
        <p>{job.company}</p>
        <a className="job-link" href={job.link}><p>Apply</p></a>
    </div>
  )
}

export default  Job