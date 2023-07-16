import './showListing.scss'
import {useParams} from "react-router";
import React, {useState} from "react";
// @ts-ignore
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface calendarProp {
    date:Date;
}
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
    const [date, setDate] = useState(new Date());
    const {id} = useParams();
    let listingData = JSON.parse(sessionStorage.getItem("properties") as string)[parseInt(id as string)];
    return (
        <div>
        <h1>{listingData.name}</h1>
        <h1>{listingData.location}</h1>
        {/*<Calendar*/}
        {/*    onChange={setDate}*/}
        {/*    value={date}*/}
        {/*/>*/}
        </div>


    )
}


export default ShowListing;