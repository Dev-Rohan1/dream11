import logo from "../assets/logo-footer.png";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span style={{ display: "block", marginTop: "50px" }}></span>
        <img
          style={{ display: "block", margin: "auto" }}
          src={logo}
          alt="logo"
        />
        <div className="footer_wrapper">
          <div>
            <h3>About Us</h3>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h3>About Us</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3>Subscribe</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="subcribe">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
