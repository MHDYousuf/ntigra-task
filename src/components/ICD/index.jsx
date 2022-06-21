import React from "react";
import "./styles.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function ICD() {
  const items = [
    {
      id: 0,
      name: "E55.9 - Vitamin D deficiency, unspecified",
      code: "E55.9",
      description: "Vitamin D deficiency, unspecified",
      category:'Secondary',
      examine:'Provisional'
    },
    {
      id: 1,
      name: "R05 - Cough",
      code: "R05",
      description: "Cough",
      category:'Secondary',
      examine:'Final'
    },
    {
      id: 2,
      name: "R52 - Pain, unspecified",
      code: "R52",
      description: "Pain, unspecified",
      category:'Secondary',
      examine:'Final'
    },
    {
      id: 3,
      name: "R51 - Headache",
      code: "R51",
      description: "Headache",
      category:'Secondary',
      examine:'Final'
    },
    {
      id: 4,
      name: "E78.0 - Pure hypercholesterolemia",
      code: "E78.0",
      description: "Pure hypercholesterolemia",
      category:'Secondary',
      examine:'Provisional'
    },
  ];

  const [filter, setFilter] = React.useState(items)

  const handleOnSearch = (string, results) => {
    if(string===''){
      setFilter(items)
    }
    else{
    setFilter(results)
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h5>ICDs</h5>
        <div className="col-md-6">
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            fuseOptions={{ keys: ["name", "description"] }}
            placeholder="Type R05 to see functionality.."
            styling={{
              height: "34px",
              border: "1px solid #604a8b",
              borderRadius: "4px",
              backgroundColor: "#fff",
              boxShadow: "none",
              hoverBackgroundColor: "#e79b8e",
              hoverColor:"#fff",
              color: "#604a8b",
              fontSize: "12px",
              iconColor: "#604a8b",
              lineColor: "#604a8b",
              placeholderColor: "#604a8b",
              clearIconMargin: "3px 8px 0 0",
              zIndex: 2,
            }}
          />
        </div>
      </div>
      <div className="col-md-12 mt-2 table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              {['ICD Code','Description','Primary/Secondary','Provisional/Final'].map((item,index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              filter.map((item,index) => (
                <tr key={index}>
                  <td>{item.code}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.examine}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ICD;
