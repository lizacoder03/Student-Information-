import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <StudentList />
      </main>

      <Footer />
    </div>
  );
}

export default App;