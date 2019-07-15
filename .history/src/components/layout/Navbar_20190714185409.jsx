import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Navbar = ({style1,title}) =>  {
    
   
    
        return (
            <nav className='navbar bg-primary'>
                <h1 className="text-capitalize">
                    <i  className={style1} style={{ margin: "0 1em"}}></i>
                    {title}
                   
                </h1>
            </nav>
        )
    
}


 Navbar.defaultProps = {
        title: 'Github Finder',
        style1: 'fab fa-github'
    };

    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        style1: PropTypes.string.isRequired
    }
export default Navbar
