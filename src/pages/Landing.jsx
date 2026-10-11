import './Landing.css'
import Header from '../Componants/Landing/Header.jsx'
import ListNav from '../Componants/Landing/ListNav.jsx'
import Deal from '../Componants/Landing/Deal.jsx'
import Smartphones from '../Componants/Landing/Smartphones.jsx'
import Topcategories from '../Componants/Landing/Topcategories.jsx'
import DailyEssentials from '../Componants/Landing/DailyEssentials.jsx'
import Footer from '../Componants/Landing/Footer.jsx'

function Landing() {
    return (
        <>
            <main>
                <Header />
                <ListNav />
                <Deal />
                <Smartphones />
                <Topcategories />
                <DailyEssentials />
            </main>
            <Footer />
        </>
    );
}

export default Landing