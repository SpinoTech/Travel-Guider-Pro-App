import React from "react";
import "./PlaceStyle.css";
import ReactStars from "react-rating-stars-component";

export default function PlaceDetails({ details }) {
  // console.log(details);
  return (
    details.name && (
      <div className="card">
        <img
          src={
            details.photo
              ? details.photo.images.original.url
              : "https://wingandaprayerdotlive.files.wordpress.com/2018/07/no-image-available.jpg"
          }
          alt=""
        />

        <div id="nameRat">
          <h1>{details.name}</h1>
          <ReactStars value={details.rating} edit={false} size="30px" classNames="stars"/>
        </div>

        <div className="variety">
          {details.cuisine &&
            details.cuisine.map((e, i) => {
              return (
                <div className="small_card" key={i}>
                  {e.name}
                </div>
              );
            })}
        </div>

        {/* for mobile animation */}
        {details.phone && (
          <div className="mobile">
            <a href={`tel:${details.phone}`} className="mobile">
              <span className="icon-phone trin-trin"></span>
              <p>{details.phone}</p>
            </a>
          </div>
        )}
        {/* for email */}
        {details.email && (
          <div className="mobile">
            <a href={`mailto:${details.email}`} class="mobile">
              <span className="icon-email trin-trin"></span>
              <p>{details.email}</p>
            </a>
          </div>
        )}

        {details.price && (
          <div className="pricing">
            <h1>Pricing : </h1>
            <p>{details.price ? details.price : "N/A"}</p>
          </div>
        )}

        <div className="rowDetails">
          <h1>Ranking : </h1>
          <p>{details.ranking ? details.ranking : "N/A"}</p>
        </div>

        <div className="rowDetails">
          <h1>Address : </h1>
          <p>{details.address ? details.address : "N/A"}</p>
        </div>

        <div className="rowDetails ">
          {details.website && (
            <a
              href={details.website}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <button>website</button>
            </a>
          )}
          {details.web_url && (
            <a
              href={details.web_url}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <button>web review</button>
            </a>
          )}
          {details.write_review && (
            <a
              href={details.write_review}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <button>write review</button>
            </a>
          )}
        </div>
      </div>
    )
  );
}
