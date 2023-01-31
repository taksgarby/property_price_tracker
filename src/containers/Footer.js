import React from "react";
import styled from "styled-components";

const BottomFooter = styled.div`
  background-color: #5F9EA0;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  bottom: 0;
  padding: 0.5rem;
  position: absolute;
`;

const Footer = () => {
  return (
    <BottomFooter>
      <p>Copyright &copy; Takako Onozuka</p>
    </BottomFooter>
  );
};

export default Footer;
