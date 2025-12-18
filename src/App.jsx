import Aurora from "./components/Aurora.jsx"
import NavBar from "./components/Navbar.jsx"

function App() {
  return (
    <>
      <Aurora
        colorStops={["#3A29FF", "#5143ff", "#000"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      <main>
        <NavBar />
      </main>
    </>
  )
}

export default App
