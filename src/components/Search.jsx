import React from "react";
import styled from "styled-components";
import earth from "../img/earth.jpg";
import SearchIcon from "@mui/icons-material/Search";

import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";

const SearchDiv = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 550px;
  }

  .container {
    position: relative;
  }
  .elem {
    position: absolute;
  }

  .container {
    position: relative;
    text-align: center;
    color: white;
  }

  .centered {
    width: 65%;
    position: absolute;
    top: 45%;
    left: 52%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    font-size: 19px;
    .title {
      font-size: 47px;
      font-weight: 700;
    }

    div {
      text-align: start;
      display: flex;
      align-items: center;
      margin-top: 10px;
    }
    input {
      width: 100%;
      border: none;
      outline: none;
      background-color: #eee;
      font-size: 13px;
    }
    .input {
      border: 1px solid #d1d1d1;
      border-radius: 5px;
      background-color: #eee;
      display: grid;

      grid-template-columns: 5% 88% 5%;
      justify-content: center;
      align-items: center;
      color: #706868;
      div {
        /* border: 1px solid green; */
        height: 80%;
        margin-top: 0px;
      }
    }
  }
  .centered > .last {
    font-size: 15px;
  }
  @media only screen and (min-width: 0px) and (max-width: 375px) {
    img {
      width: 100%;
      height: 200px;
    }
    .centered {
      width: 90%;
      grid-template-rows: repeat(2, 1fr);
      font-size: 13px;

      .title {
        font-size: 30px;
        font-weight: 600;
      }
    }
    .centered > .input {
      display: none;
    }
    .centered > .last {
      display: none;
    }
  }

  @media only screen and (min-width: 375px) and (max-width: 768px) {
    img {
      width: 100%;
      height: 350px;
    }
    .centered {
      width: 90%;
      grid-template-rows: repeat(2, 1fr);
      font-size: 15px;
      .title {
        font-size: 40px;
        font-weight: 600;
      }
    }
    .centered > .input {
      display: none;
    }
    .centered > .last {
      display: none;
    }
  }
`;

export const Search = () => {
  return (
    <SearchDiv>
      {/* <div classNameName="container">
        <img src={earth} alt="" />
        <div classNameName="elem">Unsplash</div>
      </div> */}
      <div className="container">
        <img src={earth} alt="Snow"></img>
        <div className="centered">
          <div className="title"> Unsplash</div>
          <div className="text">
            The internet’s source of freely-usable images. <br />
            Powered by creators everywhere.
          </div>

          <div className="input">
            {/* <input type="text" placeholder="search here" /> */}
            <div>
              {" "}
              <SearchIcon fontSize="large" />
            </div>
            <div>
              {" "}
              <input
                type="text"
                placeholder="Search free  high-resolution photos"
              />
            </div>
            <div className="focus">
              {" "}
              <CenterFocusStrongIcon fontSize="large" />
            </div>
          </div>
          <div className="last">
            {" "}
            Trending: Flower, Wallpapers, Backgrounds, HappyLove
          </div>
        </div>
      </div>
    </SearchDiv>
  );
};
