import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { ThemeContext } from '../utils/contexts'
import { CreateCookie, GetCookie } from '../utils/helpers'

function MyApp({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(true)
  const [theme, onChangeTheme] = useState(false)

  const onToggleTheme = ()=>{
    onChangeTheme(prev=>!prev)
    CreateCookie("dark_theme", !theme)
  }

  useEffect(()=>{
    const isDarkTheme = GetCookie("dark_theme")
    onChangeTheme(isDarkTheme === "true" ? true : false)
    setLoading(false)
  },[])

  if(loading) return null
  return (
    <ThemeContext.Provider value={[theme, onToggleTheme]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  )
}

export default MyApp
