import styles from "./navigation.module.css";

const Navigation = () => {
   return (
   <div className = {styles.mainNav}>
       <div className="title">
           <h3>Component Snippets</h3>
       </div>
        <ul className={styles.navLinkContainer}>
            <li><a href="#" className = {styles.navLink}>Home</a></li>
            <li><a href="#" className = {styles.navLink}>Buttons</a></li>
            <li><a href="#" className = {styles.navLink}>Cards</a></li>
            <li><a href="#" className = {styles.navLink}>Footers</a></li>
            <li><a href="#" className = {styles.navLink}>NavBars</a></li>
        </ul>
    </div>
    )
}

export default Navigation;