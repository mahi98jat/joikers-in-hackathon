import axios from "axios";
import { useEffect, useState } from "react"
import styled from "styled-components";

export const Search = ({ search }) => {
    const [data,setData] = useState([]);
    const [places,setplaces]=useState([])
    const debounce = () => {
      let timer_ref;
      return (delay_time, callback) => {
        if (timer_ref) {
          clearTimeout(timer_ref);
        }

        timer_ref = setTimeout(() => {
          callback();
          timer_ref = undefined;
        }, delay_time);
      };
    };

    let returned_function = debounce();

   


    useEffect(() => {
       returned_function(1000, async() => {
           try {
               if (search.trim().length) {
                   let res =
                       await axios.get(`https://frozen-retreat-23100.herokuapp.com/product/search/${search}`);
                   console.log(res.data.data);
                  setData(res.data.data)

               }
           }
           catch (err) {
               console.log(err,"error");
           }
       });
    }, [search])
    console.log("places", data);
    // if (data.length) {
    //     setplaces(...data)
    // }


    return (
      data.length > 0 &&
      data.map((e, i) => <Searching key={e._id}>{e.destination}</Searching>)
    );
}


const Searching = styled.div`
background-color: white;
z-index: 1;
position: absolute;
display: block;
min-height: 10rem;
width: 14rem;
left: 20rem;
top: 4rem;
    P{
        margin-top: 1rem;
    }

`;