import { Button } from '@/components/ui/button'
import { SiGithub, SiInstagram, SiX } from '@icons-pack/react-simple-icons'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-black">
            <main className="flex flex-col items-center justify-center gap-16 w-full max-w-5xl py-32 px-4 dark:bg-black sm:px-8">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h1
                        className="text-5xl font-semibold tracking-tight
                    bg-linear-to-r text-white text-shadow-lg
                    bg-clip-text text-transparent"
                    >
                        ToothyJarl
                    </h1>

                    <p className="text-md leading-8 dark:text-zinc-400">
                        Aidan — 17, Software Developer.
                    </p>
                    <Image
                        width={800}
                        height={800}
                        src="/profile.jpeg"
                        alt="Aidan"
                        className="h-48 w-48 rounded-full border-2 dark:border-zinc-800 object-cover"
                    />
                    <div className="flex gap-2 items-center mt-4">
                        <Link href="https://github.com/ToothyJarl">
                            <Button variant="ghost" size="icon" className="cursor-pointer">
                                <SiGithub />
                            </Button>
                        </Link>

                        <div className="flex flex-col items-center">
                            <Link href="https://github.com/ToothyJarl2">
                                <Button variant="ghost" size="icon" className="cursor-pointer">
                                    <SiGithub className="text-zinc-400" />
                                </Button>
                            </Link>
                        </div>

                        <Link href="https://x.com/ToothyJarl">
                            <Button variant="ghost" size="icon" className="cursor-pointer">
                                <SiX />
                            </Button>
                        </Link>

                        <Link href="https://instagram.com/aidanhgill">
                            <Button variant="ghost" size="icon" className="cursor-pointer">
                                <SiInstagram />
                            </Button>
                        </Link>

                        <Link href="mailto:toothyjarl@gmail.com">
                            <Button variant="ghost" size="icon" className="cursor-pointer">
                                <Mail />
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

            <div className="absolute bottom-2 text-xs text-zinc-600">
                © {new Date().getFullYear()} ToothyJarl. All rights reserved.
            </div>
        </div>
    )
}
