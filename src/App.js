import Header from './components/Header';
import Jobs from './components/Jobs';
import {useState} from  'react';
import SearchJob from  './components/SearchJob';
import React from 'react';
import { HeaderTop } from './components/common';

const App = () => {
  const [jobs, setJobs]= useState([])
   /* {
        id: 1,
        text: 'some',
        day: 'text'
    },
    {
        id: 2,
        text: 'other',
        day: 'text'
    },
    ])*/



//Delete Job
  const deleteJob = (id) => {
  //  setJobs(jobs.filter((job) => job.id !== id))
    
console.log("job id:" + id)
}


  return (
    <React.Fragment>
      <HeaderTop />
      <div className="container">
        <Header/>
        {<Jobs jobs={jobs} onDelete={deleteJob}/>}
      </div>
    </React.Fragment>
  )
}

export default App
