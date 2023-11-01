"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import data2 from "@/app/utility/data2";
import "../../styles/productPage.css"
import { Axios } from "axios";
import LiveChart from "../chartPage/LiveChart";
import Home from '../Header/nav'
const Page = () => {
  const hello = useSelector((state) => state.hello);
  const[overview,setoverview]=useState(data2);
  const symbol=hello.hello.ticker;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=ZBLMT9BU1PWKAZHI`)
  //       if (response.data) {
  //         setoverview(response.data);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  
  // },[symbol])
  console.log(overview)
  return (
    <>
    <Home/>
    <div className="about-container">
    
      <div className="company-name">
        <div className="image-div">
          {/* <div>
            <img
              src="https://www.freeiconspng.com/uploads/apple-icon-4.png"
              alt="Apple Icon"
              width={100}
              height={100}
            />
          </div> */}
          <div className="para">
          <h2>{overview.Name}</h2>
            <p>{overview.AssetType}</p>
          </div>
        </div>
        <div className="company-price">
          <h3>${hello.hello.price}</h3>
          <p style={{ color: "green" }}>+{hello.hello.change_amount}%</p>
        </div>
      </div>
      <div  className="flow-char">
        <LiveChart />
      </div>
      <div className="company-about">
        <p>
          {overview.Name}
          {overview.Description}
        </p>
        <button>Industry:{overview.Industry}</button>
        <button>Sector:{overview.Sector}</button>
        <div className="sliderprice"></div>

        <div className="current-price">
          <div className="current-price-div">
            <p >52-Week Low</p>
            <h5>${overview['52WeekLow']}</h5>
          </div>
          <div className="curr current-price-div">
            <p>Current Price:${hello.hello.price}</p>
          </div>
          <div>
            <p>52-Week High</p>
            <h5>${overview['52WeekHigh']}</h5>
          </div>
        </div>
        <div className="company-basic">
        <div className="current-price-div">
            <p>Market Cap</p>
            <h5> ${overview.MarketCapitalization}</h5>
          </div>
          <div className="current-price-div">
            <p>P/E</p>
            <h5>{overview.PERatio}</h5>
          </div>
          <div className="current-price-div">
            <p>Beta</p>
            <h5>{overview.Beta}</h5>
          </div>{" "}
          <div className="current-price-div">
            <p>{overview.DividendYield}</p>
            <h5>0.54%</h5>
          </div>
          <div className="current-price-div">
            <p>Profit Margin</p>
            <h5>{overview.ProfitMargin}</h5>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Page;
