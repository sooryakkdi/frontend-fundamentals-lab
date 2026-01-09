import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container"><img src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg" alt="Food App Logo" width= "90px"/></div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
            <RestaurantCard />
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <img src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Restaurant Image" width="300px"/>
            <h3>Radhe Govinda</h3>
            <p>North India, South India, Italian</p>
            <p>4.9 starts</p>
            <p>38 min   </p>
            
        </div>
    )
}
const AppLayout = () => {
    return (<div className="app-layout"> 
    <Header />
    <Body />
    </div>)
}

// const parent = React.createElement("h1", {}, "Hello world from package react -autorefresh -autosave ")
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />);