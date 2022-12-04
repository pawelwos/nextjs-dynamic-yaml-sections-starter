import path from 'path';
import fs from 'fs';
import yaml from "js-yaml"

export const getData = async (slug = 'home', type = 'pages') => {
  const file = path.join(process.cwd(), 'data/'+type+'/')+slug+".yml"
  if(!fs.existsSync(file)) {
    throw new Error('Failed to fetch data');
  }
  //Read the json data file data.json
  const fileContents = await fs.readFileSync(file, 'utf8');
  //Return the content of the data file in json format
  const json = yaml.load(fileContents);
  return json;
}