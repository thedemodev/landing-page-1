import * as React from "react";
import { Button } from "./Button";
import * as styles from './style'

export const PriceBox: React.StatelessComponent<{
  imgSrc: string,
  title: string,
  list: Array<string>
  price: any
  
}> = ({
  imgSrc, title, list, price
}) => (
  <li >
    <div>
      <div className="images">
        <img src={imgSrc} alt="" />
      </div>
      <h5>{title}</h5>
      <ul>
        {list.map((e, ind) => (
          <li key={ind + 100}>{e}</li>
        ))}
      </ul>
    </div>
    <div>
      <span className="line">
        <b>Price</b>
      </span>
      <div className="price">
        {price}$<span>/month</span>
      </div>
      <Button className={styles.Button} >
        Coming Soon
      </Button>
    </div>
  </li>
);
