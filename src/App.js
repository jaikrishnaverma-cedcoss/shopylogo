import './App.css';
import Body from './component/Body';
import First from './component/First';
import Foot from './component/Foot';
import Nav from './component/Nav';
import {Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Second from './component/Second';
import Thrid from './component/Thrid';
import Fourth from './component/Fourth';

function App() {
  let [state,setState]=useState({
    pageCount:1
  })
  let linker=useNavigate()
  const Updater=(data)=>{
    if(data.pageCount==1)
    linker("/")
    else
    linker("/"+data.pageCount)
    setState({...data})

  }
  return (
    <div className="App">
   <Nav Updater={Updater} state={state}/>
   <div className="row w100 bar" style={{backgroundColor:"#d9d4d4"}}>
      <div className='row c1' style={{width:(100/7*state.pageCount)+"%",padding:"2.5px 0px"}}>
      </div>
    </div>
   {/* <Body/> */}
   <Routes>
    <Route path='/' index element={<First Updater={Updater} state={state}/> }/>
    <Route path='/2' element={<Second Updater={Updater} state={state}/> }/>
    <Route path='/3' element={<Thrid Updater={Updater} state={state}/> }/>
    <Route path='/4' element={<Fourth Updater={Updater} state={state}/> }/>
    <Route path='/6' element={<Body Updater={Updater} state={state}/> }/>

   </Routes>
   <Foot Updater={Updater} state={state}/>
    </div>
  );
}

export default App;
