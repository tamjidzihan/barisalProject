import Banner from '../components/Home/Banner'
import ServiceGrid from '../components/Home/ServiceGrid'
import Features from '../components/Home/Features'

const HomePage = () => {
    return (
        <main>
            <Banner />
            <div id="explore">
                <ServiceGrid />
            </div>
            <Features />
        </main>
    )
}

export default HomePage
