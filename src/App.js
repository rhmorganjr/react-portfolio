import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Trailer from './components/Trailer';

function App() {
  const [categories] = useState([
    { name: "About Me", description: ""},
    { name: "Portfolio", description: "" },
    { name: "Contact", description: "" },
    { name: "Resume", description: "" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderCategory = () => {
    console.log(currentCategory);
    switch (currentCategory.name) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactForm />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>{renderCategory(currentCategory)}</div>
      </main>
      <Trailer></Trailer>
    </div>
  );
}

export default App;