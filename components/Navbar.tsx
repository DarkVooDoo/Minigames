import Link from "next/link"

import { useContext } from "react"

import { ThemeContext } from "../utils/contexts"

import styles from 'styles/Navbar.module.css'

const Navbar:React.FC= ({ })=>{
    const [isDarkTheme, toggleTheme] = useContext(ThemeContext)

    return (
        <div className={`${styles.navbar} ${isDarkTheme ? 'dark_element' : 'light_element'}`}>
            <Link href="/">Home</Link>
            <button onClick={toggleTheme}>Theme</button>
        </div>

    )
}

export default Navbar