import React from 'react'

const Home = () => {
  return (
    <div className="cooking-pale">
      <div>
        <header className="navbar-header">
          <div>
            <img src={pic1} alt="cookpal" />
          </div>
          <div className='search-Container'>
            <div className='search-bar'>
              <input type="search" placeholder='Search for recipe....' onChange={(e) => setId(e.target.value)} />
              <FaSearch className='icon' onClick={() => Hit()} />
            </div>
          </div>
          <nav className='navbar'>
            <ul className="navbar-menu">
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/explore">Explore</NavLink></li>
              <li><NavLink to="/help">Help</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </header>
        <div className="slides">
          <ImageSlider />
        </div>
        <div className='section-btn'>
          <Button
            text="Recipe & Menu"
            onClick={handleClick}
            style={{ backgroundColor: '#f5794c', color: 'white', padding: '20px 20px', border: 'none', borderRadius: '5px', fontSize: '18px', width: '100%', height: '60px' }}
          />
          <Button
            text="Share your Recipe"
            onClick={handleClick}
            style={{ backgroundColor: '#c4d600', color: 'white', padding: '20px 20px', border: 'none', fontSize: '18px', borderRadius: '5px', width: '100%', height: '60px' }}
          />
          <Button
            text="Custom meal plan"
            onClick={handleClick}
            style={{ backgroundColor: '#ebac00', color: 'white', padding: '1px 20px', fontSize: '18px', border: 'none', width: '100%', height: '60px', borderRadius: '5px' }}
          />
          <Button
            text="Create grocery list"
            onClick={handleClick}
            style={{ backgroundColor: '#ed8a00', color: 'white', padding: '20px 20px', fontSize: '18px', textAlign: 'center', border: 'none', width: '100%', height: '60px', borderRadius: '5px' }}
          />
          <Button
            text="Cooking tips and tricks"
            onClick={handleClick}
            style={{ backgroundColor: '#84bd00', fontSize: '18px', color: 'white', padding: '20px 20px', border: 'none', width: '100%', height: '60px', borderRadius: '5px' }}
          />
        </div>
        <div className='main-section'>
          <div style={{ display: 'flex', flexDirection: 'row', placeItems: 'center', flexWrap: "wrap", gap: 60 }}>
            {menu.length > 0 ? (
              menu.map((item, index) => (
                <div key={index} className='cards'>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '100%', height: '200px',
                        marginTop: '10px',
                        padding: '8px',
                        borderRadius: '15px',
                      }}
                    />
                  )}
                  <p className='para'>Dairy Free</p>
                  <p className='para'>{item.name}</p>
                  <p className='para' style={{ fontSize: '17px', color: 'red' }}>{item.cookTimeMinutes} min</p>
                </div>
              ))
            ) : (
              <p>Loading recipes...</p>
            )}
          </div>
          <div className='loadmore'>
            <ButtonLoad
              text="Load More"
              onClick={handleClick}
              style={{
                backgroundColor: '#519e2f', color: 'white', padding: '10px 20px', border: 'none', fontSize: '18px', borderRadius: '5px', width: '40%', height: '50px', marginTop: '50px', marginLeft: '17rem'
              }}
            />
          </div>
          <div className='footer'>
            <div>
              <img src={pic1} alt="cookpal" style={{ width: '100px' }} />
              <p className='footer-para'>Cookpal is a recipe website with a wide variety of delicious recipes, easy-to-use search function. Join our community and let's cook together!</p>
            </div>
            <div className='list-footer'>
              <h3>Company</h3>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/explore">Explore</NavLink></li>
                <li><NavLink to="/team">Team</NavLink></li>
                <li><NavLink to="/about">About us</NavLink></li>
                <li><NavLink to="/activity">Activity</NavLink></li>
              </ul>
            </div>
            <div className='resourse-footer'>
              <h3>Resources</h3>
              <ul>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/use-cases">Use Cases</NavLink></li>
                <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                <li><NavLink to="/insights">Insights</NavLink></li>
              </ul>
            </div>
            <div className='contact'>
              <img src={pic1} alt="cookpal" style={{ width: '100px' }} />
              <p className='footer-para'>Ut risus mattis interdum faucibus facilisi. Facilisi purus accumsan aliquam.</p>
              <div className='search-bar-footer'>
                <input type="search" placeholder='Search ....' />
                <FaSearch className='icon-footer' />
              </div>
            </div>
          </div>
          <div className='soical-media-icon'>
            <FaFacebook />
            <FaTwitterSquare />
            <FaLinkedin />
            <FaInstagramSquare />
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '-2rem' }}>
          <span><p>copyright@cookingpole.ca</p></span>
        </div>
        </div>
        </div>

  )
}

export default Home;
