import Header from "./components/Header";
import Hero from "./components/Hero";
import ResponsivePlayer from "./components/ResponsivePlayer";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <header className="container mx-auto">
        <Header />
      </header>
      <hr />
      <div className="container mx-auto mb-28">
        <Hero />
      </div>
      <div className="mb-32">
        <ResponsivePlayer />
      </div>
      <Statistics />
    </>
  );
}

export default App;
