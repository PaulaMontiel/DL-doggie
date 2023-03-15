import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import context from "../product_context.jsx";

const Product = ({id}) => {
    const productId = useParams(id);
    const { products } = useContext(context);
    const [ product, setProduct ] = useState({});

    const searchProduct = ({ id }) => {
        // eslint-disable-next-line array-callback-return
        products.find((element) => {
            if (element.id === id) {
                setProduct(element);
            }
        });
    };

    useEffect (() => {
        searchProduct(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            <Products product={product}></Products>
        </div>

    )
}
export default Product;