import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@/providers/theme-provider'

import HomePage from '@/pages/home/home'
import { Helmet } from 'react-helmet'

const metadata = {
    title: 'toothyjarl',
    url: 'https://toothyjarl.com/',
}

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router>
                <Helmet>
                    <title>{metadata.title}</title>
                    <meta property="og:title" content={metadata.title} />
                    <meta property="og:url" content={metadata.url} />
                </Helmet>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    )
}

interface Blob {
    x: string
    y: string
    width: string
    height: string
    color: string
}

const BlobBackground: React.FC = () => {
    const [blobs] = useState<Blob[]>([
        { x: '10%', y: '80%', width: '300px', height: '500px', color: '#4dabf7' },
        { x: '100%', y: '20%', width: '350px', height: '400px', color: '#1e90ff' },
        { x: '25%', y: '85%', width: '250px', height: '350px', color: '#339af0' },
        { x: '85%', y: '15%', width: '300px', height: '450px', color: '#74c0fc' },
    ])

    return (
        <div className="absolute inset-0 overflow-hidden">
            {blobs.map((b, i) => (
                <div
                    key={i}
                    className="absolute opacity-30 dark:opacity-10"
                    style={{
                        left: b.x,
                        top: b.y,
                        width: b.width,
                        height: b.height,
                        backgroundColor: b.color,
                        filter: 'blur(100px)',
                        borderRadius: '50% / 50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}
        </div>
    )
}

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="font-sans antialiased min-h-screen h-screen bg-background text-foreground relative flex flex-col items-center justify-center">
            <BlobBackground />

            {children}

            <div className="absolute bottom-2 text-[10px] text-muted-foreground z-10">
                © {new Date().getFullYear()} ToothyJarl. All rights reserved.
            </div>
        </div>
    )
}

export default App
