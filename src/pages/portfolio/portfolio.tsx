import { Helmet } from 'react-helmet'

const PortfolioPage = () => {
    return (
        <>
            <main className="min-h-screen container mx-auto px-4 py-16">
                <Helmet>
                    <title>toothyjarl — Portfolio</title>
                </Helmet>

                <section className="w-full h-full flex flex-col items-center lg:items-start mb-16"></section>
            </main>
        </>
    )
}

export default PortfolioPage
