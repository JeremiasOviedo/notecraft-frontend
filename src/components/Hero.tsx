import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex justify-center items-center place-space-around bg-gradient-to-r from-gray-700 via-gray-900 to-black m-0 pt-[160px] pb-[100px]  ">
      
      <div className="flex flex-col flex-1 m-0">
        <span className="font-sans font-bold text-[40px] text-white text-center m-2">
          <h1>Capture ideas, shape your thoughts.</h1>
        </span>
        <span className="font-sans font-bold text-[50px] text-center text-white m-2 ">
          <h1>Welcome to Notecraft.</h1>
          
        </span>
        <span className='font-sans font-bold text-[22px] text-center m-2'>
        <Button to="/a">Get Started!</Button>
        </span>
      </div>
      <div className="flex flex-1 justify-center m-0">
        <div className='flex flex-1 2xl:w-[540px] 2xl:h-[540px] md:w-[500px] md:h-[500px] justify-center '>
        <img src='hero-svg.svg' alt= 'notecraft' ></img>
        </div>
          
      </div>
    </div>
  );
};

export default Hero;
