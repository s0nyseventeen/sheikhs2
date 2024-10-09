import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
      </div>
      <hr />
      <div className="container mx-auto">
        <Hero />
      </div>
    </>
  );
}

export default App;
