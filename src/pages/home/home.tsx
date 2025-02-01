import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Button } from '@/components/ui/button'
import { Github, Mail, MoveRight, Twitter } from 'lucide-react'
import profileImage from '@/assets/profile.jpg'
import FadeIn from '@/components/fade-in'

const HomePage = () => {
    const navigate = useNavigate()

    const handlePortfolioClick = () => {
        navigate('/portfolio')
    }

    return (
        <>
            <main className="container mx-auto lg:px-12 px-8 py-8 flex flex-col lg:flex-row items-center justify-between z-10">
                <Helmet>
                    <title>toothyjarl</title>
                </Helmet>
                <div className="lg:hidden w-full flex justify-center mb-4">
                    <FadeIn direction="down" distance={20}>
                        <img
                            src={profileImage || '/placeholder.svg'}
                            alt="Profile Image"
                            className="w-[200px] h-[200px] object-cover rounded-full shadow-2xl"
                        />
                    </FadeIn>
                </div>
                <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                    <FadeIn direction="down">
                        <p className="pointer-events-none hidden lg:block text-left text-muted-foreground">
                            /ˈtuːθiːˈjɑːrl/
                        </p>
                    </FadeIn>

                    <FadeIn direction="down" delay={100}>
                        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-[1.2] text-transparent dark:from-white dark:to-black text-center lg:text-left pb-2">
                            toothyjarl
                        </h1>
                    </FadeIn>

                    <FadeIn direction="up" delay={200}>
                        <p className="pointer-events-none text-lg mt-4 text-center lg:text-left">
                            👋 Hi, I'm Aidan — I'm a high school student and an aspiring software
                            dev. Currently focusing on fullstack, game dev, and building tools.
                        </p>
                    </FadeIn>

                    <FadeIn direction="up" delay={300}>
                        <div className="flex flex-wrap mt-4 gap-4 items-start justify-center lg:justify-start">
                            <div className="relative group">
                                <a
                                    href="https://github.com/ToothyJarl2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <Button variant="outline" size="icon">
                                        <Github className="h-8 w-8" />
                                        <span className="sr-only">GitHub</span>
                                    </Button>
                                </a>
                                <div className="absolute left-[-17%] top-full mt-4 p-3 bg-secondary text-sm rounded-lg shadow-lg w-72 border border-gray-200 dark:border-0 z-10">
                                    <div className="absolute -top-1.5 left-6 transform -translate-x-1/2 w-3 h-3 bg-secondary rotate-45 border-l border-t border-gray-200 dark:border-0"></div>
                                    <div className="relative z-10 text-gray-800 dark:text-gray-200">
                                        My account{' '}
                                        <a
                                            href="https://github.com/ToothyJarl"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            @ToothyJarl
                                        </a>{' '}
                                        is flagged
                                        <br />
                                        Currently working under{' '}
                                        <a
                                            href="https://github.com/ToothyJarl2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            @ToothyJarl2
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a
                                href="https://twitter.com/ToothyJarl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="icon">
                                    <Twitter className="h-8 w-8" />
                                    <span className="sr-only">Twitter</span>
                                </Button>
                            </a>
                            <a href="mailto:aidanhgill@gmail.com" rel="noopener noreferrer">
                                <Button variant="outline" size="icon">
                                    <Mail className="h-8 w-8" />
                                    <span className="sr-only">Contact</span>
                                </Button>
                            </a>
                            <Button
                                className="group"
                                onClick={handlePortfolioClick}
                                variant="secondary"
                            >
                                Portfolio
                                <MoveRight className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Button>
                        </div>
                    </FadeIn>
                </section>

                <div className="hidden lg:flex lg:w-1/2 justify-end items-center">
                    <FadeIn direction="left" delay={200} distance={20}>
                        <img
                            src={profileImage || '/placeholder.svg'}
                            alt="Profile Image"
                            className="ease-in-out animate-sizeUpDown w-[400px] h-[400px] object-cover rounded-full shadow-2xl"
                        />
                    </FadeIn>
                </div>
            </main>
        </>
    )
}

export default HomePage
