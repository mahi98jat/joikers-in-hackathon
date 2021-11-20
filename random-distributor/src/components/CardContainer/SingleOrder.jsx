import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BsChatRightQuote } from "react-icons/bs";
import { Link } from "react-router-dom";

export const SingleOrder = ({ customer_name, date, destination, house_no, image, mob, pincode, size, source, status, weight,_id }) => {
  const [isStatus,setIsStatus]=useState(status)
  //  useEffect(() => {
   
  //    }
  //  }, [status])
  // const handleStatus = async (_id) => {
    // try {
    //   let res = await axios.patch(`https://frozen-retreat-23100.herokuapp.com/product/${_id}`, {
    //     params: {
    //       status:true
    //     }
    //   })
    // }
    // catch (err) {
    //   console.log(err,"error");
    // }
  // }
   
  const handleStatus = () => {
    setIsStatus(true)
  }

    return (
      <Container>
        <div className="image">
          <img src={image} alt="" />
          {/* <p>product Name :XXXXXX</p> */}
        </div>
        <div className="packageDetails">
          <h3>Courier Details</h3>
          <p>
            Box size : <span>{size}</span>
          </p>
          <p>
            Box Weight :<span>{weight}</span>
          </p>
        </div>
        <div className="deliveryAddress">
          <h3>Deliver Address</h3>
          <p>
            Customer Name :<span> {customer_name}</span>
          </p>
          <p>
            PIncode :<span>{pincode}</span>5
          </p>
          <p>
            Phone :<span>{mob}</span>5
          </p>
          <p>
            Locality :
            <span>
              {destination}, {source}
            </span>
          </p>
          <p>
            House No :<span>{house_no}</span>
          </p>
        </div>
        <div className="confirmation">
          <button
            onClick={() => {
              handleStatus(_id);
            }}
          >
            {!isStatus ? `Confirm delivery` : `Out for delivery`}
          </button>
          <Link //</div>to={`/chat?name=${customer_name}&room=2`}
            onClick={(event) =>
              !customer_name ? event.preventDefault() : null
            }
            to={`/chat?name=${customer_name}&room=jokers`}
            // to="/chat"
            className="links"
          >
            <BsChatRightQuote className="chat" />
          </Link>
          <p className="hide">Chat</p>
        </div>
      </Container>
    );
}


const Container = styled.div`
  width: 80%;
  height: 16rem;
  /* border: 1px solid red; */
  margin-left: 10%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  border: 1px solid #d3cece;
  border-radius: 5px;
  .image {
    margin-left: 2rem;
    /* border: 1px solid red;  */
    height: 16rem;
    width: 14rem;
    margin-right: 1rem;
    /* padding: .5rem .5rem; */

    img {
      margin: 1rem auto 0rem;
      height: 12rem;
      width: 14rem;
      // border: 1px solid red;
    }
  }
  .packageDetails {
    //  border: 1px solid black;
    width: 13rem;
    text-align: left;
    p {
      font-size: 0.9rem;
      color: #606060;
      font-weight: 600;
    }
    span {
      font-size: 0.9rem;
      color: #606060;
      font-weight: normal;
    }
  }
  .deliveryAddress {
    // border: 1px solid black;
    text-align: left;
    width: 13rem;
    p {
      font-size: 0.9rem;
      color: #606060;
      font-weight: 600;
    }
    span {
      font-weight: normal;
    }
  }
  .confirmation {
    align-items: center;
    justify-content: center;
    width: 9rem;
    height: 16rem;
    margin-right: 1rem;
    position: relative;
    // border: 1px solid red;

    button {
      transform: translateY(390%);
      background-color: rgb(84, 4, 194);
      border-radius: 3px;
      width: 8rem;
      height: 1.9rem;
      color: white;
      border: none;
      cursor: pointer;
    }
    .hide {
      display: none;
      background-color: #7c7979;
      color: white;
      font-weight: 600;
      width: 2.5rem;
      height: 1.5rem;
      border-radius: 0.3rem;
      align-items: center;
      justify-content: center;
      padding-left: 10px;
      position: absolute;
      top: 3rem;
      right: -2.2rem;
    }
    .chat {
      color: rgb(84, 4, 194);
      font-size: 2rem;
      margin-left: 6rem;
      cursor: pointer;
    }
    .links {
      &:hover + .hide {
        display: block;
        /* background-color: red; */
        /* color: black; */
      }
    }
  }
`;