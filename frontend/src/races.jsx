import React, { useState, useEffect } from "react";
import axios from "axios";

const Races = () => {
    const [races, setRaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5000/races")
            .then((response) => {
                console.log("Races data:", response.data);
                setRaces(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching races:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div
            className="races-container"
            style={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f9f9f9",
            }}
        >
            <h1
                style={{
                    marginBottom: "20px",
                    fontSize: "24px",
                    color: "#1a8b9d",
                    fontSize: "50px",
                }}
            >
                Races
            </h1>
            {loading ? (
                <p style={{ textAlign: "center", 
                            fontSize: "18px", 
                            color: "#555" }}>
                    Loading...
                </p>
            ) : Array.isArray(races) && races.length > 0 ? (
                <ul style={{ listStyleType: "none", padding: "0" }}>
                    {races.map((rac) => (
                        <li
                            key={rac._id}
                            style={{
                                marginBottom: "15px",
                                padding: "10px",
                                borderRadius: "4px",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "#fff",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    marginRight: "10px",
                                }}
                            >
                                {rac.date}
                            </span>{" "}
                            -
                            <span>
                                {rac.teams &&
                                    rac.teams.length > 0 &&
                                    rac.teams.map((team, index) => (
                                        <span key={index}>
                                            {index !== 0 && " vs "}
                                            {team.name}
                                        </span>
                                    ))}
                            </span>
                            <span style={{ marginLeft: "10px" }}>
                               Winner:{rac.winner ? rac.winner.name : "N/A"}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ textAlign: "center", 
                            fontSize: "18px", 
                            color: "#555" }}>
                    No races available
                </p>
            )}
        </div>
    );
};

export default Races;