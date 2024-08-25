import '@/App.css'

import { ThemeProvider } from '@/components/theme-provider'
import ProfileDropdown from '@/components/profile-dropdown'
import DotPattern from './components/magicui/dot-pattern'
import Particles from '@/components/magicui/particles'
import BlurFade from './components/magicui/blur-fade'

import profile from '@/assets/images/toothyjarl.jpg'

import { cn } from '@/lib/utils'

import { MoveDownLeft, Github } from 'lucide-react'

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="font-geist flex flex-col min-h-screen px-6 py-8">
                <div className="flex flex-col justify-center items-center flex-grow">
                    <DotPattern
                        className={cn(
                            'opacity-50 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
                        )}
                    />
                    <Particles
                        className="absolute inset-0 z-0"
                        quantity={50}
                        ease={80}
                        color="#ffffff"
                        refresh
                    />
                    <BlurFade delay={0.1}>
                        <div className="relative w-36 h-36 lg:w-52 lg:h-52 mb-4">
                            <ProfileDropdown>
                                <img
                                    id="profile"
                                    src={profile}
                                    alt="Profile"
                                    className="w-full h-full rounded-full object-cover cursor-pointer ease-in-out"
                                />
                            </ProfileDropdown>
                            <MoveDownLeft
                                className="absolute text-gray-600 animate-diagonal-move"
                                style={{
                                    top: '30%',
                                    right: '-45px',
                                    transform: 'translateY(-50%)',
                                    width: '2rem',
                                    height: '2rem'
                                }}
                            />
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.3}>
                        <h1 className="text-white text-2xl lg:text-3xl font-bold text-center mb-2">
                            Hi! I'm ToothyJarl,
                        </h1>
                    </BlurFade>
                    <BlurFade delay={0.5}>
                        <p className="text-gray-400 text-center text-md lg:text-xl max-w-lg mx-auto">
                            a young and aspiring software developer with a tendency to mess with
                            frontend development. My journey into programming began as a kid, and
                            I’ve loved it ever since.
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.7}>
                        <p className="text-gray-500 lg:text-lg text-sm text-center mt-4">
                            Tap my profile for socials and links.
                        </p>
                    </BlurFade>
                </div>
                <footer className="text-gray-500 text-md text-center mt-4 z-10">
                    <div className="flex flex-col items-center">
                        <a
                            href="https://github.com/ToothyJarl/toothyjarl.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300"
                        >
                            <Github className="mb-2 h-7 w-7 transition-color duration-100" />
                        </a>
                        <p>&copy; {new Date().getFullYear()} ToothyJarl. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    )
}

export default App
