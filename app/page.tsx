import "./globals.css";
import Cocktail1 from './components/Cards/Cocktail1'
import Cocktail2 from './components/Cards/Cocktail2'
import Cocktail3 from './components/Cards/Cocktail3'

export default function Home() {
  return (
    <main className='mainContainer'>
      {/* Header Container */}
      <div className="mainHeadContainer">
        <h1 className="mainHeader">Coming Soon!</h1>
        <h5 className="mainSubHeader">Book your reservation now, and visit our Instagram for more!</h5>
      </div>
      {/* Content Container */}
      <div className="mainContentContainer">
        <Cocktail1 />
        <Cocktail2 />
        <Cocktail3 />
      </div>
      {/* Reserve Button */}
      {/* <div className="reserveBtnContainer">
        <ReserveBtn />
      </div> */}
    </main>
  );
}
