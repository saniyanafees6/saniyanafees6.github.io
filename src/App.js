import { Home, Experience, Projects, Contact } from './components';
import { Footer, Navbar, SideStyle } from './components/style';
export default function App() {
  return (
    <div className="">
      <Navbar />

      <div className="relative py-16 bg-white overflow-hidden">
        <SideStyle />
        <Home />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
