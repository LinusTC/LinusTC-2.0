import ProfilePic from '../Assets/Me.jpg';

function About() {
  return (
    <div className="text-white flex justify-center items-center z-30">
      <div className="space-y-2 pr-4">
        <div className="flex items-center text-6xl">
          <p className="">Hello, I'm&nbsp;</p>
          <p className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
            Linus
          </p>

          <p>!</p>
        </div>
        <p className="text-5xl">Nice to meet you!</p>
      </div>
      <img className=" w-96 rounded-full" src={ProfilePic} />
    </div>
  );
}

export default About;
