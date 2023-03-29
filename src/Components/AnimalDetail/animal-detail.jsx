import React from "react";
import './style.css'

const AnimalDetail = ({ nazev, foto }) => {
	return (
		<div className="detail">
			<div className="detail__content">

				<div className="detail__header">
					<img className="detail__image" src={foto} alt={nazev} />
					<div className="detail__title">
						<h2 className="detail__name"><span>{nazev}</span></h2>
						<div className="detail__latin"><span>Loxodonta africana</span></div>
					</div>
				</div>

				<div className="detail__info">
					<p className="detail__desc">
						Typickými znaky největších suchozemských savců jsou kly (přeměněné horní řezáky) a pohyblivý chobot, který vznikl srůstem a prodloužením horního pysku a nosu. Velikosti těla odpovídá i množství potravy, které kolísá od 300 do 450 kg. Samec a samice se setkávají pouze v období páření. Zatímco samci vytvářejí mládenecké skupiny nebo žijí samotářsky, samice společně s mláďaty vytvářejí rodinné klany čítající 20 až 30 zvířat. Mládě přichází na svět po březosti 22 měsíců, měří na výšku 1 m a váží 100 kg. Mateřské mléko pije tlamou, chobot se naučí používat teprve ve 3 měsících.
					</p>

					<div className="detail__items">
						<div className="detail__item">
							<h3>Domovina</h3>
							<p>subsaharská Afrika</p>
						</div>
						<div className="detail__item">
							<h3>Biotop</h3>
							<p>savany, polopouště, pouště</p>
						</div>
						<div className="detail__item">
							<h3>Potrava</h3>
							<p>tráva, listí, větve</p>
						</div>
						<div className="detail__item">
							<h3>Velikost</h3>
							<p>hmotnost 2,7-6,3 t; délka těla 6-7,5 m</p>
						</div>
					</div>

					<div className="detail__zoo">
						<h3>Najdete v těchto ZOO</h3>
						<p>Praha, Dvůr Králové, Olomouc</p>
					</div>
				</div>

			</div>
		</div>
	)
};

export default AnimalDetail;