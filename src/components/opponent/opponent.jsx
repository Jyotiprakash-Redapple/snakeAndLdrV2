import React, { useEffect, useState } from "react";
import style from "./opponent.module.css";

import { useAppContext } from "../../arbitar/context/Provider";
import { gameStatus } from "../../arbitar/context/reducer/constant";
import { useNavigate } from "react-router-dom";

function Opponent({ name, image, imageArray }) {
	const [avtars, setAvtars] = useState(imageArray);
	const [nameOpponet, setNameOpponet] = useState(["avik", "ruhul", "lixa", "ebey"]);
	const { appState, dispatch } = useAppContext();

	const router = useNavigate();
	useEffect(() => {
		if (appState.status === gameStatus.pending) {
			const interval = setInterval(() => {
				setAvtars([...avtars.slice(1), avtars[0]]);
				setNameOpponet([...nameOpponet.slice(1), nameOpponet[0]]); // Rotate avatars
			}, 100);

			return () => clearInterval(interval);
		} else {
			if (appState.status === gameStatus.ongoing) {
				setTimeout(() => {
					router("/game/player", { replace: true });
				}, 2500);
			}
		}
	}, [avtars]);

	return (
		<div className={style.opponent}>
			<div className={style.opponent_wrapper}>
				<div className={style.inner_wrapper}>
					<div className={style.image_wrapper}>
						{appState.status !== gameStatus.pending ? (
							<>
								<img
									src={image}
									width={20}
									height={20}
									alt='image'
									style={{
										width: "72%",
										height: "69%",
										borderRadius: "10px",
										marginBottom: "12px",
									}}
								/>
							</>
						) : (
							<>
								<div className={style.avatar_opponent}>
									{avtars.map((avatar, index) => (
										<img
											key={index}
											src={avatar}
											width={20}
											height={20}
											alt='image'
											style={{
												width: "72%",
												height: "69%",
												borderRadius: "10px",
												marginBottom: "12px",
											}}
										/>
									))}
								</div>
							</>
						)}
					</div>
					<div className={style.name_wrapper}>
						{appState.status !== gameStatus.pending ? (
							<p
								style={{
									color: "#fff",
									whiteSpace: "nowrap",
									width: "60%",
									overflow: "hidden",
									textAlign: "center",
									textOverflow: "ellipsis",
								}}>
								{name}
							</p>
						) : (
							<>
								{nameOpponet.map((el, idx) => {
									return (
										<div key={idx} className={style.name_opponent}>
											<p
												style={{
													color: "#fff",
													whiteSpace: "nowrap",
													width: "60%",
													overflow: "hidden",
													textAlign: "center",
													textOverflow: "ellipsis",
													fontWeight: 600,
													// color: "transparent",
													textShadow: "0 0 5px rgba(0,0,0,0.5)",
												}}>
												{el}
											</p>
										</div>
									);
								})}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Opponent;
