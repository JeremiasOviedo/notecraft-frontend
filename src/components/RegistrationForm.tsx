const RegistrationForm = () => {
  return (
    <form className ='w-full'>
    <div className="w-full h-auto bg-transparent p-4 flex items-center justify-center my-18" >
      <div className="bg-white sm:max-w-md w-full flex flex-col mt-28 p-4">
        <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-400 mb-12">
          Sign Up
        </div>
        <div className="">
          <div>
            <input
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder="First Name "
            />
          </div>
          <div>
            <input
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
              placeholder="Last Name "
            />
          </div>
          <div>
            <input
              type="email"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Email Adress "
            />
          </div>
          <div>
            <input
              type="email"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Confirm Email "
            />
          </div>
          <div className="">
            <input
              type="password"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Password "
            />
          </div>
          <div className="">
            <input
              type="password"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Confirm Password "
            />
          </div>
          <div className="flex">
            <input type="checkbox" className="border-sky-400 " value="" />
            <div className="px-3 text-gray-500">
              I accept terms & conditions
            </div>
          </div>
          <div className="flex justify-center my-6">
            <button className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-400  to-slate-600 text-white text-lg font-semibold ">
              Create Account
            </button>
          </div>
          <div className="flex justify-center ">
            <p className="text-gray-500">Already have an account? </p>
            <a href="" className="text-sky-600 pl-2">
              {" "}
              Sign In
            </a>
          </div>
        </div>
      </div>
      </div>
      </form>

  );
};

export default RegistrationForm;
