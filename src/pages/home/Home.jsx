import React, { useState } from "react";
import styles from "./Home.module.css";
import NavBar from "./NavBar";
import Header from "./Header";
import CityPage from "./CityPage";
import DataCity from "../../data/city.json";
import DataTypeCity from "../../data/type.json";
import DataHotels from "../../data/hotel_list.json";
import DataFooter from "../../data/footer.json";
import CityType from "./CityType";
import CityHotels from "./CityHotels";
import HomeForm from "./HomeForm";
import HomeFooter from "./HomeFooter";

/////-----------------------------
const Home = (props) => {
  const navBar = [
    {
      type: "Stays",
      icon: "fa fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa fa-taxi",
      active: false,
    },
  ];
  
  return (
    <section className={styles.home_page}>
      {/*PHAN HEADER VA NAVBAR*/}
      <div className={styles.header}>
        <NavBar onNavBar={navBar} />
        
        <Header />
      </div>
       {/*PHAN THONG TIN CITY */}
      <div className={styles.citys}>
        {DataCity.map((el) => (
          <CityPage
            key={el.image}
            name={el.name}
            subText={el.subText}
            image={el.image}
          />
        ))}
      </div>
       {/*PHAN TYPE CITY */}
      <div>
        <div className={styles.h2style}>
          <h2>Browse by property type</h2>
        </div>
        <div className={styles.type}>
          {DataTypeCity.map((el) => (
            <CityType
              key={el.image}
              name={el.name}
              count={el.count}
              image={el.image}
            />
          ))}
        </div>
      </div>
       {/*PHAN THONG TIN CAC HOTELS CO LINK DAN DEN /DETAIL */}
      <div>
        <div className={styles.h2style}>
          <h2>Homes guests love </h2>
        </div>
        <div className={styles.hotels}>
          {DataHotels.map((el) => (
            <CityHotels
              city={el.city}
              key={el.image}
              name={el.name}
              image={el.image_url}
              price={el.price}
              rate={el.rate}
              type={el.type}
            />
          ))}
        </div>
      </div>
       {/*PHAN FORM HOME PAGE */}
      <div className={styles.forms}>
        <HomeForm />
      </div>
       {/*PHAN FOOTER */}
      <div className={styles.footer}>
        {DataFooter.map((el) => (
          <HomeFooter
            col_number={el.col_number}
            col_values={el.col_values}
            key={el.col_values}
          />
        ))}
      </div>
    </section>
  );
};
export default Home;
