import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { getCard } from '../services/cardApi.ts';
=======
import {  getContactCard } from '../services/cardApi.ts';
>>>>>>> origin/master
import { Cards } from '../types/card.ts';
import Card from '../components/Card.tsx';
import '../styles/Card.css';

<<<<<<< HEAD
const ContactPage = () => {
      const [cards, setCards] = useState<Cards>([]);
    
        useEffect(() => {
            const fetchCards = async () => {
                const data = await getCard();
                setCards(data);
            };
            fetchCards();
        }, []);
    
        // Create an array of 20 items by repeating the fetched data
        const repeatedCards = Array.from({ length: 20 }, (_, i) => cards[i % cards.length]);
    
        if (cards.length === 0) {
          return <div>Loading...</div>;
      }
  return (
    <div className="card-container">
    {repeatedCards.map((item, index) => (
        <Card
=======
const ContactPage: React.FC = () => {
  const [cards, setCards] = useState<Cards>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      const data = await getContactCard();
      setCards(data);
      console.log(data);
    };
    fetchCards();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  if (cards.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <button onClick={toggleDarkMode} className="toggle-button">Toggle Dark Mode</button>
      <div className="card-container">
        {cards.map((item, index) => ( 
          <Card
>>>>>>> origin/master
            key={index}
            icon={item.icon}
            title={item.title}
            number={item.number}
<<<<<<< HEAD
            percentage={item.percentage} 
            tag={item.tag} 
        />
    ))}
</div>
  )
}

export default ContactPage
=======
            percentage={item.percentage}
            tag={item.tag}
            bgColor={isDarkMode ? "#000000" : "#FFFFFF"}  // Background color based on dark mode
            fontColor={isDarkMode ? "#FFFFFF" : "#000000"}  // Font color based on dark mode
          />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
>>>>>>> origin/master
