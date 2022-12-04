import fs from 'fs';
import path from 'path';
import yaml from "js-yaml"

export const getPage = async (slug = 'home', type = 'pages') => {
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

export const getPosts = async () => {
  const posts = []
  fs.readdirSync(process.cwd()+"/data/posts").forEach(async file => {
    const post = await fs.readFileSync(process.cwd()+"/data/posts/"+file, 'utf8');
    posts.push(yaml.load(post));
  })
  return posts
}