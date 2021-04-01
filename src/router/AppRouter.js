import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import GuestRoute from "./GuestRoute";

const AppRouter = () => (
  <Switch>
    <GuestRoute path="/login" exact>
      <LoginPage />
    </GuestRoute>
    <Route path="/" exact>
      <HomePage />
    </Route>
  </Switch>
);

export default AppRouter;
