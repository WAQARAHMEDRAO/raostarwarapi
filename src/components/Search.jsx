import React, { useEffect, useState } from "react";
const gettingArray = [];
const Search = () => {
  const filPlante = [];

  const cehck = false;
  let name = "";
  let urlPlantes = "https://swapi.dev/api/planets/";
  const fetchingApiData = async (urlp) => {
    try {
      const res = await fetch(urlp);
      const pdata = await res.json();
      const plantess = pdata.results;
      plantess.map((farrayofpalants) => {
        const nmuberOfFilms = farrayofpalants.films;
        if (nmuberOfFilms.length >= 2) {
          const residentarrayslength = farrayofpalants.residents;
          if (residentarrayslength.length > 0) {
            filPlante.push(farrayofpalants);
          }
        }
      });
      filPlante.map((planetshavingtwofilms) => {
        const residentArray = planetshavingtwofilms.residents;
        residentArray.map(async (values) => {
          const pdatas = await fetch(values);
          const pdatajson = await pdatas.json();
          const specieshav = pdatajson.species;
          specieshav.map(async (spicycheck) => {
            const spicesarechecking = await fetch(spicycheck);
            const fettingspicy = await spicesarechecking.json();
            if (fettingspicy.classification == "amphibian") {
              //console.log(planetshavingtwofilms.name);
              // console.log(planetshavingtwofilms);
              gettingArray.push(planetshavingtwofilms);
              // console.log(gettingArray[0].name);
              //name = gettingArray[0].name;
            }
          });
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingApiData(urlPlantes);
  }, []);
  console.log(gettingArray);
  return (
    <>
      <div className="w-4/5 h-96 bg-black ml-auto mr-auto pl-1 pr-1 pt-2 pb-2 border-white border-4 mt-14">
        <div className="w-full h-full p-5 bg-[#3F4045] rounded-lg text-white">
          hi
        </div>
      </div>
    </>
  );
};

export default Search;
