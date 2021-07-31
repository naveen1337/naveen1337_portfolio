import NavBar from "../components/navbar"
import IntroSection from "../components/IntroSection"
import styles from "../styles"

export default function HomePage(){
    return (
        <div>
            <div className="md:h-3/4" style={styles.introSectionGradient}>
            <NavBar/>
            <IntroSection/>
            </div>
          
        </div>
    )
}