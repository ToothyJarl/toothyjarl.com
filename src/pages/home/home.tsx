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
                            src={profileImage}
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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                            laudantium, vitae dolore aut tenetur amet obcaecati eligendi earum
                            sapiente veniam nostrum, quod, numquam doloribus beatae exercitationem
                            temporibus fugit repellat ipsam!
                        </p>
                    </FadeIn>

                    <FadeIn direction="up" delay={300}>
                        <div className="flex mt-4 space-x-4 justify-center lg:justify-start">
                            <a
                                href="https://github.com/ToothyJarl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="icon">
                                    <Github className="h-8 w-8" />
                                    <span className="sr-only">GitHub</span>
                                </Button>
                            </a>
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
                            <Button className="group" onClick={handlePortfolioClick}>
                                Portfolio
                                <MoveRight className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Button>
                        </div>
                    </FadeIn>
                </section>

                <div className="hidden lg:flex lg:w-1/2 justify-end items-center">
                    <FadeIn direction="left" delay={200} distance={20}>
                        <img
                            src={profileImage}
                            alt="Profile Image"
                            className="w-[400px] h-[400px] object-cover rounded-full shadow-2xl"
                        />
                    </FadeIn>
                </div>
            </main>
        </>
    )
}

export default HomePage
