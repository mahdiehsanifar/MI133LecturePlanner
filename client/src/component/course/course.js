import React from 'react'
import PropTypes from 'prop-types'
import "./course.css"


const Course = ({ title, description, lecturer, date, venue }) => (
    <div>
        <div className="card border-primary mb-3" style= {{width: "60rem"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{description}</h6>
                <p className="card-text">{lecturer}</p>
                <p className="card-text">{date}</p>
                <a href="#" className="card-link">Guide Me</a>
            </div>
        </div>
    </div>
)




export default Course

