function Spa() {
  return (
    <HashRouter>
      <NavBar/>
     
    <script src="https://unpkg.com/react/umd/react.development.js" crossOrigin></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossOrigin></script>
    <script src="https://unpkg.com/react-router/umd/react-router.min.js" crossOrigin></script>
    <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js" crossOrigin></script>

      
        <div className="container" style={{padding: "20px"}}>
          <UserContext.Provider value={{users:[{name:'Dave',email:'Dave@Davescape.com',password:'secret',balance:1000}]}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
          </UserContext.Provider>
        </div>
            
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
