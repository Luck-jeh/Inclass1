import PropTypes from 'prop-types'
import Button from './Button'
import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({title, onSearch}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Search' onClick={onSearch}></Button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Clairlist'
}

Header.propTypes = {title: PropTypes.string.isRequired,

}
export default Header