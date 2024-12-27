import React from 'react'
import './css/Course.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Course = () => {
  const courses = [
    { id: 1, title: 'Cours 1' },
    { id: 2, title: 'Cours 2' },
    { id: 3, title: 'Cours 3' },
    { id: 4, title: 'Cours 4' },
    
  ];
  return (
    <div className='body'>
       <div className='Title'>
        <h2>Discover Our Courses</h2>
        <button class="btn-rose">View More</button>
    </div>
    <Container>
      <Row>
        {courses.map((course) => (
          <Col key={course.id} xs={12} sm={6} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default Course
