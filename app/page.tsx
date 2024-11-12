'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'

import Particles from '@/components/ui/particles'
import { Button } from '@/components/ui/button'
import profileImage from '@/app/images/profile.jpg'
import { Github, Linkedin, Moon, Sun, Twitter } from 'lucide-react'

export default function Home() {
    const { theme, setTheme } = useTheme()
    const [color, setColor] = useState('#ffffff')

    useEffect(() => {
        setColor(theme === 'dark' ? '#ffffff' : '#000000')
    }, [theme])

    const handleThemeToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className="min-h-screen bg-background text-foreground relative flex flex-col items-center justify-center">
            <main className="container mx-auto px-8 py-8 flex flex-col lg:flex-row items-center justify-between z-10">
                <div className="lg:hidden w-full flex justify-center mb-4">
                    <Image
                        src={profileImage}
                        alt="Profile Image"
                        className="w-[200px] h-[200px] object-cover rounded-full shadow-2xl"
                    />
                </div>

                <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                    <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 text-center lg:text-left">
                        Aidan Gill
                    </h1>

                    <p className="text-lg mt-4 text-center lg:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam obcaecati
                        aliquam accusantium possimus porro amet tenetur officia, dolorum impedit
                        labore nihil dicta cupiditate! Eveniet, ipsam. Amet illum quisquam optio
                        sed?
                    </p>

                    <div className="flex mt-4 space-x-4 justify-center lg:justify-start">
                        <Link
                            href="https://github.com/ToothyJarl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" size="icon">
                                <Github className="h-8 w-8" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon">
                                <Linkedin className="h-8 w-8" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </Link>
                        <Link
                            href="https://twitter.com/ToothyJarl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" size="icon">
                                <Twitter className="h-8 w-8" />
                                <span className="sr-only">Twitter</span>
                            </Button>
                        </Link>
                    </div>
                </section>

                <div className="hidden lg:flex lg:w-1/2 justify-end items-center">
                    <Image
                        src={profileImage}
                        alt="Profile Image"
                        className="w-[400px] h-[400px] object-cover rounded-full shadow-2xl"
                    />
                </div>
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
