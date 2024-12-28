import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ThemeProvider, useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import Particles from '@/components/ui/particles'
import { Moon, MoveLeft, Sun } from 'lucide-react'

import HomePage from '@/pages/home/home'
import PortfolioPage from '@/pages/portfolio/portfolio'
import FadeIn from '@/components/fade-in'
import { Helmet } from 'react-helmet'

const metadata = {
    title: 'toothyjarl',
    description:
        "👋 Hi, I'm Aidan — I'm a high school student and an aspiring software developer. Currently focusing on fullstack, game development, and building tools.",
    url: 'https://toothyjarl.com/',
}

function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Router>
                <Helmet>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    <meta property="og:title" content={metadata.title} />
                    <meta property="og:description" content={metadata.description} />
                    <meta property="og:url" content={metadata.url} />
                </Helmet>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
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

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        setColor(theme === 'dark' ? '#ffffff' : '#000000')
    }, [theme])

    const handleThemeToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const handleBackClick = () => {
        navigate(-1)
    }

    if (!mounted) {
        return null
    }

    return (
        <div className="font-sans antialiased min-h-screen h-screen bg-background text-foreground relative flex flex-col items-center justify-center pb-8">
            {children}

            <div className="absolute top-4 right-4 z-20">
                <Button variant="outline" size="icon" onClick={handleThemeToggle}>
                    {theme === 'dark' ? <Sun className="h-8 w-8" /> : <Moon className="h-8 w-8" />}
                    <span className="sr-only">Toggle Theme</span>
                </Button>
            </div>

            {location.pathname !== '/' && (
                <div className="absolute top-4 left-4 z-20">
                    <FadeIn direction="left" distance={5}>
                        <Button
                            className="group"
                            variant="outline"
                            size="icon"
                            onClick={handleBackClick}
                        >
                            <MoveLeft className="h-8 w-8 transform transition-transform duration-200 group-hover:-translate-x-0.5" />
                            <span className="sr-only">Back</span>
                        </Button>
                    </FadeIn>
                </div>
            )}

            <Particles
                className="absolute inset-0 z-0"
                quantity={25}
                ease={80}
                color={color}
                refresh={false}
            />

            <div className="absolute bottom-2 text-[10px] text-muted-foreground z-10">
                © {new Date().getFullYear()} ToothyJarl. All rights reserved.
            </div>
        </div>
    )
}

export default App
