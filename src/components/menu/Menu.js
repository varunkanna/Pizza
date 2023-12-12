import React from "react";
import "./Menu.css";

const Menu = () => {
  const arr = [
    {
      menu: "Barbecue Pizza",
      price: "$8",
      status: 0
    },
    {
      menu: "Chicken Breast",
      price: "$12",
      status: 0
    },
    {
      menu: "Greek Pizza",
      price: "$15",
      status: 0
    },
    {
      menu: "Triple Crown",
      price: "$4",
      status: 0
    },
    {
      menu: "Pepperoni",
      price: "$11",
      status: 0
    },
    {
        menu:'Paneer Makhani Pizza',
        price: '$45',
        status: 1
    },
    {
        menu:'Mexican Green Wave',
        price: '$30',
        status: 1
    }
  ];
  return (
    <div className="menu-box">
      <p className="menu-box-hd">
        <i className="i-color">Pizza</i> menu
      </p>
      {arr.map((val) => {
        return (
          <div className="menu-list" style={val.status == 1 ? {backgroundColor: '#a68462'} : {}}>
            <p>{val.menu}</p>
            <p>
              <i className="i-color">{val.price}</i>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
