
import CarouselImages from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


const App: React.FC = () => {
  return (
    <main className="App">
      <Header />
      <CarouselImages />
      <Footer />
    </main>
  );
}

export default App;
