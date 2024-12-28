import FadeIn from '@/components/fade-in'
import { Button } from '@/components/ui/button'
import { MoveLeft } from 'lucide-react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const PortfolioPage = () => {
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1)
    }

    return (
        <>
            <main className="container mx-auto px-8 py-8 flex flex-col items-center justify-between z-10">
                <Helmet>
                    <title>toothyjarl — Portfolio</title>
                </Helmet>

                <section className="w-full h-full flex flex-col items-center mb-16">
                    <section className="w-full flex flex-col items-center">
                        <FadeIn direction="up">
                            <p className="pointer-events-none text-lg mt-4 text-center max-w-[40ch] mx-auto">
                                This page is currently being worked on... Come back soon for
                                something amazing!
                            </p>
                        </FadeIn>

                        <FadeIn direction="up" delay={100}>
                            <div className="flex mt-4 space-x-4 justify-center lg:justify-start">
                                <Button
                                    onClick={handleBackClick}
                                    variant="secondary"
                                    className="group"
                                >
                                    <MoveLeft className="h-4 w-4 transform transition-transform duration-200 group-hover:-translate-x-0.5" />
                                    Go Back
                                </Button>
                            </div>
                        </FadeIn>
                    </section>
                </section>
            </main>
        </>
    )
}

export default PortfolioPage
