import "./weapons.css"
import { weaponsInfo } from "../data/weaponsInfo.js";

export default function Weapons() {

    return (

        <div className="weapons_page">

            <div className="weapon_info_container">
                <h2>Weapons</h2>
                <p>Here you can see the characteristics of each weapon in the game</p>
            </div>

            <div className="weapons_grid">
                { weaponsInfo.map((weapons) => (
                    <div key={weapons.id}>
                        <h2>{weapons.name}</h2>
                        <p>Price: {weapons.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}