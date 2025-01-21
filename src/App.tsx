import Header from "./components/Header";
import Hero from "./components/Hero";
import ResponsivePlayer from "./components/ResponsivePlayer";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <Header />
      <hr />
      <Hero />
      <div className="mb-32">
        <ResponsivePlayer />
      </div>
      <Statistics />
    </>
  );
}

export default App;
