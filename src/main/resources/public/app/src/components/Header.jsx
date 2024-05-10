import React from 'react';
import '../styles/Header.css';
import NavItem from './NavItem';
import NavItemDropdown from './NavItemDropdown';

const Header = () => {

  return (
   <header>

<header class="page-header">
  <nav>
    <a href="#0" aria-label="forecastr logo" class="logo">
    <div style={{display:"flex",justifyContent:"center",alignContent:"center",fontSize:21,fontWeight:'bold',fontFamily:'cursive'}}>Crud Panel</div></a>
    <ul class="admin-menu">
      <li class="menu-heading">
        <h3>Admin</h3>
      </li>
      <NavItem itemName="Dashboard" />
      <NavItemDropdown itemName="People" dropdownList={[
        { name: "Employees" },
        { name: "Clients" },
        { name: "Contacts" }
      ]} />
      <NavItemDropdown itemName="Globals" dropdownList={[
        { name: "Countries" },
        { name: "States" },
        { name: "Locations" }
      ]} />
      <li class="menu-heading">
        <h3>Settings</h3>
      </li>
      <NavItem itemName="Settings" />
      <NavItem itemName="Options" />
      <NavItem itemName="Charts" />
      <li>
        <div class="switch">
          <input type="checkbox" id="mode" checked />
          <label for="mode">
            <span></span>
            <span>Dark</span>
          </label>
        </div>
        <button class="collapse-btn" aria-expanded="true" aria-label="collapse menu">
          <svg aria-hidden="true">
            <use href="#collapse"></use>
          </svg>
          <span>Collapse</span>
        </button>
      </li>
    </ul>
  </nav>
</header>
<section class="page-content">
  <section class="search-and-user">
    <form>
      <input type="search" placeholder="Search Pages..." />
      <button type="submit" aria-label="submit form">
        <svg aria-hidden="true">
          <use href="#search"></use>
        </svg>
      </button>
    </form>
    <div class="admin-profile">
      <span class="greeting">Hello admin</span>
      <div class="notifications">
        <span class="badge">1</span>
        <svg>
          <use href="#users"></use>
        </svg>
      </div>
    </div>
  </section>
</section>
   </header>
  );
}

export default Header;