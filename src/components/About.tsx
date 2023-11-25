const About = () => {
  return (
    <div className="flex flex-col flex-1 h-full bg-white mt-12 mb-6 p-20 shadow-inner-md">
      <div className=" flex shadow-2xl ml-60 mr-60 self-center 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col ">
        <div
          className="w-full p-10 text-white"
          style={{ backgroundImage: "url(background.jpg)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </div>
        <div className="flex flex-col self-center">
          <span className="font-mono text-4xl text-center mt-5">
            <h1>About Notecraft</h1>
          </span>
          <span className="font-sans text-xl m-5 text-center">
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
