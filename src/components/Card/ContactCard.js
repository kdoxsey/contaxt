import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ContactCard = ({ item }) => {
  if (item.firstName && item.lastName && item.organizationName) {
    return (
      <Card>
        <Card.Body>
          <Card.Title><Link to ={`/contacts/${item._id}`}>
            {item.lastName}, {item.firstName}</Link>
          </ Card.Title>
          <Card.Text>
            {item.organizationName}
            {item.streetAddress}<br />
            {item.phoneNumber}<br />
            {item.emailAddress}<br />
            {item.note}<br />
          </Card.Text>
        </Card.Body>
      </Card>
    )
  } else if (item.firstName && item.lastName && !item.organizationName) {
    return (
      <Card>
        <Card.Body>
          <Card.Title><Link to ={`/contacts/${item._id}`}>
            {item.lastName}, {item.firstName}</Link>
          </ Card.Title>
          <Card.Text>
            {item.streetAddress}<br />
            {item.phoneNumber}<br />
            {item.emailAddress}<br />
            {item.note}<br />
          </Card.Text>
        </Card.Body>
      </Card>
    )
  } else if (!item.firstName && !item.lastName && item.organizationName) {
    return (
      <Card>
        <Card.Body>
          <Card.Title><Link to ={`/contacts/${item._id}`}>
            {item.organizationName}</Link>
          </ Card.Title>
          <Card.Text>
            {item.streetAddress}<br />
            {item.phoneNumber}<br />
            {item.emailAddress}<br />
            {item.note}<br />
          </Card.Text>
        </Card.Body>
      </Card>
    )
  } else if (item.firstName && !item.lastName && item.organizationName) {
    return (
      <Card>
        <Card.Body>
          <Card.Title><Link to ={`/contacts/${item._id}`}>
            {item.firstName}</Link>
          </ Card.Title>
          <Card.Text>
            {item.organizationName}
            {item.streetAddress}<br />
            {item.phoneNumber}<br />
            {item.emailAddress}<br />
            {item.note}<br />
          </Card.Text>
        </Card.Body>
      </Card>
    )
  } else if (!item.firstName && item.lastName && item.organizationName) {
    return (
      <Card>
        <Card.Body>
          <Card.Title><Link to ={`/contacts/${item._id}`}>
            {item.lastName}</Link>
          </ Card.Title>
          <Card.Text>
            {item.organizationName}
            {item.streetAddress}<br />
            {item.phoneNumber}<br />
            {item.emailAddress}<br />
            {item.note}<br />
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default ContactCard
