import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaAddressCard, FaHome, FaShopify} from 'react-icons/fa';
const SideBar = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark mb-3">
          <Container>
            <Navbar.Brand href="#" className='text-white'><FaShopify className='text-warning h1' id='shop'/><span className='h2 text-tertiary px-2'>SK</span> <span className='lead'>Shoping</span></Navbar.Brand>
            <Navbar.Toggle className='button' aria-controls={`offcanvasNavbar-expand-${expand}`} ><FaAddressCard className='bar'/></Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header  closeButton>
                <Offcanvas.Title className='text-primary' id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                <FaHome className='m-1 text-dark'/> Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-4 p-2 mx-5">
                  <Nav.Link href="#action1" className='text-warning link'>Home</Nav.Link>
                  <Nav.Link href="#action2" className='text-warning  link'>About</Nav.Link>
                  <Nav.Link href="#action2" className='text-warning link'>Catagories</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Form className="d-flex mt-2">
                  <Form.Control 
                    type="search"
                    placeholder="Search"
                    className="me-3"
                    aria-label="Search"
                  />
                  <Button variant="btn btn-warning">Search</Button>
                </Form>
          </Container>
        </Navbar>
      ))}
        
    </>
  )
}

export default SideBar