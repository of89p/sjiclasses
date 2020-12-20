import React, { useState, useEffect, useRef } from "react";
import Table from "./table";
import Navbar from "./navbar";
import OneClass from "./one_class";
import axios from "axios";

function Home() {
  const [all, setAll] = useState(0);
  const [all_array, setAll_array] = useState([]);
  const [loading, setLoading] = useState(false);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
        isFirstRun.current = false;
        return;
    }

    for (var i = 0; i < all_classes.length; i++) {
      let new_arr = organise_class(all_classes[i]);
      setAll_array(oldArray => [...oldArray, new_arr]);
    }
  }, [all]);

  const organise_class = (class_given) => {
    let arr = [class_given, []];
    for (var i = 0; i < all.length; i++) {
      var obj = all[i];
      if (obj.new_class == class_given) {
        arr[1].push(obj);
      }
    }
    return arr;
  };

  const isFirstRunAll_array = useRef(true);
  useEffect(() => {
    if (isFirstRunAll_array.current) {
        isFirstRunAll_array.current = false;
        return;
    }

    if(all_array.length == 20){
        setLeft(all_array.slice(0, 10));
        setRight(all_array.slice(10, 20));
        setLoading(true);
    }
  }, [all_array]);

  const get_data = () => {
    axios
      .get(`https://thebuses.000webhostapp.com/random/sjiclasses/all`)
      .then((response) => {
        setAll(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    get_data();
  }, []);

  const all_classes = [
    "FN 501",
    "FN 502",
    "FN 503",
    "FN 504",
    "FN 505",
    "LE 506",
    "LE 507",
    "LE 508",
    "LE 509",
    "LE 510",
    "ML 511",
    "ML 512",
    "ML 513",
    "ML 514",
    "ML 515",
    "MN 516",
    "MN 517",
    "MN 518",
    "MN 519",
    "MN 520",
  ];

  if(loading){
    return (
        <React.Fragment>
        <Navbar />
        <br />
        <br />
        <div className="container">
            {/* <Table/> */}
            <div className="row">
            <div className="grid-example col s12 m6 l6">
                {left.map(arr => (
                    <OneClass new_class={arr[0]} data={arr[1]}/>
                ))}
            </div>

            <div className="grid-example col s12 m6 l6">
                {right.map(arr => (
                    <OneClass new_class={arr[0]} data={arr[1]}/>
                ))}
            </div>
            </div>
        </div>

        <div className="fixed-action-btn">
            <a className="btn-floating btn-large red" href="/add">
            <i className="large material-icons">add</i>
            </a>
        </div>
        </React.Fragment>
    ) 
  } else {
    // Page is still loading
    return(
        <React.Fragment>
            <Navbar />
            <br />
            <br />
            <div className="container">
                <h1>All the classes</h1>

                <br/><br/><br/><br/><br/>

                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
        
            </div>

            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red" href="/add">
                <i className="large material-icons">add</i>
                </a>
            </div>
        </React.Fragment>
    );
  }
}

export default Home;
