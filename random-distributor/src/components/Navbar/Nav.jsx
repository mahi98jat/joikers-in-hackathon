import React, { useState } from 'react'
import styles from './nav.module.css'
import akLogo from './Images/akLogo.png'
import { Search } from '../Search/Search';
import axios from 'axios';
const Nav = ({ setResult}) => {
  const [search, setSearch] = useState("");


  const handleSearch = async () => {
    try {
      if (search.trim().length) {
        let res = await axios.get(
          `https://frozen-retreat-23100.herokuapp.com/product/search/${search}`
        );
        // console.log(res.data.data);
        setResult(res.data.data);
      }
    } catch (err) {
      console.log(err, "error");
    }

  }
  return (
    <>
      <div className={styles.navbar}>
        <div>
          <img src={akLogo} alt="logo" />
        </div>
        <div>
          {/* <div> */}
          <input
            type="text"
            placeholder="Enter City"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
          {/* </div> */}
          {/* <Search search={search}/>         */}
        </div>
      </div>
    </>
  );
}

export default Nav
