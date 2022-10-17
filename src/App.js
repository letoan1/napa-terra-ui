import ClientLogo from './components/ClientLogo/ClientLogo';
import MarketingArea from './components/MarketingArea/MarketingArea';
import Navigation from './components/Navigation/Navigation';
import ServiceArea from './components/ServiceArea/ServiceArea';

import './App.scss';
import Testimonial from './components/Testimonial/Testimonial';
import Experience from './components/Experience/Experience';
import Feature from './components/Feature/Feature';
import PriceArea from './components/PriceArea/PriceArea';
import FunfactArea from './components/FunfactArea/FunfactArea';
import UpdateArea from './components/UpdateArea/UpdateArea';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Navigation />
            <MarketingArea />
            <ClientLogo />
            <ServiceArea />
            <Testimonial />
            <Experience />
            <Feature />
            <PriceArea />
            <FunfactArea />
            <UpdateArea />
            <Footer />
        </div>
    );
}

export default App;
