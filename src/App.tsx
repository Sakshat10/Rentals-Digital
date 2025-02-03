import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
	About,
	// Acquisition,
	Contact,
	Home,
	NewsSingle,
	Platform,
} from "./pages";

function App() {
	return (
		<Router>
			<div className="bg-gradient-to-r from-custom-left to-custom-right min-h-screen">
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/platform"
						element={<Platform />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					{/* <Route path="/acquisition" element={<Acquisition/>} /> */}
					<Route
						path="/news/:id"
						element={<NewsSingle />}
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
