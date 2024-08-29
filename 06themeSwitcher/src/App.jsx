
import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import { useEffect } from 'react'


function App() {

    const [theme , settheme] = useState("light")

    const lightmode=()=>{
        settheme("light")
    }

    const darkmode=()=>{
        settheme("dark")
    }

    //actual change in theme 
    useEffect(()=>{
        document.querySelector("html").classList.remove("light","dark")
        document.querySelector("html").classList.add(themeMode)

    },[themeMode])

    return (
    <ThemeProvider value={{themeMode , lightmode , darkmode}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
    )
}

export default App
