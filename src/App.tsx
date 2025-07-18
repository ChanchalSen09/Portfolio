import Routers from "./routes/Router";
import "./styles/stars.css";

function App() {
  return (
    <>
      <div className="relative">
        <div className="z-0 star-bg" />
        <div className="relative z-10">
          <Routers />
        </div>
      </div>
    </>
  );
}

export default App;
