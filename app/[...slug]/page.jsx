import React from "react"
import { Suspense } from 'react'
import path from 'path';
import fs from 'fs'
import yaml from "js-yaml"
import Sections from '../sections/Sections'


async function getData(slug) {
  const file = path.join(process.cwd(), 'data/pages/')+ slug +".yml"

  if(!fs.existsSync(file)) {
    throw new Error('Failed to fetch data');
  }
  //Read the json data file data.json
  const fileContents = await fs.readFileSync(file, 'utf8');
  //Return the content of the data file in json format
  const json = yaml.load(fileContents);
  return json;
}
export default async function Page({params}) {
  const page = await getData(params.slug);
  
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
