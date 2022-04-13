import {useState} from 'react'

const SearchJob = ( {onSearch} ) => {
  const [text, setText] = useState('')

const onSubmit = (e) => {
  e.preventDefault()

  if(!text){
    alert('Please Search a job')
    return
  }

  onSearch({text})

  setText('')
} 

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Search Jobs</label>
            <input type='text' placeholder='Search by Keyword'
            value={text} onChange={(e)=> setText(e.target.value)}/>
        </div>
        <input type='submit' value='Search Task' className='btn btn-block'/>
    </form>
  )
}

export default SearchJob