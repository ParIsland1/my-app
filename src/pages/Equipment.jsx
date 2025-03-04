import React, { useState, useEffect } from "react";
import ShirtImage from "../assets/images/ShirtScreenshot.png";
import JoggerImage from "../assets/images/JoggerScreenshot.png";

const Equipment = () => {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const API_KEY = "66ThsseWiyNF1uhOOLKh+Q==RgSp092kLtq5Fdgl"; 
        const API_URL = "https://api.api-ninjas.com/v1/exercises?muscle=chest";

        fetch(API_URL, {
            headers: { "X-Api-Key": API_KEY }  
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("API Data:", data); 
                setExercises(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching exercises:", error);
                setLoading(false);
            });
    }, []);


    return (
        <div style={{ minWidth: "98vw", minHeight: "100vh", padding: "20px", }}>
            <header style={{ textAlign: "center", marginBottom: "30px", backgroundColor: "#333", color: "#fff" }}>
                <h1 style={{ fontSize: "2.5rem" }}>Equipment</h1>
                <p style={{ fontSize: "1.2rem", }}>Portable and effective tools/accessories for strength training.</p>
            </header>

            <main style={{ backgroundColor: "white", display: "flex", rowGap: "10px" }}>

                <div style={{ flex: "1 1 calc(33.333% - 20px)", background: "#f9f9f9", padding: "20px", borderRadius: "8px", textAlign: "center", margin: "10px" }}>
                    <img
                        src={ShirtImage}
                        alt="Lifting Equipment"
                        style={{ maxWidth: "100%", borderRadius: "8px" }}
                    />
                    <h3 style={{ margin: "15px 0", fontSize: "1.5rem" }}>Shirt 1</h3>
                    <p style={{ color: "#777" }}>Portable and effective tools/accessories for strength training.</p>
                    <button
                        type="submit"
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#333",
                            marginTop: "50px",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Add to Cart
                    </button>
                </div>

                <div style={{ flex: "1 1 calc(33.333% - 20px)", background: "#f9f9f9", padding: "20px", borderRadius: "8px", textAlign: "center", margin: "10px" }}>
                    <img
                        src={ShirtImage}
                        alt="Lifting Equipment"
                        style={{ maxWidth: "100%", borderRadius: "8px" }}
                    />
                    <h3 style={{ margin: "15px 0", fontSize: "1.5rem" }}>Shirt 2</h3>
                    <p style={{ color: "#777" }}>Portable and effective tools/accessories for strength training.</p>
                    <button
                        type="submit"
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#333",
                            marginTop: "50px",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
                <div style={{ flex: "1 1 calc(33.333% - 20px)", background: "#f9f9f9", padding: "20px", borderRadius: "8px", textAlign: "center", margin: "10px" }}>
                    <img
                        src={JoggerImage}
                        alt="Lifting Equipment"
                        style={{ maxWidth: "100%", borderRadius: "8px" }}
                    />
                    <h3 style={{ margin: "15px 0", fontSize: "1.5rem" }}>Pant 1</h3>
                    <p style={{ color: "#777" }}>Portable and effective tools/accessories for strength training.</p>
                    <button
                        type="submit"
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#333",
                            marginTop: "50px",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </main>

            <footer style={{ marginTop: "50px", textAlign: "center", padding: "20px 0", backgroundColor: "#333", color: "#fff" }}>
                <p style={{ margin: "0" }}>© 2025 RHŌMĒ FITNESS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Equipment;