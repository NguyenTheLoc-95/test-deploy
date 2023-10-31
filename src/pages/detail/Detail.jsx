import React from "react";
import DetailPage from "./DetailPage";
import DataDetail from "../../data/detail.json";
import NavBar from "../home/NavBar";
import HomeForm from "../home/HomeForm";
import HomeFooter from "../home/HomeFooter";
import DataFooter from "../../data/footer.json";
import style from "./Detail.module.css";

const Detail = () => {
  //DATA NAVBAR
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
    <div className={style.detail}>
       {/*PHAN NAVBAR */}
      <div className={style.header}>
        <div className={style.item_header}>
          <NavBar onNavBar={navBar} />
        </div>
      </div>
         {/*PHAN DETAILPAGE */}
      <div className={style.detailPage}>
      <DetailPage onDataDetail={DataDetail} /></div>
      <div className={style.header}>
      <div className={style.forms}>
        <HomeForm />
      </div></div>
         {/*PHAN FOOTER*/}
      <div className={style.footer}>
        {DataFooter.map((el) => (
          <HomeFooter
            col_number={el.col_number}
            col_values={el.col_values}
            key={el.col_values}
          />
        ))}
      </div>
    </div>
  );
};

export default Detail;
