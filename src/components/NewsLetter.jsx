const NewsLetter = () => {
  return (
    <section className="newstletter">
      <div className="container">
        <div className="newsletter_content">
          <h1>Subscribe to our Newsletter</h1>
          <p>Get the latest updates and news right in your inbox!</p>
          <div className="newsletter_box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
