import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis
        fugit, neque assumenda rerum nisi corporis nam? Voluptate minima labore
        sed omnis explicabo? Dolorem, pariatur sint ex maiores soluta magnam?
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HelpLayout;
