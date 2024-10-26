import { toast } from "react-toastify";
import hero_logo from "../assets/banner-main.png";

const Hero = ({ coin, setCoin }) => {
  const addCoinHandler = () => {
    setCoin(coin + 500000);
    toast.success("Credit Add Your Account");
  };

  return (
    <section>
      <div className="container">
        <div className="hero_content">
          <img src={hero_logo} alt="hero_logo" />
          <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p>Beyond Boundaries Beyond Limits</p>
          <button onClick={addCoinHandler}>Claim Free Credit</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
