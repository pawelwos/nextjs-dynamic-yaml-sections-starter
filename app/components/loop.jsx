import React from "react"
import { Suspense } from 'react'
import Sections from '../sections/Sections'

const Loop = ({page}) => {
  return (
    <>
    { 
      page.sections.map((section, index) => {
        if( typeof Sections[section.type] === 'object') {
          return (
            <Suspense key={index} fallback={`Loading...`}>
              { React.createElement(Sections[section.type], { key: index, section, page: page}) }
            </Suspense>
          )
        } else {
          return <p key={index}>Missing {section.type} Component </p>
        }
      })
    }
    </>
  )
}
export default Loop