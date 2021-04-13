import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from "./navigation.module.css";

const Navigation = () => {
const isMobile = useMediaQuery ({query: '(max-device-width: 425px)'})
const isTablet = useMediaQuery ({query: '(max-device-width: 768px)'})
const isLaptop = useMediaQuery ({query: '(max-device-width: 1440px)'})
const isLargerScreen = useMediaQuery ({query: '(min-device-width: 1441px)'})


   return (
   <div className = {styles.mainNav}>
       {isMobile && <> 
       <div className="title">
           <h3>Component Snippets</h3>
       </div>
        <ul className={styles.navLinkContainer}>
            <li><a href="#" className = {styles.navLink}>Yeah</a></li>
            <li><a href="#" className = {styles.navLink}>Buttons</a></li>
            <li><a href="#" className = {styles.navLink}>Cards</a></li>
            <li><a href="#" className = {styles.navLink}>Footers</a></li>
            <li><a href="#" className = {styles.navLink}>NavBars</a></li>
        </ul> </>}
    
       {/* <div className="title">
           <h3>Component Snippets</h3>
       </div>
        <ul className={styles.navLinkContainer}>
            <li><a href="#" className = {styles.navLink}>Home</a></li>
            <li><a href="#" className = {styles.navLink}>Buttons</a></li>
            <li><a href="#" className = {styles.navLink}>Cards</a></li>
            <li><a href="#" className = {styles.navLink}>Footers</a></li>
            <li><a href="#" className = {styles.navLink}>NavBars</a></li>
        </ul> */}
    </div>
    )
}

export default Navigation;