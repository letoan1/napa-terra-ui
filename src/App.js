import '~/App.scss';
import ClientLogo from '~/components/ClientLogo';
import MarketingArea from '~/components/MarketingArea';
import Navigation from '~/components/Navigation';
import ServiceArea from '~/components/ServiceArea/ServiceArea';
import Testimonial from '~/components/Testimonial/Testimonial';
import Experience from '~/components/Experience';
import Feature from '~/components/Feature/Feature';
import PriceArea from '~/components/PriceArea';
import FunfactArea from '~/components/FunfactArea';
import UpdateArea from '~/components/UpdateArea';
import Footer from '~/components/Footer';

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
