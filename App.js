import "./App.css";

import React from "react";
import Box from "@mui/material/Box";
import { appWrapper } from "@styles/styles";
import AppNavMenu from "./components/navigation/AppNavMenu";
import AppContentArea from "./components/AppContentArea";  
import SearchContext from "./context/SearchContext";
  
function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [search, setSearch] =React.useState("Javascript");
  const handleDrawerToggle = () =>{
    setMobileOpen((v) => !v);
  };
  const onSearch = val => {
    setSearch(val)
  }
  
  return (
    <Box sx={appWrapper}>
      <SearchContext.Provider value={{
        searchText: search,
        onSearch: onSearch,
      }}>
        <AppNavMenu handleDrawerToggle={handleDrawerToggle}/>
        <AppContentArea isOpen={mobileOpen}/>
        </SearchContext.Provider>
    </Box>
  );
}

export default App;
