import React from "react";
import "./index.css"
import axios from "axios";

function MainPage() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(function() {
        axios
        .get("https://aef4bec0-ebc3-46ff-8f96-43ffa332b789.mock.pstmn.io/products")
        .then(function (result){
            const products = result.data.products;
            setProducts(products);
        })
        .catch(function (error) {
            console.error("에러 발생 : ", error);
        });
    }, []);
    return(    
        <div>
            <header>
                <div id="header">
                    <img src="\img\logo.png" alt="LOGO"/>
                </div>
            </header>
            <article>
                <div id = "article">
                    <div id = "banner">
                        <img src="\img\banner1.png" alt="BANNER"/></div>
                    <h1>판매되는 상품들</h1>
                    <div id = "product-list">
                        {products.map(function (product, index){
                            return (
                                <div className = "product-card">
                                    <div>
                                        <img className="product-img" src={product.imageUrl}/>
                                    </div>
                                    <div className = "product-contents">
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-price">{product.price}원</span>
                                        <div className="product-seller">
                                            <img className="product-avatar" src="img/avatar.png"/>
                                        <span>{product.seller}</span>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </article>
            <footer></footer>
        </div>
    );
}

export default MainPage;