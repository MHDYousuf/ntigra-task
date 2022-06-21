import React from 'react'
import './styles.css'
import axios from 'axios'
import {ReactSearchAutocomplete} from 'react-search-autocomplete'


function NationalityInput() {

  //this API has CORS Policy issue
  const API_URL = 'https://api.first.org/data/v1/countries'

  const [nationality, setNationality] = React.useState([])
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    axios({
      method: 'get',
      withCredentials:false,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*" },
      url: API_URL,
    }).then(response => {
      console.log(response.data);
      setNationality(response.data)
    }).catch(err=>{
      // setError(true)
    })
  }, [])
  

  const items = [
    {
      id: 0,
      name: 'India'
    },
    {
      id: 1,
      name: 'UAE'
    },
    {
      id: 2,
      name: 'USA'
    },
    {
      id: 3,
      name: 'China'
    },
    {
      id: 4,
      name: 'Japan'
    }
  ]

  const handleOnSearch = (string, results) => {
    // console.log(string, results)
  }

  if(error) {
  return <div>Something went wrong.</div>
  }

  return (
    <div>
          <label>Nationality</label>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            placeholder="Type India to see functionality.."
            styling={{
              height: "34px",
              border: "1px solid #604a8b",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "#e79b8e",
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
  )
}

export default NationalityInput