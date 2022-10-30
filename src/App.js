import Navigation from '../../website/src/Components/Navigation/Navigation.js'
import Header from '../../website/src/Components/Header/Header.js'
import Footer from '../../website/src/Components/Footer/Footer.js'
import Offer from '../../website/src/Components/Offer/Offer.js'
import Recommendation from '../../website/src/Components/Recommendations/Recommendation.js'
import Diwali from '../../website/src/Components/ProductList/Diwali/Diwali'
import './App.css';

function App() {
  return (
    <div >
        <Navigation />
        <Header />
        <Offer />
        <Recommendation />
        <Diwali />
    </div>
  );
}

export default App;
