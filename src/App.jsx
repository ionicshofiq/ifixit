import Navbar from './sharred/navbar/Navbar';
import HeroBanner from './components/heroBanner/HeroBanner';
import Card from './components/card/Card';
import Fixit from './components/fixit/Fixit';




const App = () => {
    return (
        <div>
            <Navbar />
            <HeroBanner />
            <Card />
            <Fixit/>
         

        </div>
    );
};

export default App;