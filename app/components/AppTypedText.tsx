'use client'
import React from 'react'
import { ReactTyped } from 'react-typed'

type PropTypes = { 
    color: string,
    fontSize? : string
}

const AppTypedText = ({color, fontSize}: PropTypes) => {
  return (
    <ReactTyped style={{color: color, fontSize: fontSize}} loop strings={["Front-end Developer", "Back-end Developer", "Mobile App Developer"]}  typeSpeed={80} />
  )
}

export default AppTypedText