import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { fontSize } from "@mui/system";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import TableRowsIcon from "@mui/icons-material/TableRows";

const NavDiv = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 70px auto 250px 1% 150px 200px;

  div {
    /* border: 1px solid green; */
  }
  input {
    width: 90%;

    border: none;
    outline: none;
    background-color: #eee;
    font-size: 13px;
  }

  .input {
    border: 1px solid #d1d1d1;
    height: 35px;
    border-radius: 20px;
    background-color: #eee;
    display: grid;
    grid-template-columns: 10px 80% 10%;
    justify-content: center;
    align-items: center;
  }
  .link_1 {
  }

  .link_1 > ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    flex-wrap: nowrap;
  }
  ul {
    font-size: 14px;
    font-weight: 500;
    color: #767676;
  }
  li {
    flex-wrap: nowrap;
  }
  .line {
    width: 1px;
    height: 85%;
    margin: auto;
    background-color: #a8a2a2;
  }
  .button {
    display: grid;
    grid-template-columns: 75% 25%;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  button {
    padding: 5px 8px;
    font-size: 15px;
    border: transparent solid #a8a2a2;
  }
  @media only screen and (min-width: 0px) and (max-width: 375px) {
    grid-template-columns: 80px auto 100px;
    .link_1 {
      display: none;
    }
    .line {
      display: none;
    }
    button {
      display: none;
    }
    .button {
      grid-template-columns: repeat(1, 1fr);
    }
    .focus {
      display: none;
    }
    .input {
      grid-template-columns: 30% 70%;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 768px) {
    grid-template-columns: 80px auto 100px;
    .link_1 {
      display: none;
    }
    .line {
      display: none;
    }
    button {
      display: none;
    }
    .button {
      grid-template-columns: repeat(1, 1fr);
    }
    .focus {
      display: none;
    }
  }
`;

export const Navbar = () => {
  return (
    <NavDiv>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="input">
        <div>
          {" "}
          <SearchIcon fontSize="medium" />
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
          <CenterFocusStrongIcon />
        </div>
      </div>
      <div className="link_1">
        <ul>
          <li>Explore</li>
          <li>Advertise</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="line"></div>
      <div className="link_1">
        <ul>
          <li>Log in</li>
          <li>/</li>
          <li>Sign up</li>
        </ul>
      </div>
      <div className="button">
        <div>
          {" "}
          <button>Submit a photo</button>
        </div>
        <div>
          <TableRowsIcon fontSize="large" />
        </div>
      </div>
    </NavDiv>
  );
};
