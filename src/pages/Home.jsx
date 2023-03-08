import Footer from "../components/Footer";
import Header from "../components/Header";
import Deleivery from "../HomeComponents/Deleivery";
import Hero from "../HomeComponents/Hero";
import Hot from "../HomeComponents/Hot";
import Pizza from "../HomeComponents/Pizza";
import Popular from "../HomeComponents/Popular";
import Testimonials from "../HomeComponents/Testimonials";
import Why from "../HomeComponents/Why";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Pizza />
      <Deleivery />
      <Popular />
      <Why />
      <Hot />
      <Testimonials />
      <Footer/>
    </>
  );
};

export default Home;
