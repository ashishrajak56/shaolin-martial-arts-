import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Instructors from './components/Instructors';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import SocialFeed from './components/SocialFeed';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-100 bg-shaolin-dark overflow-x-hidden selection:bg-shaolin-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Instructors />
        <Gallery />
        <SocialFeed />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;