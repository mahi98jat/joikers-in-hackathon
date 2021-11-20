import { useState ,useEffect} from 'react';
import styled from 'styled-components'
import { SingleOrder } from './SingleOrder';
import axios from 'axios';

export const Orders = ({result}) => {

    const [data, setData] = useState([])
    
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            let res =
                await axios.get(`https://frozen-retreat-23100.herokuapp.com/product`);
            console.log(res.data.data);
            setData(res.data.data)
        }
        catch (err) {
            console.log(err, "error");
        }
    }

    console.log(result,"result");

    return (
        <AllOrders>
        
            {data.length>0&&data.map((e) => <SingleOrder key={e._id} {...e} />)}
           {/* : result.map((e) => <SingleOrder key={e._id} {...e} />)} */}
        </AllOrders>
    );
}





const AllOrders = styled.div`
  width: 100%;
  min-height: 25rem;
  background-color: rgb(233, 234, 234);
  margin-top: 7rem;
`;