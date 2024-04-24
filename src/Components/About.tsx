import React from "react";

function About() {
  return (
    <div className="py-8 text-white flex">
      <div className="space-y-2 pr-4">
        <p className="text-4xl">Hello, I'm Linus! Nice to meet you!</p>
        <p className="text-lg text-justify">
          I am a third year CS student at the University of Edinburgh. I specialize in full stack development, with additional interests in data science and AI.
        </p>
        <p className="text-lg text-justify">
          As a hobby, I enjoy streaming myself playing video games and editing videos. Feel free to reach out!
        </p>
      </div>
      <img
        className="rounded-full"
        src="https://placehold.co/250x250"
      />
    </div>
  );
}

export default About;
