import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Job from './Job';
export default function Jobs() {
    const [APIData, setAPIData] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [setAPIData])

    const searchData = (value) => {
        setSearchTerm(value)
        if (searchTerm !== '') {
            const filteredData = APIData.filter((job) => {
                return (Object.values(job).join('').toLocaleLowerCase().includes(searchTerm.toLowerCase()))
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(APIData)
        }
    }

    return (
        <React.Fragment>
                <div className='form-control'>
                    <label>Search Jobs</label>
                    <input type='text' placeholder='Search by Keyword'
                         onChange={(e) => searchData(e.target.value)} />
                </div>
            
                {searchTerm.length > 1 ? (filteredResults.map((job) => {
                    return (<Job key={job.id}
                        job={job}/>
                    )
                })) : (APIData.map((job) => (<Job key={job.id}
                    job={job}/>
                )))}
            </React.Fragment>
        )
}
//onSubmit={searchData}
//<input type='submit' value='Search Jobs' className='btn btn-block' />