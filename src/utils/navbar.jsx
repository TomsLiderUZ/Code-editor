import uniqueId from "../hooks/useId";
import HomePage from "../pages/home/index";
import ProjectPage from "../pages/project/index";
import NotFoundPage from "../pages/notFound/index";

export const navbar = [
  {
    id: uniqueId,
    title: "Code Editor - Projects",
    path: "/projects",
    element: <HomePage />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Code Editor - Projects",
    path: "/project/:id",
    element: <ProjectPage />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "404 Not Found",
    path: "*",
    element: <NotFoundPage />,
    private: false,
    hidden: false,
  },
];
