import React, { useState } from "react"
import people from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

const Review = () => {
  const [index, setIndex] = useState(0)
  const review = people[index]

  const checkIndex = (number) => {
    if (number < 0) {
      return people.length - 1
    } else if (number > people.length - 1) {
      return 0
    } else return number
  }

  const prevPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1
      return checkIndex(newIndex)
    })
  }

  const nextPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1
      return checkIndex(newIndex)
    })
  }

  const RandomPerson = () => {
    const randomIndex = Math.floor(Math.random() * people.length)
    setIndex(randomIndex)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={review.image} alt={review.name} />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <h4 className="author">{review.name}</h4>
      <p className="job">{review.job}</p>
      <p className="info">{review.text}</p>
      <div>
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={RandomPerson} className="random-btn">
        Suprise Me
      </button>
    </article>
  )
}

export default Review
