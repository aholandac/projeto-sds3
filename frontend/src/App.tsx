import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
import DataTable from "Components/DataTable";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary"></h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
