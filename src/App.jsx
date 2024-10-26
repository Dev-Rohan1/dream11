import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PlayerList from "./components/PlayerList";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";

const App = () => {
  const [coin, setCoin] = useState(2000);
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar coin={coin} />
      <Hero coin={coin} setCoin={setCoin} />
      <PlayerList count={count} setCount={setCount} coin={coin} />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
