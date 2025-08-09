import React, { useEffect, useState } from 'react';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CategoryPage } from './pages/CategoryPage';
import { WelcomeMessagePage } from './pages/WelcomeMessagePage';
import { GuildPrefixPage } from './pages/GuildPrefixPage';
import { GuildContext } from './utils/contexts/GuildContext';
import { AppBar } from './components/AppBar';
import { useFetchUser } from './utils/hooks/fetchUser';

function App() {
  const [guildId,setGuildId] = useState('111');
  const {user, loading, err} = useFetchUser();

  const updateGuildId = (id:string)=>setGuildId(id);
  if(err){
    return <div>Error: {err}</div>;
  }
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div style={{
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #1160e9ff', 
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          animation: 'spin 1s linear infinite'
        }}>
        </div>
      </div>
    );
  }

  return (
   <GuildContext.Provider value={{guildId:guildId,updateGuildId}}>
   {user?<>
    <Routes>
      <Route path="/dashboard/*" element={<AppBar/>}/>
    </Routes>
      <Routes>
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard/categories" element={<CategoryPage/>} />
        <Route path="/dashboard/prefix" element={<GuildPrefixPage/>} />
        <Route path="/dashboard/message" element={<WelcomeMessagePage/>} />
      </Routes></>:<>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      </>}
   </GuildContext.Provider>
  );
}

export default App;
