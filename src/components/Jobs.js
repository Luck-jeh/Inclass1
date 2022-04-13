import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Job from './Job';
export default function Jobs({onDelete}) {
    const [APIData, setAPIData] = useState([])
    //const [searchTerm, setSearchTerm] = useState('');
    //const [filteredResults, setFilteredResults] = useState([]);
    useEffect(() => {
        axios.get(`https://mycapapijs.herokuapp.com/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    /*
        const searchData = (value) => {
            setSearchTerm(value)
            if (searchTerm !== '') {
                const filteredData = APIData.filter((item) => {
                    return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase())
                })
                setFilteredResults(filteredData)
            }
            else {
                setFilteredResults(APIData)
            }
        }
    */
    return (
        <React.Fragment>{
        APIData.map((job) =>  
        (<Job key={job.id} job={job} onDelete={onDelete}/>
        ))
    }</React.Fragment>)}

/*

import Job from './Job'
const Jobs = ({jobs, onDelete}) => {
  return (
    <>
    {jobs.map((job)=>
    (<Job key={job.id} job={job}
    onDelete={onDelete}/>
    ))}
    </>
  )
}
*/
//export default Jobs

