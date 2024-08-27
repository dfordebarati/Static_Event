import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Refined Gatherings</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receive news and updates!</p>
        </div>
      </div>
      {/* Adding the new line */}
      <div className="credits">
        <p>Made with <span role="img" aria-label="heart">❤️</span> by Debarati</p>
      </div>
    </footer>
  );
};

export default Footer;
