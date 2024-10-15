import { Link, Routes, Route } from "react-router-dom";
import Products from "../Components/Data/Products";
import "./navbar.css";
import { MdAccountCircle } from "react-icons/md";
import { LuShoppingBasket } from "react-icons/lu";


import { useState } from "react";
export default function Navbar() {
  const [isActive, setIsActive] = useState(0);
  
  const linksArr = [
    {
        id: 1,
        to: "/home",
        name: "Home",
    },
    {
        id: 2,
        to: "/men'sclothing",
        name: "men's clothing",
    },
    {
        id: 3,
        to: "women'sclothing",
        name: "women's clothing",
    },
    {
        id: 4,
        to: "/jewelery",
        name: "jewelery",
    },
    {
        id:5,
        to: "/electronics",
        name: "electronics",
    }
  ];
  const toggleClass = (index)=> {
    setIsActive(index === isActive? null : index)
  }

  return (
    <div className="navbar-conatainer">
        <div className="links-container">
        {linksArr.map((link ,index) => (
            <Link
            to={link.to} 
            key={link.id}
            className={index === isActive? "navbar-link-active" : "navbar-link"}
            onClick={() => toggleClass(index)}
            >
            {link.name}
            </Link>
            ))}
        </div>
        <div className="navbar-acount-basket">
            <MdAccountCircle className="acount-icone"/>
            <div className="basket-container">
                 <LuShoppingBasket className="basket-icone"/>
                 <p>(0)</p>
            </div>
        </div>
    </div>
  );
}
