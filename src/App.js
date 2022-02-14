import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './cardData';

function App() {
  const cardComponent = cardData.map((data, index) => {
    return <Card key={index} data={data} />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards">
        {cardComponent}
      </section>
    </div>
  );
}
export default App;
