import Header from './components/Header'
import Jobs from './components/Jobs'
import {useState} from  'react'
import SearchJob from  './components/SearchJob'

const App = () => {
 const [showSearchJob, setShowSearchJob] = useState
  (false)
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

//Search Job
const searchJob = (text) => {
  setJobs(jobs.filter((job) => job.text === text))
}

//Delete Job
  const deleteJob = (id) => {
  //  setJobs(jobs.filter((job) => job.id !== id))
    
console.log("job id:" + id)
}


  return (
    <div className="container">
      <Header onSearch={() => setShowSearchJob}/>
      {showSearchJob && <SearchJob onSearch={searchJob}/>}
      {<Jobs jobs={jobs} onDelete={deleteJob}/>}
    </div>
  )
}

export default App
