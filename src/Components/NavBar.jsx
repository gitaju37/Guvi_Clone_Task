
const NavBar = () => {
  return (
      <>
          <nav className="nav-container">
              <div className="brand-container">
                  <img src="https://pbs.twimg.com/profile_images/1652250013030928384/yBoC-f0K_400x400.jpg" alt="" style={{ width:"50px", height:"50px" } }/>
                  <span style={{fontSize:"larger",fontWeight:"650",padding:"5px"}}>GUVI</span></div>
              <div className="search-bar" style={{ width: "65%", marginLeft:"10px" }}>
                  <div style={{marginLeft:"20px", fontSize:"larger",fontWeight:"500"}}><span>Blog</span></div>
                  <div style={{ marginLeft: "20px" }}> <form className="" role="search">
                      <input className="" type="search" placeholder="What do you want to read?" aria-label="Search" style={{ width: "500px",height:"50px" }} />
                      <button className="btn btn-outline-success" type="submit" style={{ marginLeft: "20px",height:"50px",width:"100px" }}>Search</button>
                  </form></div>
              </div>
              <div className="" style={{ width: "25%",height:"50px" }}>
                  <button type="button" className="btn btn-success" style={{width:"200px",height:"50px" }}>Sign Up</button>
              </div>
          </nav>
    </>
  )
}

                       
                     
export default NavBar
