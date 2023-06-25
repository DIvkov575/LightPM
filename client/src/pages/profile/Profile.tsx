
import './profile.scss';
import React, {useEffect, useState} from 'react';


// class dynamicList extends React.Component {
//     render() {
//         return (
//             <div id="profile">
//                 <div>
//                     {/* used to display my properties via carousel */}
//                     <h5>asdf</h5>
//                 </div>
//             </div>
//         );
//     }
// }
    //
interface boxProp {
    name: string,
    location: string,
    airbnbLink?: string,
    vrboLink?: string,
    CoverImage?: any,
}
interface SettingOptionProp {
    settingName: string,
    value: string,
}

const a = () => {
    console.log("click");
}
const Box: React.FC<boxProp> = (props) => {
    return (
        <div className={"stdBox"} onClick={a}>
            <h4>{props.name}</h4>
            <h4>{props.location}</h4>
        </div>
    )
}



const SettingOption: React.FC<SettingOptionProp> = (props) => {
    // const hidden: string = '*' * props.value.length;
    const [checkState, setCheckState] = useState(false);

    const toggleState = () => {
        setCheckState((prevState) => !prevState);
    };

    useEffect(() => {
        // Run this code whenever checkState changes
        console.log('checkState updated:', checkState);
    }, [checkState]);

    return (
        <div style={{ display: 'flex' }}>
            <input type="checkbox" checked={checkState} onChange={toggleState} />
            <h3> {props.settingName}:  </h3>
            <div style={{width:"200px", overflow:"hidden", border: "solid"}}><h3>{checkState ? props.value : "****"}</h3></div>

        </div>
    );
};

function Profile() {
    let props: boxProp[] = JSON.parse(sessionStorage.getItem("properties") as string)
    let content = JSON.parse(sessionStorage.getItem("content") as string)
    return (
     <div id="profile">
         {/*{props.length === 0 &&*/}
         {/*}*/}
         <div >
             <h1>Properties</h1>
             {props.length < 3 &&
             <div className={"propertiesWrapper"}>
                 <div className={"stdBox"} id={"newProperty"}>+</div>
                 {props.map((elem) => ( <Box {...elem} /> ))}
             </div>
            }
         </div>

         <div>
             <h1>Notifications</h1>
             <div className={"wrapper"}>
            stuff goes here . . .
             </div>
         </div>

         <div>
             <h1>settings</h1>
             <div>
                 <h2>Linked Accounts</h2>
                 <SettingOption settingName={"Airbnb Email"} value={content.AirbnbEmail}/>
                 <SettingOption settingName={"Airbnb Password"} value={content.AirbnbPass}/>
             </div>
         </div>
    </div>
  );
}

export default Profile;