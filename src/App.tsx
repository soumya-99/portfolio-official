import { Link, useRoutes } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import More from "./components/More"
import NotFound from "./components/NotFound"
import Header from "./components/Header"

import { useTheme, useThemeUpdate } from "./context/ThemeProvider"

function App() {
	const darkTheme = useTheme()
	const toggleTheme = useThemeUpdate()

	const themeStyles = {
		backgroundColor: darkTheme ? "#333" : "#ccc",
		color: darkTheme ? "#ccc" : "#333",
		overflow: "scroll",
		padding: "2rem",
	}

	const components = useRoutes([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/skills",
			element: <Skills />,
		},
		{
			path: "/aboutme",
			element: <AboutMe />,
		},
		{
			path: "/projects",
			element: <Projects />,
		},
		{
			path: "/more",
			element: <More />,
		},
		{
			path: "*",
			element: <NotFound />,
		},
	])
	return (
		<div className="container">
			<div className="box header">
				<Header changeThemeButton={() => toggleTheme} />
			</div>
			<div className="box navbar-container">
				<ul className="navbar">
					<li>
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="link" to="/skills">
							Skills
						</Link>
					</li>
					<li>
						<Link className="link" to="/aboutme">
							About Me
						</Link>
					</li>
					<li>
						<Link className="link" to="/projects">
							Projects
						</Link>
					</li>
					<li>
						<Link className="link" to="/more">
							More
						</Link>
					</li>
				</ul>
			</div>
			<div className="box content" style={themeStyles}>
				{components}
			</div>
		</div>
	)
}

export default App
