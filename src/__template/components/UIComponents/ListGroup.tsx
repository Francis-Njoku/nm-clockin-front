import React from 'react'

import BasicListGroup from '../UI/BasicListGroup'
import ContextualListGroup from '../UI/ContextualListGroup'
import FlushListGroup from '../UI/FlushListGroup'

function ListGroup() {
  return (
    <div className="container">
      <div className="col-12">
        <div className="card bd-content p-4">
          <h1>List group</h1>
          <p>
            List groups are a flexible and powerful component for displaying a series of content.
            Modify and extend them to support just about any content within.
          </p>
          <div className="alert alert-danger" role="alert">
            <strong>List group</strong> for more bootstrao components{' '}
            <a
              href="https://v5.getbootstrap.com/docs/5.0/components/list-group/"
              target="_blank"
              rel="noopener noreferrer">
              Bootstrap List group documentation <i className="fa fa-external-link"></i>
            </a>
          </div>
          <BasicListGroup />
          <FlushListGroup />
          <ContextualListGroup />
        </div>
      </div>
    </div>
  )
}

export default ListGroup
