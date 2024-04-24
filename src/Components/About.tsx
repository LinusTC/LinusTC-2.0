import React from "react";

function About() {
  return (
    <div className="py-8 text-white flex justify-end items-center">
      <div className="space-y-2 pr-4">
        <p className="text-7xl">Hello, I'm Linus!</p>
        <p className="text-6xl">Nice to meet you!</p>
      </div>
      <img
        className="rounded-full"
        src="https://placehold.co/250x250"
      />
    </div>
  );
}

export default About;
