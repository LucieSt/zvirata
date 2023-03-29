import React from "react";
import './style.css'

const Animal = () => {
	return (
		<div className="animal">
			<div className="animal__image">
				<img src="images/slon.jpg" alt="slon" />
			</div>
			<div className="animal__desc">
				<div className="animal__name">Slon africký</div>
				<div className="animal__latin">Slonus Africanus</div>
			</div>
		</div>
	)
};

export default Animal;