import Header from "./components/Header";
import Hero from "./components/Hero";
import ResponsivePlayer from "./components/ResponsivePlayer";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
      </div>
      <hr />
      <div className="container mx-auto mb-28">
        <Hero />
      </div>
      <div className="h-[900px]">
        <ResponsivePlayer />
      </div>
    </>
  );
}

export default App;
