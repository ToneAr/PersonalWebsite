import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import './CSS/index.css';

import App from './App';
import Home from './Pages/Home/Home';
import ErrorPage from "./Common/ErrorPage";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Blog from "./Pages/Blog/Blog";
import Music from "./Pages/Music/Music";

const router = createBrowserRouter([
	{path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{path: "",
				element: <Home />
			},
			{path: "about",
				element: <About />
			},
			{path: "projects",
					element: <Projects />
			},
			{path: "blog",
					element: <Blog />
			},
			{path: "music",
				element: <Music />
			}
		]
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<RouterProvider router={router} />
);

