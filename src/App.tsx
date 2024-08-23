import '@/App.css'
import { ThemeProvider } from '@/components/theme-provider'
import ProfileDropdown from '@/components/profile-dropdown'
import profile from '@/assets/images/toothyjarl.jpg'

import DotPattern from './components/magicui/dot-pattern'
import Particles from '@/components/magicui/particles'
import BlurFade from './components/magicui/blur-fade'

import { cn } from '@/lib/utils'

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col min-h-screen px-6 py-8">
                <div className="flex flex-col justify-center items-center flex-grow">
                    <DotPattern
                        className={cn(
                            '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
                        )}
                    />
                    <Particles
                        className="absolute inset-0"
                        quantity={20}
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
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.3}>
                        <h1 className="text-white text-2xl lg:text-3xl font-bold text-center mb-2">
                            Hi there! I'm ToothyJarl,
                        </h1>
                    </BlurFade>
                    <BlurFade delay={0.5}>
                        <p className="text-gray-400 text-center text-md lg:text-xl max-w-lg mx-auto">
                            a young and aspiring software developer with a tendency to mess with
                            frontend development. My journey into programming began as a kid, and
                            I’ve been passionate about it ever since.
                        </p>
                    </BlurFade>
                </div>
                <footer className="text-gray-500 text-md text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} ToothyJarl. All rights reserved.</p>
                </footer>
            </div>
        </ThemeProvider>
    )
}

export default App
