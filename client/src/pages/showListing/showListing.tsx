import './showListing.scss'
import {useParams} from "react-router";

function ShowListing() {
    const {id} = useParams();
    return (
        <div>
        <h1>{id}</h1>
                    {/*
                    TODO:
                    - images (big + carousel underneath)
                    - link to other various platform profiles + status
                    - reservation calendar
                    - edit listing section
                        - description
                        - tags
                        - features   

                    
                    
                    
                    
                    */}
        </div>


    )
}


export default ShowListing;