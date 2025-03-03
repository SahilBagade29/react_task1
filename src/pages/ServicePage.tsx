import React, { useEffect, useState } from 'react';
import {  getContactCard, getServicesCard } from '../services/cardApi.ts';
import { Cards } from '../types/card.ts';
import Card from '../components/Card.tsx';
import '../styles/Card.css';

const ServicePage: React.FC = () => {
  const [cards, setCards] = useState<Cards>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      const data = await getServicesCard();
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
            key={index}
            icon={item.icon}
            title={item.title}
            number={item.number}
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

export default ServicePage;
