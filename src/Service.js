import React from 'react';
import sdata from './sdata';
import Card from "./card";
const Service=()=>{
    return(
        <>
        <div className="my-5">
        <h1 className="text-center"><strong>Our Services</strong></h1>
        </div>
        <div className="container-fluid mb-5">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row gy-4">
        {
          sdata.map((val, ind)=>{
          return <Card
          imgsrc={val.imgsrc}
          title={val.title}
          />
          })
        }
        </div>
        </div>
        </div>
        </div>
        </>);
};
export default Service;