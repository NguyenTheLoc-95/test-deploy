import React from "react";
import styles from './SearchList.module.css'
import SearchListItem from "./SearchListItem";

const SearchList = (props) => {
const isDataSearch = props.onDataSearch
  return (
    <div>
      {isDataSearch.map((el) => (
        <SearchListItem
          name={el.name}
          distance={el.distance}
          tag={el.tag}
          type={el.type}
          description={el.description}
          freeCancel={el.free_cancel}
          price={el.price}
          rate={el.rate}
          rateText={el.rate_text}
          image={el.image_url}
        />
      ))}
    </div>
  );
};
export default SearchList;
