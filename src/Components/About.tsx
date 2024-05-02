import React from "react";

function About() {
  return (
    <div className="text-white flex justify-center items-center">
      <div className="space-y-2 pr-4">
        <p className="text-6xl">Hello, I'm Linus!</p>
        <p className="text-5xl">Nice to meet you!</p>
      </div>
      <img className=" w-96 rounded-full" src="src\Assets\Me.jpg" />
    </div>
  );
}

export default About;
