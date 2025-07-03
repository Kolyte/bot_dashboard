import React, { useState } from 'react';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CategoryPage } from './pages/CategoryPage';
import { WelcomeMessagePage } from './pages/WelcomeMessagePage';
import { GuildPrefixPage } from './pages/GuildPrefixPage';
import { GuildContext } from './utils/contexts/GuildContext';
import { AppBar } from './components/AppBar';

function App() {
  const [guildId,setGuildId] = useState('111');
  const updateGuildId = (id:string)=>setGuildId(id);
  return (
   <GuildContext.Provider value={{guildId:guildId,updateGuildId}}>
    <Routes>
      <Route path="/dashboard/*" element={<AppBar/>}/>
    </Routes>
      <Routes>
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard/categories" element={<CategoryPage/>} />
        <Route path="/dashboard/prefix" element={<GuildPrefixPage/>} />
        <Route path="/dashboard/message" element={<WelcomeMessagePage/>} />
      </Routes>
   </GuildContext.Provider>
  );
}

export default App;
