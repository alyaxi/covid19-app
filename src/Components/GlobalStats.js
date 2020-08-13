import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
  }
}));

export default function GlobalStats() {
  const [GlobalApiData, setGlobalApiData] = useState({});
  useEffect(() => {
    async function covidData() {
      const response = await fetch(
        "https://api.thevirustracker.com/free-api?global=stats"
      );
      let data = await response.json();
      delete data.results[0].source;
      setGlobalApiData(data.results[0]);
      console.log(data.results[0]);
    }
    covidData();
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(GlobalApiData).map((key, ind) => {
            // console.log(key);
          return (
            <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper} elevation={3}>
                <h3 className={classes.title}>{key.replace(/_/g," ")}</h3>
                <h3>{GlobalApiData[key]}</h3>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
