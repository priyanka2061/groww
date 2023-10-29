"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from "axios";
import "../../styles/explore.css"
import data from "../../utility/data";
import data2 from "../../utility/data2"
import { useDispatch } from "react-redux";
import { update } from "../../redux/slice/sliceTicker"

const Top = () => {
  // const [topGainers, setTopGainers] = useState([]);
  // const [topLosers, setTopLosers] = useState([]);
  const [page, setPage] = useState(20);
  const [render, rendertoggle] = useState(true);
  // const [company, setCompany] = useState({});

  const topGainers = data.top_gainers;
  const topLosers = data.top_losers;
  const company = data2;
  // const fetchData = async (pagenumber) => {
  //   try {
  //     const response = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=ZBLMT9BU1PWKAZHI&page=${pagenumber}`);
  //     const { top_gainers, top_losers } = response.data;
  //     if (Array.isArray(top_gainers) && Array.isArray(top_losers)) {
  //       setTopGainers(prevData => [...prevData, ...top_gainers]);
  //       setTopLosers(prevData => [...prevData, ...top_losers]);
  //     } else {
  //       console.error('Invalid response format');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // const fetchOverview = async (tricker) => {
  //   try {
  //     const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${tricker}&apikey=ZBLMT9BU1PWKAZHI`);
  //     setCompany(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(page);
  // }, [page]);

  // useEffect(() => {
  //   if (render) {
  //     topGainers.forEach((item) => {
  //       fetchOverview(item.ticker);
  //     });
  //   } else {
  //     topLosers.forEach((item) => {
  //       fetchOverview(item.ticker);
  //     });
  //   }
  // }, [render, topGainers, topLosers]);

  const dispatch = useDispatch();
  const router=useRouter();
 
  return (
    <div className="container">
     <div className="sub-container">
      
     <div className="button-container">
        <button onClick={() => rendertoggle(true)}>Top Gainers</button>
        <button onClick={() => rendertoggle(false)}>Top Losers</button>
      </div>
      <div className="grid-container">
    {(render ? topGainers : topLosers).map((item, index) => (
     <Link href="/pages/product"  key={index}>
      <div className="grid-items"
       onClick={() => dispatch(update(item))}
        >
        <p>{company.Name}</p>
        <p className="itemPrice">${item.price}</p>
        <p className="change_amount" style={{color:"green"}}>{item.change_amount}%</p>
      </div>
    </Link>
  ))}
</div>
     </div>
    </div>
  );
};

export default Top;
