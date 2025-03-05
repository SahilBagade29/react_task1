import React, { useState } from 'react';
import '../styles/Card.css';

interface CardProps {
  icon: string;
  title: string;
  number: string;
  percentage: number;
  tag?: string;
}

const Card: React.FC<CardProps> = ({ icon, title, number, percentage, tag }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const bgColor = isDarkMode ? "#000000" : "#FFFFFF";
  const fontColor = isDarkMode ? "#FFFFFF" : "#000000";

  return (
    <div className="card" style={{ backgroundColor: bgColor, color: fontColor }}>
      <button onClick={toggleDarkMode} className="toggle-button">Dark Mode</button>
      <span className="card-icon">{icon}</span>
      <span className="card-number">{number}</span>
      <span className="card-title">{title}</span>
      <span className="card-percentage"><strong>{percentage} </strong></span>
      {tag && <span className="card-tag">{tag}</span>}
    </div>
  );
};

export default Card;
