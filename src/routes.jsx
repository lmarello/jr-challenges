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
              <ChallengeLayout challengeComponent={<Component />} goal={goal} />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
