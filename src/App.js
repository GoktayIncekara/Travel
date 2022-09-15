import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./data";
import Card from './components/Card';

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
        />
    )
  })

  return (
    <div className="App">
      <Header/>
      <section>
        {cards}
      </section>
      <Footer/>
    </div>
  );
}

export default App;
