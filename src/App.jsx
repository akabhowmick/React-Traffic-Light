import { ClassTrafficLight } from "./ClassTrafficLight";
import { FunctionalTrafficLight } from "./FunctionalTrafficLight";

function App() {
  const calcNextColor = (currentColor) => {
    if (currentColor === "red") {
      return "green";
    } else if (currentColor === "yellow") {
      return "red";
    } else if (currentColor === "green") {
      return "yellow";
    }
    return "black";
  };

  return (
    <>
      <main>
        <h1>Traffic light App</h1>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight nextColor={calcNextColor} />
          </div>
          <div className="right">
            <ClassTrafficLight nextColor={calcNextColor} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
