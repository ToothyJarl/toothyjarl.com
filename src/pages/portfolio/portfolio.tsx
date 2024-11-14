import { Helmet } from 'react-helmet'

const PortfolioPage = () => {
    return (
        <>
            <Helmet>
                <title>toothyjarl — Portfolio</title>
            </Helmet>
            <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-[1.2] text-transparent dark:from-white dark:to-orange-400 text-center lg:text-left pb-2">
                portfolio
            </h1>
        </>
    )
}

export default PortfolioPage
