"use client"
import React, { useRef,useState } from 'react';
 import "../../styles/explore.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import data from "../../utility/data3"
import Link from 'next/link';

import {useDispatch,useSelector} from 'react-redux';
const Home = () => {
  const hello = useSelector((state) => state.hello);
  // console.log(hello)

  const inputRef=useRef();
  const inputRef1=useRef();
  const [searchItem,setSearchItem]=useState(false);
  const [searchValue, setSearchValue] = useState("");
  //  window.addEventListener('click',(e)=>{
  //   if(e.target !== inputRef.current && e.target !==inputRef1.current ){
  //       setSearchItem(false);
  //   }
  //  })
    // Filter the data based on the search input
    console.log("search"+searchValue)
  const filteredData = data.filter((item) =>
  item.name.toLowerCase().includes(searchValue.toLowerCase())
);
  // const [data,setData]=useState([]);
  // const getTickers=(searchitem)=>{
  //    axios.get('/hello/data3')
  //   .then((res)=>{
  //     setData(res.data);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }
  // console.log(data)
  return (
    <div className='main-container'>
    <div className="input-container">
      <div className='inside-container' style={{display:"flex"}}>
      <p>GrowwStonks</p>
     
     </div>
     <div style={{display:"block",height:"50px"}} >
      <input 
      ref={inputRef1}
      type="text" 
      placeholder="Search..." 
      onChange={(e) => setSearchValue(e.target.value)}
       onClick={()=>setSearchItem(true)}
      //  value={searchItem}
       name={searchItem}/>
       {
        !searchItem ?   <FontAwesomeIcon icon={faSearch} className="search-icon" /> : ""
       }
      
      {searchItem ?
      <div ref={inputRef} className='search-div' style={{ width: window.innerWidth <= 600 ? '11rem' : '20rem',position:'absolute',marginLeft:'4rem',zIndex:'2',marginTop:'5px',boxShadow:"1px 1px 10px 3px #fe52ad"}}>
      {filteredData.map((item ,index)=>
      <Link href="/pages/Tickers" key={index}>
      <div style={{color:"#be8fdb",fontSize:window.innerWidth <= 600 ? '14px' : '20px',background:"#0d0208",paddingLeft:'1rem',cursor:"pointer"}} onClick={()=>setSearchItem(!searchItem)}>{item.name}</div>
      </Link>
      )}
    </div>
    :
    " "
    }
      
    </div>
    </div>
 {/* <div style={{ position: 'relative', zIndex: '-1' }}> */}

 {/* </div> */}
    </div>
  );
};

export default Home;

