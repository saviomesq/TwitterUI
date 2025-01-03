import { Routes, Route } from "react-router";
import { Timeline } from "../pages/Timeline/Timeline";
import { Status } from "../pages/Status/Status";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Timeline />} />
      <Route path="/tweet" element={<Status />} />
    </Routes>
  );
};
