import Countdown from "./Countdown";

const Main = () => {
  const targetDate = new Date("02 01 2025");

  return (
    <main className="h-full  lg:gap-28  gap-20 flex items-center px-5 justify-center">
      <div className="flex flex-col gap-5 items-center lg:pl-12">
        <h1 className="p-2 font-bold uppercase text-violet-500 lg:text-4xl text-2xl  tracking-wider mb-3">
          Ready to launch in...
        </h1>

        <Countdown targetDate={targetDate} />

        <p className="text-center text-slate-400 mt-5 lg:text-base text-sm">
          Sign up to find out more about the launch
        </p>

        <button className="bg-violet-500 lg:w-36 w-28 lg:py-2 py-1.5 rounded-xl  text-white mt-2 ">
          Sign up
        </button>
      </div>
      <div className="hidden md:block">
        <img
          className="object-contain lg:max-w-full md:max-w-sm"
          src="/rocket.svg"
          alt="rocket"
        />
      </div>
    </main>
  );
};

export default Main;
