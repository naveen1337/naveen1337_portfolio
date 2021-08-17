import NavBar from "../components/navbar"
import IntroSection from "../components/IntroSection"
import styles from "../styles"
// import {
//     Link
//   } from "react-router-dom";

export default function HomePage(){
    return (
        <div>
            <div className="md:h-screen p-6 bg-black" >
            <NavBar/>
            <IntroSection/>
            </div>
          
        </div>
    )
}