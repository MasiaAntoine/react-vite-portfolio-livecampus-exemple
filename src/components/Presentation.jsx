import React from "react";

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="avatar-container">
        <img src="avatar.jpg" alt="Avatar" className="avatar" />
      </div>
      <div className="presentation-text">
        <h2>Titre</h2>
        <p>Description du portfolio : Lorem ipsum dolor sit amet...</p>
      </div>
    </section>
  );
};

export default Presentation;
