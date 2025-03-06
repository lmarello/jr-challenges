import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChallengeLayout from "./layouts/ChallengeLayout";
import { routes } from "./constants/routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ Component, goal, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <ChallengeLayout
                challenge={<Component />}
                goal={goal}
                challengeId={path}
              />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
