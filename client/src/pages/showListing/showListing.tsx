import './showListing.scss'
import {useParams} from "react-router";
import React from "react";
// @ts-ignore
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface dataProp {
    dataKey: string,
    dataVal: string,
}
const ShowData: React.FC<dataProp> = (props) => {
    return (
        <div>
           <h3></h3>
        </div>
    )

}

function ShowListing() {
    const {id} = useParams();
    let listingData = JSON.parse(sessionStorage.getItem("properties") as string)[parseInt(id as string)];
    return (
        <div>
        <h1>{listingData.name}</h1>
        <h1>{listingData.location}</h1>

        <Calendar />
        </div>


    )
}


export default ShowListing;