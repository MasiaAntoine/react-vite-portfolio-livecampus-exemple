import React from "react";

const Presentation = () => {
  return (
    <section className="flex gap-10 items-center justify-center">
      <div>
        <img
          className="rounded-full size-36 object-cover"
          src="./src/assets/images/avatar.jpeg"
          alt="Avatar"
        />
      </div>
      <div>
        <h2 className="mb-2">Developper FullStack</h2>
        <p>
          Les erreurs d'hier sont les leçons d'aujourd'hui pour le développeur
          de demain.
        </p>
        <p>
          Ma passion pour le développement est un moteur puissant qui alimente
          la créativité et la résolution de problèmes.
        </p>
      </div>
    </section>
  );
};

export default Presentation;
