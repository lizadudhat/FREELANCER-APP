import React from 'react';
import { Button, Card, Form, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../App.css';

const PaymentTracking = ({ payments, setPayments }) => {
    const [newPayment, setNewPayment] = React.useState({ amount: '', status: 'Unpaid' });

    const addPayment = () => {
        setPayments([...payments, { ...newPayment }]);
        setNewPayment({ amount: '', status: 'Unpaid' });
    };

    const markAsPaid = (index) => {
        const updatedPayments = payments.map((payment, i) =>
            i === index ? { ...payment, status: 'Paid' } : payment
        );
        setPayments(updatedPayments);
    };

    return (
        <Card className="mb-4 shadow">
            
            <Card.Body>
                <Form className="mb-3">
                    <Form.Group>
                        <Form.Label><strong> Amount</strong></Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter amount"
                            value={newPayment.amount}
                            onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
                        />
                    </Form.Group>
                    <Button 
                    style={{backgroundColor:"#200731",boxShadow:"1px 2px 2px  2px purple"}} onClick={addPayment} className="mt-3">
                        Add Payment
                    </Button>
                </Form>

                <ListGroup variant="flush">
                    {payments.map((payment, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                            <div>
                                <strong>Amount:</strong> ${payment.amount}
                                <div className="text-muted">Status: {payment.status}</div>
                            </div>
                            {payment.status === 'Unpaid' && (
                                <Button variant="outline-success" onClick={() => markAsPaid(index)}>
                                    Mark as Paid
                                </Button>
                            )}
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                <Link to="/" className="btn btn-secondary mt-3" style={{backgroundColor:"#200731",boxShadow:"1px 2px 2px  2px purple"}}>Back To Home</Link> {/* Back button */}
            </Card.Body>
        </Card>
    );
};

export default PaymentTracking;
