import './App.css'

import { ThemeProvider } from '@/components/theme-provider'
import Ripple from '@/components/magicui/ripple'

import profile from '@/assets/images/toothyjarl.jpg'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'

import { Github, Twitter, Mail, MoveLeft } from 'lucide-react'

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="font-geist font-bu flex flex-col min-h-screen">
                <div className="relative flex flex-col lg:flex-row flex-grow overflow-hidden">
                    <div className="relative flex items-center justify-center lg:w-1/2 w-full h-full lg:h-auto">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Ripple mainCircleSize={350} />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <a className="relative w-60 h-60 flex items-center justify-center cursor-pointer">
                                    <img
                                        src={profile}
                                        alt="Profile"
                                        className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-95"
                                    />
                                </a>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>aidanhgill@gmail.com</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <a
                                            href="https://discord.com/users/528791966503403541"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center w-full"
                                        >
                                            <span className="mr-2">Discord</span>
                                            <DropdownMenuShortcut>toothyjarl</DropdownMenuShortcut>
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <a
                                            href="https://github.com/ToothyJarl"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center w-full"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            <span className="mr-2">GitHub</span>
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <a
                                            href="https://twitter.com/ToothyJarl"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center w-full"
                                        >
                                            <Twitter className="mr-2 h-4 w-4" />
                                            <span className="mr-2">Twitter</span>
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <a
                                            href="mailto:aidanhgill@gmail.com"
                                            className="flex items-center w-full"
                                        >
                                            <Mail className="mr-2 h-4 w-4" />
                                            <span className="mr-2">Contact</span>
                                        </a>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/3 w-full lg:pl-8 p-4 lg:p-8">
                        <div className="text-left text-white w-full">
                            <h1 className="text-3xl font-semibold">Hi there! I'm ToothyJarl,</h1>
                            <p className="mt-2 text-xl opacity-80">
                                a young and aspiring software developer with a tendency to mess with
                                frontend development. My journey into programming began as a kid,
                                and I’ve been passionate about it ever since.
                            </p>
                            <p className="mt-2 text-xl opacity-40 flex items-center">
                                <MoveLeft className="mr-2" />
                                Click on my profile to view my socials and other links.
                            </p>
                        </div>
                    </div>
                </div>

                <footer className="text-white/30 text-center py-4">
                    <p>&copy; {new Date().getFullYear()} ToothyJarl. All rights reserved.</p>
                </footer>
            </div>
        </ThemeProvider>
    )
}

export default App
