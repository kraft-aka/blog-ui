import React from "react";
import "./About.scss";

export default function About() {
  return (
    <article className="about-container">
      <h1 className="about-title">Welcome to bLogIn!</h1>
      <p className="about-content">
        At <b>bLogIn</b>, we believe that everyone has a story to tell, and we
        provide a platform for you to share your thoughts, ideas, and
        experiences with the world. This isn't just a blog – it's a community of
        passionate writers, thinkers, and storytellers coming together to
        inspire and be inspired.
      </p>
      <h4 className="about-content-header">Why bLogIn?</h4>
      <p className="about-content">
        We understand that the power of words goes beyond individual
        experiences. By creating an account on bLogIn, you become part of a
        vibrant community where diversity of thought is celebrated. Whether
        you're a seasoned writer or someone taking their first steps into the
        world of blogging, you're welcome here.
      </p>
      <h4 className="about-content-header">What You Can Do:</h4>
      <ul>
        <li className="about-list-item">
          Share Your Stories: Write about your adventures, reflections, or any
          topic close to your heart. Your voice matters, and there's an audience
          eager to hear it.
        </li>
        <li className="about-list-item">
          Engage with Others: Connect with fellow writers by reading and
          commenting on their blogs. Engage in conversations, offer insights,
          and build a network of like-minded individuals.
        </li>
        <li className="about-list-item">
          Find Inspiration: Discover a wealth of perspectives and ideas. Whether
          you're seeking inspiration for your next blog post or simply looking
          to expand your horizons, bLogIn is the place to be.
        </li>
      </ul>
      <h4 className="about-content-header">Join Us Today:</h4>
      <p className="about-content">
        Creating an account is simple and free. Start your blogging journey with
        bLogIn and become part of a community that values the power of words and
        the stories that connect us all.
      </p>
      <div className="about-nav-back">
        <p>Back</p>
      </div>
    </article>
  );
}
