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
                                        <span>GitHub</span>
                                        <DropdownMenuShortcut>github.com</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Twitter</span>
                                        <DropdownMenuShortcut>twitter.com</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Discord</span>
                                        <DropdownMenuShortcut>discord.com</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Email</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/3 w-full lg:pl-8 p-4 lg:p-8">
                        <div className="text-left text-white w-full">
                            <h1 className="text-3xl font-semibold">Hi there! I'm ToothyJarl,</h1>
                            <p className="mt-2 text-xl opacity-80">
                                a young and aspiring software developer with a tendency to dabble
                                with frontend development. My journey into programming began as a
                                kid, and I’ve been passionate about it ever since.
                            </p>
                            <p className="mt-2 text-xl opacity-40">
                                --- Click on my profile to view links and socials.
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
