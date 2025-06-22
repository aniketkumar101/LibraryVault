import React, { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import Barcode from 'react-barcode';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
        toast.warning("Login First")
        navigate('/');
    }
  }, []);


  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const email = localStorage.getItem('userEmail');
        if (!email) {
          navigate('/');
        }
        const response = await fetch('https://localhost:5000/rent/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch order');
        }
        const orderData = await response.json();
        setOrders(orderData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrder();
  }, []);

  return (
    <div>
      <div className="row d-flex justify-content-center mt-4">
        {orders.slice().reverse().map((order) => (
          <Col key={order._id} md={6}>
            <Card style={{ width: '30rem', margin: '0 auto', backgroundColor: '#f0f0f0' }} className="mb-5 mt-2 ord-ord">
              <Card.Img
                variant="top"
                src={order.image}
                style={{ height: '400px', width: '70%', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto' }}
              />
              <Card.Body>
                <Card.Title className="text-center mt-2" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                  {order.title}
                </Card.Title>
                <Card.Text className=" text-center mt-3 text-success fw-bold">Picked Stock: {order.stock}</Card.Text>
                <Card.Text className="text-center text-danger fw-bold">Duration in Days: {order.duration}</Card.Text>
                <Barcode style={{marginLeft: 'auto', marginRight: 'auto'}}value={generateBarcodeValue(order.duration)} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
}

const generateBarcodeValue = (duration) => {
  
  return `Order-${duration}-${Math.floor(Math.random() * 10000)}`;
};
