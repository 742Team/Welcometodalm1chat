import React from "react";
import Dalm1 from "../assets/dalm11.png";

function Main() {
  return (
    <div className="main-content">
      <section className="welcome-section">
        <div className="welcome">
          <img className="imglogo" src={Dalm1} alt="" />
          <h1 className="welcome-section1">Welcome to Dalm1Chat.online!</h1>
        </div>
        <p>
          Dalm1Chat.online is an exciting project aimed at fostering seamless
          and engaging conversations in a secure online environment. Our
          platform brings together individuals from diverse backgrounds,
          offering a space for meaningful connections and vibrant discussions.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission:</h2>
        <p>
          At Dalm1Chat.online, we strive to create a dynamic and inclusive
          community where people can interact, share ideas, and build
          relationships in a safe and respectful atmosphere. Our platform
          emphasizes privacy, security, and user satisfaction, ensuring an
          enjoyable experience for everyone involved.
        </p>
      </section>

      <section className="features-section">
        <h2 className="key-features">Key Features:</h2>
        <div className="feature">
          <h3>Secure Communication:</h3>
          <p>
            Your privacy is our priority. We employ robust security measures to
            safeguard your conversations.
          </p>
        </div>
        <div className="feature">
          <h3>Diverse Communities:</h3>
          <p>
            Explore a wide array of topics and engage in conversations that
            matter to you, from hobbies to serious discussions.
          </p>
        </div>
        <div className="feature">
          <h3>User-Friendly Interface:</h3>
          <p>
            Our platform is designed for ease of use, allowing you to navigate
            and connect effortlessly.
          </p>
        </div>
      </section>

      <section className="join-section">
        <a href="https://dalm1chat.online/">
          <h2 className="key-features">Join Us:</h2>
        </a>
        <p>
          Become part of our growing community today! Sign up and experience the
          joy of connecting with like-minded individuals, sharing experiences,
          and exploring new ideas on Dalm1Chat.online.
        </p>
      </section>

      <section className="get-started-section">
        <h2>Get Started:</h2>
        <p>
          Start your journey with us now and embark on a fulfilling chat
          experience that values your voice and perspective.
        </p>
      </section>
    </div>
  );
}

export default Main;
