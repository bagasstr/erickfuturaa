import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  useEffect(() => {
    const handlePopState = () => {
      window.history.pushState(null, document.title, "/");
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const { nama } = useParams();
  return <div>ProductDetail</div>;
};

export default ProductDetail;
