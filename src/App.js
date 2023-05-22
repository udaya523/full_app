import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Home from "./components/home"; // Import the Home component
// import reactRouterDom from "react-router-dom";
import Charts from "./components/Charts";
import Reports from "./components/Reports"

function App() {
  const [signupData, setSignupData] = useState([]);

  const handleSignup = (data) => {
    setSignupData([...signupData, data]);
    console.log('Signupdata:', signupData);
  };

  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/signup">
            <Signup handleSignup={handleSignup} />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login signupData={signupData} />
          </Route>
          <Route path="/charts">
            <Charts/>
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Header from "./components/Header";
// import Home from "./components/home";

// function App() {
//   const [signupData, setSignupData] = useState([]);

//   const handleSignup = (data) => {
//     setSignupData([...signupData, data]);
//     console.log('Signupdata:', signupData);
//   };

//   return (
//     <Router>
//       <Header />
//       <div>
//         <Switch>
//           <Route path="/signup">
//             <Signup handleSignup={handleSignup} />
//           </Route>
//           <Route exact path="/">
//             <Login />
//           </Route>
//           <Route path="/home">
//             <Home />
//           </Route>
//           <Redirect to="/home" /> {/* Add a redirect route to handle unknown routes */}
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
