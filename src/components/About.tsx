const About = () => {
  return (
    <div id="about" className="flex p-0 flex-1 h-full bg-white mt-8 mb-6 md:p-10 sm:p-6 shadow-inner-md snap-center ">
      <div className=" flex flex-col flex-grow-0 shadow-2xl 2xl:mx-60 self-center 2xl:flex-row lg:flex-row">
        <div
          className="flex grow w-full p-5 text-white justify-between gap-0"
          style={{ backgroundImage: "url(/background.jpg)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="flex"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          <div className='flex flex-col items-center justify-center w-full  lg:hidden xl:flex-col lg:flex-col md:flex-col sm:flex-col'>
            <span className="flex justify-center text-center font-sans font-bold text-[42px] sm:text-[60px]">About</span>
            <span className='flex  justify-center text-center font-sans font-bold text-[42px] sm:text-[60px]'>Notecraft</span>
          </div>
        </div>
        <div className="flex flex-col self-center">
          <span className="font-mono font-medium hidden text-4xl text-center mt-10 lg:block">
            <h1>About Notecraft</h1>
          </span>
          <span className='font-sans text-xl mx-5 my-10 text-justify'>
          This app consists of a note-keeper where you can create your own notes
          and save them. 
          <br/>
          <br/>
          Maybe its an important thought, a shopping list, or
          even a cooking recipe your grandma taught you. Anything—you can save
          it in this app. You can even add categories to them and file them away
          when you don't need them.
          <br/>
          <br/>
          This is an application made by me, Jeremias Oviedo, as part of a
            small project that I'm working on. This project doesn't have any
            other value than my own learning and enjoyment, and its purpose is
            to be a playground where I can learn things and apply them.
        </span>
        </div>
      </div>
    </div>
  );
};

export default About;
