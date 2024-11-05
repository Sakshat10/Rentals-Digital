import { Footer, Navbar } from "./components"
import { Home } from "./pages"

function App() {
  return (
    <div className="bg-gradient-to-r from-custom-left to-custom-right">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
