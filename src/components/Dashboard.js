import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../App.css';


Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = ({ projects, payments }) => {
    
    const totalEarnings = payments.reduce((sum, payment) => 
        payment.status === 'Paid' ? sum + parseFloat(payment.amount) : sum, 
        0
    );

    
    const earningsData = {
        labels: ['June', 'July', 'August', 'September', 'October'],
        datasets: [
            {
                label: 'Earnings in USD',
                data: [2000, 3000, 2500, 1500, 4000], 
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const earningsOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4"style={{color:"black"}}>Freelancer Dashboard</h1>

            <h3 className="mb-3"style={{color:"black"}}>Projects Overview</h3>
            <Row>
                {projects.map((project, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                    <strong >Due Date:</strong> {project.dueDate}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Status:</strong> {project.status}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <h3 className="mb-3"style={{color:"black"}}>Earnings Overview</h3>
            <Row className="mb-4">
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h4>Total Earnings</h4>
                            <h2>{totalEarnings.toFixed(2)}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h4>Earnings Over Last 5 Months</h4>
                            <Bar data={earningsData} options={earningsOptions} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
