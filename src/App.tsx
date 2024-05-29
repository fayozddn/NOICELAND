import { Header } from "./Header";
import { Footer } from "./Footer";
import { Hero } from "./Main/Hero";
import { Section2 } from "./Main/Section2";
import { Section3 } from "./Main/Section3";
import { Section4 } from "./Main/Section4";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <Footer />
    </>
  );
}

export default App;
