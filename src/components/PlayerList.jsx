import { useState } from "react";
import PlayerItem from "../data/PlayerData.json";
import { FaRegUserCircle } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { toast } from "react-toastify";

const PlayerList = ({ count, setCount, coin }) => {
  console.log(PlayerItem);
  const [player, setPlayer] = useState(true);

  const playerBtnClickHnadler = () => {
    setPlayer(!player);
  };

  return (
    <section>
      <div className="container">
        <div className="available_title">
          {player ? (
            <h1>Available Players</h1>
          ) : (
            <h1>Selected Player {count}/7</h1>
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
            {" "}
            <div className="player_list">
              {PlayerItem.map((player) => {
                return (
                  <div
                    onClick={() =>
                      count <= 6 ? setCount(count + 1) : setCount(7)
                    }
                    className="player_card"
                    key={player.id}
                  >
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
                        onClick={() =>
                          coin > player.price
                            ? toast.success("Player Add Successfully")
                            : toast.error("Insufficient Balance")
                        }
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
        )}
      </div>
    </section>
  );
};

export default PlayerList;
