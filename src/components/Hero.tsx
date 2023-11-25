import Button from "./Button";

const Hero = () => {
  return (
    <div className=" flex place-content-between bg-gradient-to-r from-gray-700 via-gray-900 to-black h-1/2 pt-36 m-0 w-full p-36">
      <div className="flex flex-col flex-1">
        <span className="font-sans font-bold text-[40px] text-white">
          <h1>Capture ideas, shape your thoughts.</h1>
        </span>
        <span className="font-sans font-bold text-[50px] text-center text-white ">
          <h1>Welcome to Notecraft.</h1>
        </span>
      </div>
      <div className="flex flex-col flex-1">
        <span className="font-sans text-[18px] text-white">
          This app consists of a note-keeper where you can create your own notes
          and save them. 
          <br/>
          Maybe it's an important thought, a shopping list, or
          even a cooking recipe your grandma taught you. Anything—you can save
          it in this app. You can even add categories to them and file them away
          when you don't need them.
        </span>
        <span className="text-center">
            <Button to="/a">Get Started!</Button>
        </span>
      </div>
    </div>
  );
};

export default Hero;
