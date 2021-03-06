import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
import DataTable from "Components/DataTable";
import BarChart from "Components/BarChart";
import DonutChart from "Components/DonutChart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">DashBoard DLP</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas as Vendas</h2>
          
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
