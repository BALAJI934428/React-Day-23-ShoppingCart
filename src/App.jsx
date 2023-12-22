import { useState } from 'react'

import './App.css'
import Product from './Product';
import Cart from './Cart';
import Dropdown from 'react-bootstrap/Dropdown';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';





function App() {
  const [products] = useState([
    {id: 1, name: 'Shirt', description: 45},
    {id: 2, name: 'Jeans', description: 58},
    {id: 3, name: 'Formal Shirt', description: 33},
    {id: 4, name: 'Cotton Pant', description: 76},
    {id: 5, name: 'Lycra Pant', description: 23},
    {id: 6, name: 'Tshirt', description: 35},
    {id: 7, name: 'Lycra Shirt', description: 52},
    {id: 8, name: 'Coat Suit', description: 102},
    
  ]);

  const [cart, setCart] =  useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); //cart = [1,2,3] => [...cart, 4] = [1,2,3,4]
  }

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove));
  }

  return (
   <div>
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              
              <NavDropdown.Item href="#">
                New Arrivals
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Trendings</NavDropdown.Item>
              
              <NavDropdown.Item href="#">
                Fancy Dress
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>

        <Dropdown >
      <Dropdown.Toggle  id="navbarDropdown " className='text-dark bg-white border border-0' >
      <i className="bi-cart-fill me-1"></i>
                            Shopping Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>

      <Cart cartItems={cart} onRemoveFromCart={removeFromCart}/>
      <DropdownItem className="text-center btn btn-outline-dark mt-auto">BUY NOW</DropdownItem>
     

        
        
      </Dropdown.Menu>
    </Dropdown>

        </Nav.Item>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  
 













    

    <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-1">
            <div className="text-center text-white">
                <h1 className="display-6 fw-bolder">Shop in style</h1>
                <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
        </div>
    </header>
    
    <div className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    {products.map(product => (      
      <Product key={product.id} product={product} onAddCart={addToCart} onRemoveCart={removeFromCart} 
      isInCart={cart.includes(product)}/>
    ))}
    
    
    </div>
    </div>
    </div>

    





    <footer className="py-5 bg-dark">
        <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
        </div>
    </footer>

   </div>
  )
}

export default App
