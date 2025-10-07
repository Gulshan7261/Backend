// console.log("File Handing")
// import {readFile} from 'fs/promiss'

// console.log("We are learing about the modules in node.js")

/*import { readFile } from "fs/promises";

//Read File 
const read_file = async (fileName) => {
    const data = await readFile(fileName, "utf-8");
    console.log(data);
};
read_file('./lecture/sample.txt')*/


// +++++++++++++++++ Create file +++++++++++++++++

/*import { readFile, writeFile } from "fs/promises";

// Read File Contant 
const read_file = async (fileName) => {
    const data = await readFile(fileName, "utf-8");
    console.log(data);
};

// Create file 
const create_file = async(fileName, content) => {
    await writeFile(fileName,content)
    console.log("file created Successfully..!")
}
create_file('ai.py', 'this is a testing file') 
create_file('App.jsx', 'this is a React file') */

// +++++++++++++++++ file ke jo text likha hai  ++++++++++++

/*import { readFile, writeFile,appendFile } from "fs/promises";

// Read File Contant 
const read_file = async (fileName) => {
    const data = await readFile(fileName, "utf-8");
    console.log(data);
};

// Create file
const create_file = async(fileName, content) => {
    await writeFile(fileName,content)
    console.log("file created Successfully..!")
}

// Add content file 
const append_File = async(fileName,content) =>{
    await appendFile(fileName,content);
    console.log("extra content added successfully...!")
}
append_File('App.jsx', 'This is my extra content')*/


//+++++++++++++++++++++++ folder create ++++++++++++++

import { readFile, writeFile,appendFile,mkdir } from "fs/promises";

// Read File Contant 
const read_file = async (fileName) => {
    const data = await readFile(fileName, "utf-8");
    console.log(data);
};

// Create file
const create_file = async(fileName, content) => {
    await writeFile(fileName,content)
    console.log("file created Successfully..!")
}

// Add content file 
const append_File = async(fileName,content) =>{
    await appendFile(fileName,content);
    console.log("extra content added successfully...!")
}
// Create folder - directory
const create_dir = async (dir) => {
await mkdir(dir,{recursive:true})
}
// create_dir('public')
// create_dir('src/Components/java');

create_dir('src/py');  //src me ek new file ban gaya

// src/components/java

