import { Route, Routes } from "react-router-dom";
import AppShellContainer from "./components/mantineContainer/AppShellContainer";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Manager from "./page/manager/Manager";
import Employee from "./page/employee/Employee";
import Task from "./page/task/Task";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppShellContainer />
          </ProtectedRoute>
        }
      >
        <Route index element={<Manager />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/task" element={<Task />} />
      </Route>
    </Routes>
  );
}

export default App;
