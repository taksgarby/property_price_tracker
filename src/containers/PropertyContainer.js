import React from "react";
import Header from "../components/navigation/Header";
import SearchBar from "../components/SearchBar";
import Footer from "./Footer";

const PropertyContainer = () => {
    return ( 
        <>
        <Header />
        <h2>This is the Container</h2>
        <SearchBar />
        <Footer />
        </>
     );
}
 
export default PropertyContainer;