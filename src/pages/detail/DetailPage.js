import React from "react";
import style from "./DetailPage.module.css";
const DetailPage = (props) => {
  const DataDetailItem = props.onDataDetail;
  return (
    <div className={style.detailPage}>
      <span>
        <h2>{DataDetailItem.name}</h2>
        <button type="submit">Reserve or Book Now!</button>
      </span>
      <br></br>
      <i className="fa fa-solid fa-phone"></i>
      {` ` + `${DataDetailItem.address}`}
    
      <p style={{color:'blue', padding:'15px 0'} } >{DataDetailItem.price}</p>
      <p style={{color:'green', paddingBottom:'15px'}}>{DataDetailItem.distance}</p>

      <section className={style.image}>
        {DataDetailItem.photos.map((el) => (
          <img src={require(`../../${el}`)} key={el}></img>
        ))}
      </section>
      <section className={style.items}>
        <div className={style.item1}>
          <h2>{DataDetailItem.title}</h2>
          <p>{DataDetailItem.description}</p>
        </div>
        <div className={style.item2}>
          <h3>Perfect for a 9-night stay!</h3>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>

          <h3>${DataDetailItem.nine_night_price} (9 nights)</h3>

          <button type="submit">Reserve or Book Now!</button>
        </div>
      </section>
    </div>
  );
};
export default DetailPage;
