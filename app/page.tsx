import Navbar from './components/Navbar'
import Home from './components/Hero'
import Features from './components/Features'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
export default function Page() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Features/>
    <Section1/>
    <Section2/>
    <Section3/>
    </div>
  );
}