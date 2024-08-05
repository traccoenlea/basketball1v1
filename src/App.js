import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="appContainer">
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
