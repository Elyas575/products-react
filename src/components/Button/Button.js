import React from 'react';

const Button = ({ icon, text, cssName }) => {
  return (
    <button className={cssName} >
      <ion-icon className={`${cssName}-icon`} name={icon}></ion-icon>
      <span>{text}</span>
    </button>
  );
};

export default Button;