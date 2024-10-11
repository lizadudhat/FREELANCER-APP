import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../App.css';

const ProjectManagement = ({ projects, setProjects }) => {
    const [newProject, setNewProject] = React.useState({ name: '', dueDate: '', status: 'Active' });

    const addProject = () => {
        setProjects([...projects, { ...newProject }]);
        setNewProject({ name: '', dueDate: '', status: 'Active' });
    };

    const deleteProject = (index) => {
        setProjects(projects.filter((_, i) => i !== index));
    };

    const updateProjectStatus = (index, status) => {
        const updatedProjects = projects.map((project, i) =>
            i === index ? { ...project, status } : project
        );
        setProjects(updatedProjects);
    };

    return (
        <Card className="mb-4 shadow">
           
            <Card.Body>
                <Form className="mb-3">
                    <Form.Group>
                        <Form.Label ><strong>Project Name</strong></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter project name"
                            value={newProject.name}
                            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><strong>Due Date</strong></Form.Label>
                        <Form.Control
                            type="date"
                            value={newProject.dueDate}
                            onChange={(e) => setNewProject({ ...newProject, dueDate: e.target.value })}
                        />
                    </Form.Group>
                    <Button style={{backgroundColor:"#200731",border:"none",boxShadow:"1px 2px 2px  2px purple"}} onClick={addProject} className="mt-3">
                        Add Project
                    </Button>
                </Form>

                {projects.map((project, index) => (
                    <Card key={index} className="mb-2 shadow-sm">
                        <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Due: {project.dueDate}</Card.Subtitle>
                            <Card.Text>Status: {project.status}</Card.Text>
                            <Button
                                variant="outline-success"
                                onClick={() => updateProjectStatus(index, 'Complete')}
                            >
                                Mark as Complete
                            </Button>{' '}
                            <Button variant="outline-danger" onClick={() => deleteProject(index)}>
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))}

                <Link to="/" className="btn btn-secondary mt-3"style={{backgroundColor:"#200731",boxShadow:"1px 2px 2px  2px purple"}}>Back To Home</Link> 
            </Card.Body>
        </Card>
    );
};

export default ProjectManagement;
