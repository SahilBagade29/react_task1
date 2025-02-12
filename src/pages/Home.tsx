import React, { useEffect, useState } from 'react';
import { getCard } from '../services/cardApi.ts';
import { Cards } from '../types/card.ts';
import Card from '../components/Card.tsx';
import '../styles/Card.css';

const Home: React.FC = () => {
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
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    number={item.number}
                    percentage={item.percentage} 
                    tag={item.tag} 
                />
            ))}
        </div>
    );
};

export default Home;
