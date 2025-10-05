import { Helmet } from 'react-helmet'
import { Button } from '@/components/ui/button'
import { Github, Mail } from 'lucide-react'
import profileImage from '@/assets/images/profile.jpg'
import FadeIn from '@/components/fade-in'
import { Badge } from '@/components/ui/badge'

const HomePage = () => {
    return (
        <>
            <main className="container mx-auto lg:px-12 px-8 py-8 flex flex-col lg:flex-row items-center justify-center z-10">
                <Helmet>
                    <title>toothyjarl — Developer</title>
                </Helmet>
                <div className="lg:hidden w-full flex justify-center mb-4">
                    <FadeIn direction="down" distance={20}>
                        <div className="rounded-full">
                            <img
                                src={profileImage || '/placeholder.svg'}
                                alt="Profile Image"
                                className="w-[200px] h-[200px] object-cover rounded-full shadow-2xl  grayscale"
                            />
                        </div>
                    </FadeIn>
                </div>

                <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                    <FadeIn direction="down" delay={100}>
                        <p className="pointer-events-none text-muted-foreground italic text-xs px-4 lg:pl-0 hidden lg:block">
                            (TOO-thee, JARL)
                        </p>
                    </FadeIn>

                    <FadeIn direction="down" delay={100}>
                        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-primary bg-clip-text text-5xl lg:text-7xl font-semibold leading-[1.2] text-transparenttext-center lg:text-left p-2 lg:pl-0">
                            toothyjarl
                        </h1>
                    </FadeIn>

                    <FadeIn direction="down" delay={120}>
                        <div className="cursor-default flex w-full flex-wrap gap-2 justify-center mt-2 lg:mt-4 lg:justify-start">
                            <Badge variant="secondary">Software Dev</Badge>
                            <Badge variant="secondary">Web Dev</Badge>
                            <Badge variant="secondary">Reverse Engineering</Badge>
                            <Badge variant="secondary">Tooling</Badge>
                            <Badge variant="secondary">Modding</Badge>
                        </div>
                    </FadeIn>
                    <FadeIn direction="down" delay={120}>
                        <div className="cursor-default flex w-full flex-wrap gap-2 justify-center mt-2 lg:justify-start">
                            <Badge variant="outline">TypeScript</Badge>
                            <Badge variant="outline">C++</Badge>
                            <Badge variant="outline">Lua</Badge>
                        </div>
                    </FadeIn>

                    <FadeIn direction="down" delay={150}>
                        <div className="flex flex-wrap gap-2 mt-4 items-start justify-center lg:justify-start">
                            <a
                                href="https://github.com/ToothyJarl2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <Button variant="ghost" size="icon">
                                    <Github className="h-8 w-8" />
                                    <span className="sr-only">GitHub</span>
                                </Button>
                            </a>
                            <a href="mailto:toothyjarl@gmail.com" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon">
                                    <Mail className="h-8 w-8" />
                                    <span className="sr-only">Contact</span>
                                </Button>
                            </a>
                        </div>
                    </FadeIn>
                </section>

                <div className="hidden lg:flex lg:w-1/2 justify-end items-center">
                    <FadeIn direction="left" delay={200} distance={20}>
                        <div className="rounded-full">
                            <img
                                src={profileImage}
                                alt="Profile Image"
                                className="w-[320px] h-[320px] object-cover rounded-full shadow-2xl shadow-blue-600/30 grayscale"
                            />
                        </div>
                    </FadeIn>
                </div>
            </main>
        </>
    )
}

export default HomePage
