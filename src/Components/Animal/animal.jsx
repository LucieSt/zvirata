import React from "react";
import './style.css'

const Animal = ({ nazev, nazevLatinsky, foto, onClicking }) => {
	return (
		<div className="animal" onClick={() => onClicking(nazev)}>
			<div className="animal__image">
				<img src={foto} alt={nazev} />
			</div>
			<div className="animal__desc">
				<div className="animal__name">{nazev}</div>
				<div className="animal__latin">{nazevLatinsky}</div>
			</div>
		</div>
	)
};

export default Animal;