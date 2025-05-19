const Footer = () => {
  return (
    <footer style={{ background: "#000", color: "#fff" }}>
      <div className="banner">
        <div className="title">
          <h1>Refined Gatherings</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div className="footer-input">
            <input
              type="text"
              placeholder="E-mail"
              style={{
                color: "#fff",
                background: "#222",
                border: "1px solid #fff",
                padding: "8px",
                outline: "none",
              }}
            />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receive news and updates!</p>
        </div>
      </div>
      <div className="credits">
        <p>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by Debarati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
