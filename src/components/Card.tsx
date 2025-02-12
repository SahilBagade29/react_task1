import React from 'react';
import '../styles/Card.css';

interface CardProps {
    icon: string;
    title: string;
    number: string;
    percentage: number;
}

const Card: React.FC<CardProps> = ({ icon, title, number, percentage, tag }) => {
    return (
        <div className="card">
            <span className="card-icon">{icon}</span>
            <span className="card-number">{number}</span>
            <span className="card-title">{title}</span>
            <span className="card-percentage"><strong>{percentage} </strong></span>
            <span className="card-tag">{tag} </span>
        </div>
    );
};

export default Card;
