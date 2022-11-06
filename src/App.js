import React, { useEffect, useState } from 'react';
// import './App.css';

 import {
   BrowserRouter as Router,
   Switch,
   Route,
  
 } from "react-router-dom";
 import Login from './Components/Login/Login/Login';
 import Register from './Components/Login/Login/Register';

 import Navbar from './Components/Navbar/Navbar';

 import useFirebase from './Hooks/UseFirebase';
 //import Welcome from './Components/Welcome/Welcome';
import ComplainBox from './Components/ComplainBox/ComplainBox';
import Notification from './Components/Notification/Notification';
import Reply from './Components/Reply/Reply';
import Admin from './Components/Admin/Admin';
import NewMessage from './Components/NewMessage/NewMessage';
import NoticeForm from './Components/Admin/NoticeForm/NoticeForm';
import Notices from './Components/NoticeBoard/Notices';

function App() {
  const {users}=useFirebase()
  const [admin,setAdmin]=useState([])
  //const [checkEmail,setCheckEmail]=useState({})
  let s={}
  const data=admin.map(x=>{
    return s=x;
  })
  //const p=data.filter((d)=>d.email===users.email)
  //console.log(p)
  //console.log(s)
  //console.log(users)
  useEffect(()=>{
    fetch('http://localhost:5000/admin')
    .then(res=>res.json())
    .then(data=>{
      setAdmin(data)
      //console.log(data)
    })
  },[])
  return (
    <div className="App">
    
       <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"> {users.email? <ComplainBox/> :<Login/>}  </Route>
          <Route  path="/register"> <Register/> </Route>
        {s.email===users.email && <Route path="/admin-notification">  <Notification/> </Route>}
          <Route path="/complain"> <ComplainBox/> </Route>
          <Route path="/reply/:id"> <Reply/> </Route>
          <Route path="/makeadmin"> <Admin/></Route>
          <Route path="/notification"> <NewMessage/>  </Route>
          <Route path="/notice"> <Notices/> </Route>
          {s.email===users.email &&<Route path="/noticeform"> <NoticeForm/> </Route>}
           {/* <PrivateRoute path="/addbook"><AddBook/>  </PrivateRoute> 
          <Route exact path="/booklist"><StudentTable/>  </Route>
          <Route  path="/lists/:id"> <BookIssueForm/> </Route>
          <Route path="/recivebookissue"> <BookacceptableTable/> </Route>
          <Route path="/makeadmin"> <MakeAdmin/> </Route>
          <Route path="/recicve/:id"> <RecieveBookForm/> </Route> */}
                  </Switch>
      </Router> 
      

    </div>
  );
}

export default App;
