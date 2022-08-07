import React from "react";
import styled from "styled-components";

import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
const LinksDiv = styled.div`
  margin-top: 10px;
  font-size: 15px;
  height: 50px;
  display: grid;
  grid-template-columns: 100px 1px 87%;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;

  div {
    /* border: 1px solid red; */
  }
  .links {
  }
  .line {
    height: 70%;
    background-color: black;
  }
  .edit {
  }
  @media only screen and (min-width: 0px) and (max-width: 375px) {
    .edit {
      display: none;
    }
    .line {
      display: none;
    }
    grid-template-columns: 95%;
  }

  @media only screen and (min-width: 375px) and (max-width: 768px) {
    .edit {
      display: none;
    }
    .line {
      display: none;
    }
    grid-template-columns: 95%;
  }
  @media (max-width: 599.95px) {
    .css-ulxgan-MuiTabs-root .MuiTabs-scrollButtons {
      display: flex;
    }
  }

  .css-1lg11jg-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: black;
  }
  .css-1aquho2-MuiTabs-indicator {
    background-color: black;
  }
`;
export const Links = () => {
  const [value, setValue] = React.useState(0);

  let links = [
    "Editorial",
    "Current Events",
    "Wallpapers",
    "3D Renders",
    "Textures & Patterns",
    "Experimental",
    "Architecture",
    "Nature",
    "Business & Work",
    "Fashion",
    "Film",
    "Food & Drink",
    "Health & Wellness",
    "People",
    "Interiors",
    "Street Photography",
    "Travel",
    "Animals",
    "Spirituality",
    "Arts & Culture",
    "History",
    "Athletics",
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <LinksDiv>
      <div className="edit">{links[0]}</div>
      <div className="line"></div>
      <div className="links">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
            ":disabled": false,
          }}
        >
          {links.map((e) => (
            <Tab
              label={e}
              sx={{ fontSize: 12, fontWeight: 600 }}
              key={Math.random()}
            />
          ))}
        </Tabs>
      </div>
    </LinksDiv>
  );
};
