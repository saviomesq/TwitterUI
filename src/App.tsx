import "./global.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { AppRoutes } from "./Routes/Routes";
function App() {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <AppRoutes />
        <div className="content"></div>
      </div>
    </>
  );
}

export default App;
