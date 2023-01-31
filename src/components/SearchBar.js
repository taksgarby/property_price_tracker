import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  height: 6rem;
`;

const SearchBar = () => {
    
  
    return (
      <SearchBarContainer>

        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "5px",
            },
            width: { lg: "500px", xs: "400px", xl: "1100px" },
            backgroundColor: "#fff",
            borderRadius: "4px",
          }}
          height="76px"
          value={""}
          placeholder="Town Name"
          type="text"
        />
        <Button
          sx={{
            bgcolor: "gray",
            "&hover": { backgroundColor: "yellow" },
            color: "skyblue",
            textTransform: "none",
            width: { lg: "100px", xs: "80px", xl: "100px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "relative",
            right: 1,
            marginLeft: 3,
          }}
        >
          Search
        </Button>
 
      </SearchBarContainer>
    );
  };
  
  export default SearchBar;
  