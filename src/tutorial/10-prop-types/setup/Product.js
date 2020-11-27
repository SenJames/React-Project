import React from "react";
import PropTypes from "prop-types";
import Images from "../../../assets/default-image.jpeg";

const Product = ({ image, price, name }) => {
  console.log(image, price, name);
  //using the better means via short circuit to check if image exist or not.

  const imgLink = image && image.url;
  return (
    <article className="product">
      <img src={imgLink || Images} />
      <p>{name}</p>
      <p>${price || 3.99}</p>
    </article>
  );
};

//A way to check the api ...
Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

//A way to assign defaullt after checking ...
// Product.defaultProps = {
//   name: "default name",
//   price: 3.0,
//   image: "",
// };

export default Product;
