import "./App.css";
import Index from "./components/index";
import poks from "./importantInfos/data";
function App() {
  return (
    <main>
      <h1 className="title">Pokedex</h1>
      <section className="container">
        <Index pokemons={poks} />
      </section>
    </main>
  );
}

export default App;
