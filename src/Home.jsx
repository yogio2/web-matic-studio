
import {Intro, HomeTech, HomeService, ParallaxColumn, FinalWords, Testimony, ProgressBar} from './Components/intro';
import Contact from './Components/contact';

const Home = () => {
    return (
        <div className="Home"> 
            {/* <PopupCard/> */}
            <Intro/>
            <HomeTech/>
            <HomeService/>
            <ParallaxColumn/>
            <ProgressBar />
            <Testimony/>
            <Contact/>
            <FinalWords/>
        </div>
    );
};

export default Home;