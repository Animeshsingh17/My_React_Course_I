import React from "react";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const length = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {length > 0 ? (
        <>
          <p>
            Authentic Pizza cuisine 6 creative dishes to choose from . All form
            of our Pizza's are delecious.
          </p>
          <ul className="pizzas">
            {pizzas.map((data) => (
              <Pizza
                name={data?.name}
                ingredient={data?.ingredients}
                photoName={data?.photoName}
                price={data?.price}
                soldOut={data?.soldOut}
                key={data?.name}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Sorry we are Out of Stock and we are Still Working on it Please Come
          back Later.
        </p>
      )}
    </main>
  );
}
function Pizza({ name, ingredient, photoName, price, soldOut }) {
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="Pizza" />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
      </div>
      <span>Price:{price}$</span>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          Closed! We are happy to welcome you between {openHour}:00 and{" "}
          {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00, Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
