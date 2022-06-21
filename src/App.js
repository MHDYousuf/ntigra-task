import "./App.css";
import Complaints from "./components/Complaints";
import ICD from "./components/ICD";
import InputDetails from "./components/InputDetails";
import NationalityInput from "./components/NationalityInput";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <form>
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="row">
                <div className="col-md-9">
                  <InputDetails />
                </div>
                <div className="col-md-3">
                  <NationalityInput />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Complaints />
            </div>
            <div className="col-md-6">
              <ICD />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
