import Navbar from "./components/Navbar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/footer";
import Login from './components/login/login'
import Event from "./components/Event/Event";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Password from "./Password/password";
import Layout from "./components/Layout";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/user-login",
      element: <Login />,
    },
    {
      path: "/enter-password",
      element: <Password />,
    },
    {
      path: "/events-details",
      element: <Event />
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
