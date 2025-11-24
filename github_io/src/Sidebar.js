import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="Sidebar">
      <nav>
        <ul>
          <li><a href="/" className="Sidebar-link">Home</a></li>
          <li><a href="/about" className="Sidebar-link">About</a></li>
          <li><a href="/links" className="Sidebar-link">Links</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;