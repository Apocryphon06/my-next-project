import Link from "next/link";
import React from "react";
import classes from "./EventItem.module.css";
import Button from "../ui/Button";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(
    date.toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );

  const formattedAddress = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{date}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}> 
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
