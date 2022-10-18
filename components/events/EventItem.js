import Link from "next/link";
import React from "react";
import classes from "./EventItem.module.css";

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
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{date}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div>
          <Link href={exploreLink}> Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
