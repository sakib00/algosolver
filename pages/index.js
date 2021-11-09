import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import { Navbar } from '../components/Navbar';
import { Landing } from '../components/Landing';
import { Section2 } from '../components/Section2';
import { Pricing } from '../components/Pricing';
import { Section4 } from '../components/Section4';
import { Section5 } from '../components/Section5';
import { Client } from '../components/Client';
import { Footer } from '../components/Footer';
import { Section6 } from '../components/Section6';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Section2 />
      <Pricing />
      <Section4 />
      <Section5 />
      <Client />
      <Section6 />
      <Contact />
      <Footer />
    </div>
  );
}
