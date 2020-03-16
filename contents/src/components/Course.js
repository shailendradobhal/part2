import React from "react"
import Part from "./Part"

const Course = ({ course }) => {
  const parts = () =>
    course.parts.map(part => <Part part={part} key={part.id} />)
  const totalExercises = () => {
    const total = course.parts.reduce(
      (acc, current) => acc + current.exercises,
      0
    )
    return <strong>total of {total} exercises</strong>
  }
  return (
    <>
      {parts()}
      {totalExercises()}
    </>
  )
}

export default Course
