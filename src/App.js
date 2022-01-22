import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AllPlaces from "./places/pages/AllPlaces";
// import NewPlace from "./places/pages/NewPlace";
// import UpdatePlace from "./places/pages/UpdatePlace";
// import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "./shared/context/auth-context";

// import Auth from "./users/pages/Auth";
// import Users from "./users/pages/Users";

const AllPlaces = React.lazy(() => import("./places/pages/AllPlaces"));
const UpdatePlace = React.lazy(() => import("./places/pages/UpdatePlace"));
const NewPlace = React.lazy(() => import("./places/pages/NewPlace"));
const UserPlaces = React.lazy(() => import("./places/pages/UserPlaces"));
const Auth = React.lazy(() => import("./users/pages/Auth"));
const Users = React.lazy(() => import("./users/pages/Users"));

function App() {
  const authCtx = useContext(AuthContext);

  let routes;

  if (authCtx.token) {
    routes = (
      <Routes>
        <Route path="/" element={<AllPlaces />} />
        <Route path="/users" element={<Users />} />
        <Route path="/all-places" element={<AllPlaces />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />

        <Route path="*" element={<AllPlaces />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<AllPlaces />} />
        <Route path="/all-places" element={<AllPlaces />} />
        <Route path="/users" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Users />} />
      </Routes>
    );
  }

  return (
    <Router>
      <MainNavigation />
      <main>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          {routes}
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
