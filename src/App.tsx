import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider, useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import Particles from '@/components/ui/particles'
import { Moon, Sun } from 'lucide-react'

import HomePage from '@/pages/home/home'

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    )
}

function Layout({ children }: { children: React.ReactNode }) {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [color, setColor] = useState('#ffffff')

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        setColor(theme === 'dark' ? '#ffffff' : '#000000')
    }, [theme])

    const handleThemeToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    if (!mounted) {
        return null
    }

    return (
        <div className="font-sans antialiased min-h-screen bg-background text-foreground relative flex flex-col items-center justify-center">
            <main className="container mx-auto lg:px-12 px-8 py-8 flex flex-col lg:flex-row items-center justify-between z-10">
                {children}
            </main>

            <div className="absolute top-4 right-4 z-20">
                <Button variant="outline" size="icon" onClick={handleThemeToggle}>
                    {theme === 'dark' ? <Sun className="h-8 w-8" /> : <Moon className="h-8 w-8" />}
                    <span className="sr-only">Toggle Theme</span>
                </Button>
            </div>

            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
        </div>
    )
}

export default App
