// src/pages/Women.jsx
import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ShirtImage from "../assets/images/ShirtScreenshot.png";
import JoggerImage from "../assets/images/JoggerScreenshot.png";

const products = [
    { id: 5, name: "Shirt 1", type: "Tops", size: "XL", image: ShirtImage },
    { id: 6, name: "Shirt 2", type: "Tops", size: "Large", image: ShirtImage },
    { id: 7, name: "Shirt 3", type: "Tops", size: "Small", image: ShirtImage },
    { id: 8, name: "Pant 1", type: "Bottoms", size: "Medium", image: JoggerImage }
];

const Women = () => {
    const { addToCart } = useContext(CartContext);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedType, setSelectedType] = useState("");

    const filteredProducts = products.filter(product =>
        (selectedSize ? product.size === selectedSize : true) &&
        (selectedType ? product.type === selectedType : true)
    );

    return (
        <div style={{ minWidth: "98vw", minHeight: "100vh", padding: "20px" }}>
            {/* Header Section */}
            <header style={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#333",
                color: "#fff",
                borderRadius: "8px",
                marginBottom: "20px"
            }}>
                <h1 style={{ fontSize: "2.5rem", margin: 0 }}>Women's Collection</h1>
            </header>

            {/* Sidebar Filters & Product List */}
            <div style={{ display: "flex" }}>
                {/* Sidebar Filters */}
                <aside style={{
                    width: "200px",
                    padding: "20px",
                    background: "#f1f1f1",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                }}>
                    <h3>Filter by Size</h3>
                    {["XL", "Large", "Medium", "Small"].map(size => (
                        <button key={size}
                            onClick={() => setSelectedSize(size)}
                            style={{
                                padding: "10px",
                                backgroundColor: selectedSize === size ? "#333" : "#fff",
                                color: selectedSize === size ? "#fff" : "#333",
                                border: "1px solid #333",
                                borderRadius: "5px",
                                cursor: "pointer",
                                textAlign: "left"
                            }}>
                            {size}
                        </button>
                    ))}

                    <h3 style={{ marginTop: "20px" }}>Filter by Type</h3>
                    {["Tops", "Bottoms"].map(type => (
                        <button key={type}
                            onClick={() => setSelectedType(type)}
                            style={{
                                padding: "10px",
                                backgroundColor: selectedType === type ? "#333" : "#fff",
                                color: selectedType === type ? "#fff" : "#333",
                                border: "1px solid #333",
                                borderRadius: "5px",
                                cursor: "pointer",
                                textAlign: "left"
                            }}>
                            {type}
                        </button>
                    ))}

                    <button onClick={() => { setSelectedSize(""); setSelectedType(""); }}
                        style={{
                            marginTop: "20px",
                            padding: "10px",
                            backgroundColor: "#333",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                        Reset Filters
                    </button>
                </aside>

                {/* Product Display */}
                <div style={{ flex: "1", display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                    {filteredProducts.map(product => (
                        <div key={product.id} style={{ background: "#f9f9f9", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
                            <img src={product.image} alt={product.name} style={{ maxWidth: "100%", borderRadius: "8px" }} />
                            <h3>{product.name}</h3>
                            <p>Type: {product.type} | Size: {product.size}</p>
                            <button
                                onClick={() => addToCart(product)}
                                style={{
                                    marginTop: "10px",
                                    padding: "10px 15px",
                                    backgroundColor: "#333",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "5px",
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                    transition: "background 0.3s ease-in-out",
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = "#218838"}
                                onMouseOut={(e) => e.target.style.backgroundColor = "#333"}
                            >
                                Add to Cart 🛒
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Women;