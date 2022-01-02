import { StrictMode, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
//import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),

//     // ...[1,2,3,4].map(
//     //     (i) => [
//     //         React.createElement("h2", {}, i),
//     //         React.createElement("h3", {}, i+1)
//     //     ]
//     // ),

//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),

//     React.createElement(Pet, { name: "Tuffy", animal: "Cat", breed: "Jungle" }),

//     React.createElement(Pet, {
//       name: "Pepsi",
//       animal: "Hamster",
//       breed: "Rodent",
//     }),
//   ]);
// };

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1 id="my-brand">Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
        {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Truffy" animal="Cat" breed="Jungle" />
      <Pet name="Pepsi" animal="Hamster" breed="Rodent" /> */}
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
