import React from 'react'
import '../css/Side.css'
import { SideNavigation,SideNavigationItem,SideNavigationSubItem  } from '@ui5/webcomponents-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <SideNavigation  
  onSelectionChange={function ka(){}}>
      <SideNavigationItem 
        icon="group"
        text="HOME"
      />
      <Link to={"/"}>
  <SideNavigationItem
    expanded
    icon="group"
    text="ITEMS"
  >
  </SideNavigationItem>
  </Link>
  <SideNavigationItem
    icon="locate-me"
    text="PURCHASING"
  >
  <SideNavigationSubItem text="Purchase Ordres" />
    <SideNavigationSubItem text="Vendors" />
    </SideNavigationItem>
  <SideNavigationItem
    icon="calendar"
    text="SALES"
  >
    <SideNavigationSubItem text="Sales Oerders" />
    <SideNavigationSubItem text="Customers" />
  </SideNavigationItem>
  <SideNavigationItem 
    expanded
   
    icon="group"
    text="LOCATIONS"
  ></SideNavigationItem>
  <SideNavigationItem
    expanded
    icon="group"
    text="UOM"
  >
  </SideNavigationItem>
  <SideNavigationItem
    expanded
    icon="group"
    text="REPORTS"
  >
  </SideNavigationItem>
  <SideNavigationItem
    expanded
    icon="group"
    text="INTERGRATIONS"
  >
    <SideNavigationSubItem text="Market" />
  </SideNavigationItem>
  <SideNavigationItem
    expanded
    icon="group"
    text="COMPANY"
  >
    <SideNavigationSubItem text="Sales" />
    <SideNavigationSubItem text="Taxes" />
    <SideNavigationSubItem text="Payment Terms" />
  </SideNavigationItem>
</SideNavigation>
</div>
  )
}

export default Sidebar