import { useState } from "react";
import PlayerItem from "../data/PlayerData.json";
import { FaRegUserCircle } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const PlayerList = ({ count, setCount, coin, setCoin }) => {
  const [player, setPlayer] = useState(true);
  const [selecetPlayer, setSelectPlayer] = useState([]);

  const playerBtnClickHnadler = () => {
    setPlayer(!player);
  };

  const playerCardHandler = (player, price) => {
    setCoin(coin - price);

    if (coin > player.price && count < 6) {
      toast.success("Player Add Successfully");
    } else if (coin < player.price) {
      toast.error("Not Insufficient Balance");
    }

    if (count === 6) {
      toast.error("player full");
    } else {
      if (coin > player.price) {
        count <= 5 ? setCount(count + 1) : setCount(6);
      }
    }

    if (coin <= player.price) {
      toast.error("Not Insufficient Balance");
      setCoin(coin);
    } else {
      setSelectPlayer([...selecetPlayer, player]);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="available_title">
          {player ? (
            <h1>Available Players</h1>
          ) : (
            <h1>Selected Player {count}/6</h1>
          )}
          <div className="available_btn">
            <span
              className={player ? "active" : ""}
              onClick={playerBtnClickHnadler}
            >
              Available
            </span>
            <span
              className={!player ? "active" : ""}
              onClick={playerBtnClickHnadler}
            >
              Seleceted {count}
            </span>
          </div>
        </div>
        {player ? (
          <>
            <div className="player_list">
              {PlayerItem.map((player) => {
                return (
                  <div className="player_card" key={player.id}>
                    <img src={player.image} alt="player" />
                    <h3>
                      <FaRegUserCircle />
                      {player.name}
                    </h3>
                    <div className="player_info">
                      <div className="player_country">
                        <FaFlag />
                        <span>{player.country}</span>
                      </div>
                      <p>{player.player_type}</p>
                    </div>
                    <span className="divider"></span>
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
                      {player.rating}
                    </p>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between ",
                        margin: "10px 0px",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>Hand:</span>{" "}
                      {player.hand}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>price</span>: $
                        {player.price}
                      </p>
                      <button
                        onClick={() => playerCardHandler(player, player.price)}
                        style={{
                          background: "none",
                          border: "1px solid rgba(19, 19, 19, 0.1) ",
                          padding: "5px 10px",
                          borderRadius: "3px",
                          cursor: "pointer",
                          margin: "10px 0px",
                        }}
                      >
                        Choose Player
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div>
            <ul className="seleceted_player">
              {selecetPlayer.map((player) => {
                return (
                  <li key={player.id}>
                    <div className="sinagle_player">
                      <img src={player.image} alt="" />
                      <div>
                        <b style={{ display: "block" }}>{player.name}</b>
                        <span>{player.hand}</span>
                      </div>
                    </div>
                    <FaTrash />
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => setPlayer(!player)}
              style={{
                background: "rgb(231, 254, 41)",
                padding: "10px 15px",
                border: "0",
                outline: "0",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add More Player
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlayerList;
