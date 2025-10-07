//  path module

// console.log("path module")
/*import path, { join } from 'path'

// join two or more file
const fullpath = path.join('/path','index.py','file.java');
console.log("files join = ",fullpath)*/

/*import path, { join } from 'path'

// join two or more file
const fullpath = path.join('/path','index.py','file.java');
// console.log("files join = ",fullpath)
// index.py Test.

const absolutepath = path.resolve();
console.log(absolutepath);*/


// +++++++++++++++++++++++++
/*import path, { join } from 'path'

// join two or more file
const fullpath = path.join('/path','index.py','file.java');
// console.log("files join = ",fullpath)
// index.py Test.

// absolute path 
const absolutepath = path.resolve();
console.log("we are currently working on = ",absolutepath);*/

import path, { join } from 'path'

// join two or more file
const fullpath = path.join('/path','index.py','file.java');

const absolutepath = path.resolve();
const extname = path.extname('resume.pdf')
console.log("extname = ",extname)

if(extname == '.pdf'){
    console.log("ok")
} else{
    console.log("not supported")
}
