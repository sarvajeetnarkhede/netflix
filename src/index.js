import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';
import Sdata from './Sdata';
ReactDOM.render(
  <>
  <h1 className="heading_style">Top 5 Netflix Series in 2020</h1>
  {Sdata.map((val)=>{
    return(
   <Card
    key={val.id}
    imgsrc= {val.imgsrc}
    title= {val.title}
    sname={val.sname}
    link= {val.link}
  />
    );
  }
  )}
  </>,
  document.getElementById('root')
);