import React from 'react'
import styles from './nav.module.css'
import akLogo from './Images/akLogo.png'

const Nav = () => {
    return (
        
        <div className={styles.navbar}>
            <div>
                <img src={akLogo} alt="logo" />
            </div>
            <div>
                <input type="text" placeholder="Enter City" />
                <button>Search</button>
            </div>
        </div>
        
    )
}

export default Nav
