import React from "react";
import {
  Row,
  Col,
  InputGroup,
  Container,
  Table,
  FormLabel,
} from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";

const tableData = [
  {
    invoiceId: "INV001",
    date: "2023-09-30",
    customerName: "John Doe",
    paidAmount: 1000,
    payableAmount: 2000,
    due: 1000,
  },
  {
    invoiceId: "INV002",
    date: "2023-09-28",
    customerName: "Jane Smith",
    paidAmount: 1500,
    payableAmount: 1500,
    due: 0,
  },
  {
    invoiceId: "INV003",
    date: "2023-09-25",
    customerName: "Alice Johnson",
    paidAmount: 800,
    payableAmount: 1200,
    due: 400,
  },
  {
    invoiceId: "INV004",
    date: "2023-09-20",
    customerName: "Bob Williams",
    paidAmount: 2000,
    payableAmount: 2500,
    due: 500,
  },
  {
    invoiceId: "INV005",
    date: "2023-09-15",
    customerName: "Eva Davis",
    paidAmount: 900,
    payableAmount: 1100,
    due: 200,
  },
  {
    invoiceId: "INV006",
    date: "2023-09-12",
    customerName: "Michael Brown",
    paidAmount: 1200,
    payableAmount: 1200,
    due: 0,
  },
  {
    invoiceId: "INV007",
    date: "2023-09-10",
    customerName: "Linda Wilson",
    paidAmount: 1800,
    payableAmount: 2000,
    due: 200,
  },
  {
    invoiceId: "INV008",
    date: "2023-09-05",
    customerName: "David Lee",
    paidAmount: 600,
    payableAmount: 900,
    due: 300,
  },
  {
    invoiceId: "INV009",
    date: "2023-09-01",
    customerName: "Sarah Hall",
    paidAmount: 2500,
    payableAmount: 3000,
    due: 500,
  },
  {
    invoiceId: "INV010",
    date: "2023-08-30",
    customerName: "Chris Turner",
    paidAmount: 700,
    payableAmount: 1200,
    due: 500,
  },
  // Add more data entries as needed
];

function Dashboard() {
  return (
    <Container className="dashboard-page" fluid>
      <Row>
        <Col sm={6} xs={6} md={6} xl={6} xxl={6} className="left-side">
          <InputGroup className="search-box">
            <FormControl type="text" placeholder="Search..." />
            <div className="search-icon">
              <i className="bi bi-search"></i>
            </div>
          </InputGroup>
        </Col>
        <Col sm={6} xs={6} md={6} xl={6} xxl={6} className="right-ride bell">
          <i class="bi bi-bell"></i>
        </Col>
      </Row>
      <Row className="page-title row-common-padding">
        <h4>Salaes Information</h4>
      </Row>
      <Row className="row-common-padding">
        <Col xxl={3} md={3} sm={3} className="row-txt-box">
          <FormLabel>Customer</FormLabel>
          <InputGroup>
            <FormControl type="text" />
          </InputGroup>
        </Col>
        <Col xxl={3} md={3} sm={3} className="row-txt-box">
          <FormLabel>invoiceId</FormLabel>
          <InputGroup>
            <FormControl type="text" />
          </InputGroup>
        </Col>
        <Col xxl={3} md={3} sm={3} className="row-txt-box">
          <FormLabel>Start Date</FormLabel>
          <InputGroup>
            <FormControl type="date" />
          </InputGroup>
        </Col>
        <Col xxl={3} md={3} sm={3} className="row-txt-box">
          <FormLabel>End Date</FormLabel>
          <InputGroup>
            <FormControl type="date" />
          </InputGroup>
        </Col>
      </Row>
      <Row className="row-common-padding">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Paid Amount</th>
                <th>Payable Amount</th>
                <th>Due</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((invoice, index) => (
                <tr key={index}>
                  <td>{invoice.invoiceId}</td>
                  <td>{invoice.date}</td>
                  <td>{invoice.customerName}</td>
                  <td>{invoice.paidAmount}</td>
                  <td>{invoice.payableAmount}</td>
                  <td>{invoice.due}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
export default Dashboard;
