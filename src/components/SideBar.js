import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars, FaHome, FaShopify} from 'react-icons/fa';
const SideBar = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark mb-3">
          <Container>
            <Navbar.Brand href="#" className='text-white'><FaShopify className='h1' id='shop'/><span className='h3 text-tertiary heading'>SK</span> <span className='lead fs-6' id='shoping'>Shoping</span></Navbar.Brand>
            <Navbar.Toggle className='button' aria-controls={`offcanvasNavbar-expand-${expand}`} ><FaBars className='bar fs-2'/></Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header  closeButton id='back'>
                <Offcanvas.Title className='text-dark' id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                <FaHome className='m-1 text-dark'/> Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body id='back2'>
                <Nav className="justify-content-end flex-grow-1 pe-4 p-2 mx-5">
                  <Nav.Link href="#action1" id='link'>Home</Nav.Link>
                  <Nav.Link href="#action2" id='link2'>About</Nav.Link>
                  <Nav.Link href="#action2" id='link3'>Catagories</Nav.Link>
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
                  <Button variant="btn" id='button'>Search</Button>
                </Form>
                
          </Container>
        </Navbar>
      ))}
        
    </>
  )
}

export default SideBar