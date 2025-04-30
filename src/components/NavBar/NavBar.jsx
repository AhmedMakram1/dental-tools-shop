import React, { useState } from 'react';
import logo from '../../assets/images/logo.jpeg'; // تأكد من مسار الصورة

const Navbar = () => {
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* الصف العلوي (دائم الظهور) */}
        <div className="d-flex justify-content-between w-100 align-items-center">
          
          {/* الجزء الأيسر: اللوجو وزر القائمة */}
          <div className="d-flex align-items-center">
            <button 
              className="navbar-toggler me-2 d-lg-none p-0 border-0" 
              type="button"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              style={{boxShadow: 'none'}}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <span className='text-success'>IN Stock</span>
            <img  width={40} height={40} src={logo} alt="logo" />
          </div>
           {/* شريط البحث في نسخة سطح المكتب */}
        <div className="d-none d-lg-flex mx-auto" style={{width: '50%'}}>
          <div className="input-group">
            <input 
              className="form-control" 
              type="search" 
              placeholder="Search..." 
              aria-label="Search"
              style={{borderRadius: '20px 0 0 20px', fontSize: '14px'}}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              className="btn btn-outline-secondary" 
              type="button"
              style={{borderRadius: '0 20px 20px 0', borderLeft: 'none'}}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

          {/* الجزء الأيمن: تسجيل الدخول والعربة */}
          <div className="d-flex align-items-center">
            <a className="nav-link px-2" href="#" style={{fontSize: '14px', color: '#333'}}>
              Sign in
            </a>
            <a className="nav-link px-2" href="#" style={{fontSize: '14px', color: '#333'}}>
              Cart
            </a>
          </div>
        </div>

        {/* شريط البحث (يظهر دائماً في الموبايل تحت الصف العلوي) */}
        <div className="w-100 mt-2 d-lg-none">
          <div className="input-group">
            <input 
              className="form-control" 
              type="search" 
              placeholder="Search..." 
              aria-label="Search"
              style={{
                borderRadius: '20px',
                height: '36px',
                fontSize: '14px',
                border: '1px solid #ddd'
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              className="btn btn-outline-secondary position-absolute end-0" 
              type="button"
              style={{
                border: 'none',
                background: 'transparent',
                zIndex: 5,
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              <i className="bi bi-search" style={{fontSize: '14px'}}></i>
            </button>
          </div>
        </div>

        {/* قائمة الجوال (تحتوي على الدعم) */}
        <div className={`collapse navbar-collapse ${showMobileMenu ? 'show' : ''}`} id="navbarContent">
          <div className="d-lg-none mt-3">
            <div className="nav-item">
              <button 
                className="nav-link dropdown-toggle w-10 text-start ps-0 d-flex justify-content-between align-items-center"
                onClick={() => setShowSupportDropdown(!showSupportDropdown)}
                style={{color: '#333', fontSize: '14px'}}
              >
                Support
                <i className={`bi bi-chevron-${showSupportDropdown ? 'up' : 'down'}`}></i>
              </button>
              
              <div className={`dropdown-menu ${showSupportDropdown ? 'show' : ''} w-10 border-0 shadow-none`}>
                <div className="d-flex align-items-center px-3 py-2">
                  <i className="bi bi-whatsapp text-success me-2"></i>
                  <a href="https://wa.me/20123456789" className="text-decoration-none" style={{fontSize: '14px'}}>0123456789</a>
                </div>
                <div className="dropdown-divider my-1"></div>
                <div className="d-flex align-items-center px-3 py-2">
                  <i className="bi bi-telephone-fill text-primary me-2"></i>
                  <a href="tel:0123456789" className="text-decoration-none" style={{fontSize: '14px'}}>0123456789</a>
                </div>
              </div>
            </div>
          </div>
        </div>

       

        {/* قائمة سطح المكتب */}
        <div className="d-none d-lg-flex align-items-center">
          <div className="dropdown">
            <button 
              className="nav-link mx-2 dropdown-toggle bg-transparent border-0"
              onClick={() => setShowSupportDropdown(!showSupportDropdown)}
              style={{fontSize: '14px', color: '#333'}}
            >
              Support
            </button>
            
            <div className={`dropdown-menu ${showSupportDropdown ? 'show' : ''}`} style={{right: 0, left: 'auto'}}>
              <div className="d-flex align-items-center px-3 py-2">
                <i className="bi bi-whatsapp text-success me-2"></i>
                <a href="https://wa.me/20123456789" className="text-decoration-none" style={{fontSize: '14px'}}>0123456789</a>
              </div>
              <div className="dropdown-divider my-1"></div>
              <div className="d-flex align-items-center px-3 py-2">
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                <a href="tel:0123456789" className="text-decoration-none" style={{fontSize: '14px'}}>0123456789</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;