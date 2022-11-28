import React from 'react'

import alpinists from '../images/alpinists.png';

import '../styles/style.components/services.css';

function Services() {
  return (
    <div
      className="services_container_main"
      style={{
      background: `url(${alpinists})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      Services
    </div>
  )
}

export default Services