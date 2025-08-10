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
import { Spinner } from './utils/styles';

function App() {
  const [guildId,setGuildId] = useState('111');
  const {user, loading, err} = useFetchUser();

  const updateGuildId = (id:string)=>setGuildId(id);
  // if(err){
  //   return <div>Error: {err.message || 'Something went wrong'}</div>;
  // }
  if (loading) {
    return <Spinner />;
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
        <Route path='*' element={<HomePage/>} />
      </Routes>
      </>}
   </GuildContext.Provider>
  );
}

export default App;
