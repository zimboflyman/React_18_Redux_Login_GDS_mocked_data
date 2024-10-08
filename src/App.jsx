import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { Template } from "template";
import { history } from "_helpers";
import { Nav, PrivateRoute } from "_components";
import { Home } from "home";
import { AccountLayout } from "account";
import { UsersLayout } from "users";

export { App };

const headerProps = {
  serviceName: "MOJ - XHIBIT Portals",
};

function App() {
  // init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <Template header={headerProps}>
      <Nav />
      <Routes>
        {/* private */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />

          {/* // Note - This is temp route used only for testing the dummy / mock registration functionality */}
          <Route path="users/*" element={<UsersLayout />} />
        </Route>

        {/* public */}
        <Route path="account/*" element={<AccountLayout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Template>
  );
}
