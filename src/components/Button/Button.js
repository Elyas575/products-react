import React from 'react';


const Button = ({ icon, text, cssName, onClick }) => {
  return (
    <button className={cssName} onClick={onClick}> 
      <ion-icon className={`${cssName}-icon`} name={icon}></ion-icon>
      <span>{text}</span>
    </button>
  );
};

export default Button;