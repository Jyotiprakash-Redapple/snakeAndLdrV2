import React from "react";
import style from "./player.module.css";

function Player({ name, image }) {
	return (
		<div className={style.player}>
			<div className={style.player_wrapper}>
				<div className={style.inner_wrapper}>
					<div className={style.image_wrapper}>
						<img
							src={image}
							width={20}
							height={20}
							alt="image"
							style={{
								width: "72%",
								height: "69%",
								borderRadius: "10px",
								marginBottom: "12px",
							}}
						/>
					</div>
					<div className={style.name_wrapper}>
						<p
							style={{
								whiteSpace: "nowrap",
								width: "60%",
								overflow: "hidden",
								textAlign: "center",
								textOverflow: "ellipsis",
							}}>
							{name}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Player;
