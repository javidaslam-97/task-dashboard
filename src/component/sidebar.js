import React from "react";
import { ListGroup } from "react-bootstrap";
// import { Alarm  } from 'bootstrap-icons-react';

function SidebarComponent() {
  return (
    <div className="sidebar">
      <div className="header">
        <h3 className="sidebar-title">Medico Sales</h3>
      </div>
      <div className="sidebar-item">
        <ListGroup as="ul">
          <ListGroup.Item className="common-padding" active>
            <div className="common-icon">
            <i class="bi bi-grid"></i>
            </div>
            <span>Dashboard</span>
          </ListGroup.Item>
          <ListGroup.Item className="common-padding">
            <div className="common-icon">
            <i class="bi bi-bag-check"></i>
            </div>
            <span>Lab Test</span>
          </ListGroup.Item>
          <ListGroup.Item className="common-padding">
            <div className="common-icon">
            <i class="bi bi-calendar3"></i>
            </div>
            <span>Appointment</span>
          </ListGroup.Item>
          <ListGroup.Item className="common-padding">
            <div className="common-icon">
            <i class="bi bi-bag"></i>
            </div>
            <span>Medicine Order</span>
          </ListGroup.Item>
          <ListGroup.Item className="common-padding">
            <div className="common-icon">
            <i class="bi bi-envelope"></i>
            </div>
            <span>Message</span>
          </ListGroup.Item>
          <ListGroup.Item className="common-padding">
            <div className="common-icon">
            <i class="bi bi-wallet2"></i>
            </div>
            <span>Payment</span>
          </ListGroup.Item>
          <ListGroup.Item className="common-padding">
            <div className="common-icon">
            <i class="bi bi-gear"></i>
            </div>
            <span>Settings</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
export default SidebarComponent;
