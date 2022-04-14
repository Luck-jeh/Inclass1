import {FaTimes} from 'react-icons/fa'

import React from 'react'

const  Job = ({job, onDelete}) => {
  return (
    <div className='job'>
        <h3>{job.text}
        <FaTimes style={{color:'red', cursor: 'pointer'}}
         onClick={() => onDelete(job.id)} />
        </h3>
        <p>{job.title}</p>
        <p>{job.company}</p>
        <a className="job-link" href={job.link}><p>Apply</p></a>
    </div>
  )
}

export default  Job