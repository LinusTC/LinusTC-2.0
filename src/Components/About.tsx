import React from "react";

function About() {
  return (
    <div className="py-8 text-white flex justify-center items-center">
      <div className="space-y-2 pr-4">
        <p className="text-6xl">Hello, I'm Linus!</p>
        <p className="text-5xl">Nice to meet you!</p>
      </div>
      <img
        className="rounded-full"
        src="https://placehold.co/250x250"
      />
    </div>
  );
}

export default About;
