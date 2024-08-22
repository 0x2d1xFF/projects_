import '../src/App.css'

function Nav() {

  return (
    <>
      <nav className='navbar'>
        <div className='nav-head'>
          <div className="left-header">
              <ul>
                <a href="https://seller.shopee.ph/"><li>Seller Center</li></a>
                <div className='divider'></div>
                <a href="https://shopee.ph/seller/signup"><li>Start Selling</li></a>
                <div className='divider'></div>
                <a href="https://shopee.ph/web/"><li>Download</li></a>  
              </ul>
            </div>
            <div className='right-header'>
              <ul>
                <a href="">
                  <li>Sign Up</li>
                </a>
                <div className='divider'></div>
                <a href="">
                  <li>Log in</li>
                </a>
              </ul>
            </div>
        </div>
        <div className='search'>
          <input className='searchbox' type='text' placeholder='Sign up and get 100% off on your first order.'/>
          <a href="">Search</a>
        </div>
        
      </nav>
      <div>
        
      </div>
    </>
  )
}

export default Nav
