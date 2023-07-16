import logo from './logo.svg';
import './home.scss';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div id="home">
        <div id={"welcome-block"}>
            <Navbar />
            <div style={{marginTop: "75px", paddingBottom: "100px"}}>
                <h1 className={"heading-1"}>Find peace of Mind</h1>
                <h1 className={"heading-2"}>lightPMS</h1>
                <div style={{marginTop: "25px"}} className={"just-for-centering"}>
                    <button style={{width:"200px", height:"50px" }} className={"b1"} >Get Started</button>
                </div>
            </div>
        </div>
        <div id={"d2"}>
            <h1 style={{color: "black", marginTop: "50px"}} className={"heading-1"}>Manage short-term rentals</h1>
            <h2>Synchronize Reservations across all platforms</h2>
            <h2>Aggregate Notifications from all platforms</h2>
            <h2>Easily import listings</h2>
            <div style={{ position: "relative", display: "flex", justifyContent: "center", marginTop: "25px"}}>
                <h2 style={{margin: "0px", marginTop: "10px"}}><u>Compatible With</u></h2>
                <div style={{position:"absolute",top:"10px", display: "flex", justifyContent:"center", alignItems: "center"}}>
                    <img style={{height:"45px"}} src={process.env.PUBLIC_URL + '/airbnb.png'} alt="Airbnb Icon"/>
                    <img style={{height:"100px"}} src={process.env.PUBLIC_URL + '/vrbo.webp'} alt="Vrbo Icon"/>
                </div>
            </div>
        </div>
        <div id={"d3-wrapper"}>
            <h1 style={{color: "black"}} className={"heading-1"}>Pricing</h1>
            <div className={"just-for-centering"} style={{alignItems: "center"}}>
                <div className={"d3"}>
                    <img style={{width: "200px", margin: "0 auto"}} src={process.env.PUBLIC_URL + "/home-icon.png"} alt="Home Icon"/>
                    <h2 style={{top: "175px"}}>{"≤ 10 properties"}</h2>
                    <h2 style={{top: "205px"}} >$10/property/month</h2>
                    <button style={{ marginBottom: "18px"}} className={"b2"}>Register</button>
                </div>
                <div className={"d3"}>
                    <img style={{width: "185px", margin: "0 auto"}} src={process.env.PUBLIC_URL + "/multiple-homes-icon.svg"} alt="Home Icon"/>
                    <h2 style={{top: "175px"}}>{"≥ 10 properties"}</h2>
                    <button className={"b2"}>Contact</button>
                </div>
            </div>
        </div>
        <div id={"d4"}>
            <h1 className={"heading-2"}>About Us</h1>
            <div id={"d4-wrapper"}>
                <h2>LightPMS was founded and is currently run by two passionate technical founders in boston. Our small team should assure you that you will get the utmost attention with fast and reliable responses</h2>
                <h2>LightPMS is still a very young product and has limited features. However we assure you that our reservation synchronization and notification aggregation will be of the highest quality.</h2>
            </div>
            <form action="">
                <h1 className={"heading-1"}>Contact</h1>
                <input type="text" placeholder={"Name"}/>
                <input type="text" placeholder={"Email"}/>
                <input type="text" placeholder={"Subject"}/>
                <input type="text" placeholder={"Content"} id={"content"}/>
                <input type="submit"/>
            </form>
        </div>
        <Footer />
    </div>
  );
}

// async function a() {
//   let db = await getDatabase();
//   db.getmyinfo()
// }

// const a = (param1) => {
// con
// }

export default Home;
