import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamCRUD = () => {
    const [drivers, setDrivers] = useState([]);
    const [selectedDrivers, setSelectedDrivers] = useState([]);
    const [teamName, setTeamName] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5000/drivers")
            .then((response) => {
                setDrivers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching drivers:", error);
                setLoading(false);
            });
    }, []);

    const handleDriverSelection = (driverId) => {
        const selectedDriver = drivers.find((driver) => driver._id === driverId);
        if (selectedDriver) {
            setSelectedDrivers([...selectedDrivers, selectedDriver]);
        }
    };

    const handleTeamNameChange = (event) => {
        setTeamName(event.target.value);
    };

    const handleCreateTeam = () => {
        if (selectedDrivers.length === 0) {
            alert("Please select at least one driver.");
            return;
        }
        const newTeam = {
            name: teamName,
            drivers: selectedDrivers.map((driver) => driver._id),
        };
        axios
            .post("http://localhost:5000/teams", newTeam)
            .then((response) => {
                console.log("Team created:", response.data);
                setSelectedDrivers([]);
                setTeamName("");
            })
            .catch((error) => {
                console.error("Error creating team:", error);
            });
    };

    return (
        <div className="team-creation">
            <h2>Create Team</h2>
            {loading ? (
                <p>Loading data...</p>
            ) : (
                <div>
                    <label htmlFor="teamName">Team Name:</label>
                    <input
                        type="text"
                        id="teamName"
                        value={teamName}
                        onChange={handleTeamNameChange}
                    />
                    <ul>
                        {drivers.map((driver) => (
                            <li key={driver._id}>
                                <input
                                    type="checkbox"
                                    id={driver._id}
                                    onChange={() => handleDriverSelection(driver._id)}
                                />
                                <label htmlFor={driver._id}>
                                    {driver.name} - Points: {driver.points}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleCreateTeam}>Create Team</button>
                </div>
            )}
        </div>
    );
};

export default TeamCRUD;
