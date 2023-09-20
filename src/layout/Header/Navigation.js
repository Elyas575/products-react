import React from 'react';
import Button from '../../components/Button/Button';

const Navigation = () => {
  return (
    <header>
      <nav>
        <div className="site-title">
          <h1>Web Topics</h1>
        </div>
        <div className="navbar-buttons">
          <Button  icon="moon-outline" text="Dark Mode" cssName="dark-mode-button"  />
          <Button icon="heart-outline" text="Favorites" cssName="Favourites-button"  />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;