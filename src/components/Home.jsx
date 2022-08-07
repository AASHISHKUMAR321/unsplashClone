import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { createApi } from "unsplash-js";
import Card from "./Card";
import CardComponent from "./Card";

const HomeDiv = styled.div`
  width: 98%;

  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  div {
    /* border: 1px solid blue; */
    margin-left: 20px;
    justify-content: center;
    margin-top: 10px;
  }
  img {
    border: 1px solid green;
    width: 100%;
  }
`;

const api = createApi({
  accessKey: "",
  // accessKey: "0Fa3JE_EtqTVBtB7ZwMDYOuwjfJkDhykXtEfXk_oNAA",
});
export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.photos
      .getRandom({ count: 30 })
      .then((result) => {
        setData(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  // localStorage.setItem("random", JSON.stringify(data));
  let random = JSON.parse(localStorage.getItem("random"));
  console.log(random);

  return (
    <HomeDiv>
      {random.response.map((e) => (
        <div>
          <CardComponent url={e} />
        </div>
      ))}
    </HomeDiv>
  );
};
