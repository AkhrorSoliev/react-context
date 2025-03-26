import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import MainLayout from "./layouts/MainLayout";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
