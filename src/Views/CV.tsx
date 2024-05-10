import LinusCV from '../Assets/LinusCV.pdf';

function CV() {
  return (
    <>
      <iframe
        src={LinusCV}
        className="w-full h-screen"
      ></iframe>
    </>
  );
}

export default CV;
