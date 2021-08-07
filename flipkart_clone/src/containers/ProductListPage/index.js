import React from "react";
import Layout from "../../components/Layout";
import getParams from "../../utils/getParams";
import Productpage from "./ProductPage";
import ProductStore from "./ProductStore";
import "./style.css";

const ProductListPage = (props) => {
  const renderProduct = () => {
    console.log(props);
    const params = getParams(props.location.search);
    let content = null;
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <Productpage {...props} />;
        break;
      default:
        content = null;
    }
    return content;
  };

  return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;
