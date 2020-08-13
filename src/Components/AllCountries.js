import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 50,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    color: "#673AB7",
    textTransform: "uppercase"
  },
  table: {
      padding:15
  } 
}));

export default function AllCountries() {
  const [GlobalApiData, setGlobalApiData] = useState([{}]);
  useEffect(() => {
    async function covidData() {
      const response = await fetch(
        "https://api.thevirustracker.com/free-api?countryTotals=ALL"
      );
      let data = await response.json();
      setGlobalApiData(Object.values(Object.values(data.countryitems)[0]));
      console.log(Object.values(Object.values(data.countryitems)[0]));
    }
    covidData();
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <table className={classes.table}>
          <th>Title</th>
          <th>Total Cases</th>
          <th>Total Active Cases</th>
          <th>Total Recovered</th>
          <th>Total Deaths</th>
          <th>Total New Cases Today</th>
          <th>Total Serious Cases</th>
        {GlobalApiData.map((key, ind) => {
            // console.log(key);
          return (

                <tr>
                    <td>{GlobalApiData[ind].title}</td>
                    <td>
                        {GlobalApiData[ind].total_cases}
                    </td>
                    <td>
                        {GlobalApiData[ind].total_active_cases}
                    </td>
                    <td>
                        {GlobalApiData[ind].total_recovered}
                    </td>
                    <td>
                        {GlobalApiData[ind].total_deaths}
                    </td>
                    <td>
                        {GlobalApiData[ind].total_new_cases_today}
                    </td>
                    <td>
                        {GlobalApiData[ind].total_serious_cases}
                    </td>
                    
                </tr>
                
                
        
          );
        })}
      </table>
    </div>
  );
}
