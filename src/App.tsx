import Main from "./components/Main";

function App() {
  return (
    <div className="h-screen overflow-y-hidden relative ">
      <img
        className="absolute -top-5 w-full"
        src="/top-image.svg"
        alt="top-bg-img"
      />

      <Main />
      <img
        className="absolute -bottom-16 w-full"
        src="/bottom-image.svg"
        alt="bottom-bg-img"
      />
    </div>
  );
}

export default App;
