/*import express from 'express'
const app = express();

// U = Create => POST (Method)
// R = Read => GET (Method)
// U = Update => PUT (Method)
// D = Delete => DELETE (Method)

app.get('/suman',(req,res)=>{
    res.send("This is response")
})

app.post('/instagram_post',(req,res)=>{

})
const port = 2000;
app.listen(port,()=>(`server is running on port ${port}`))*/


// +++++++++++++ JSON, HTML ++++++++++++++++++

/*import express from 'express'

const app = express();

const products = [
    { title: 'iphone - 15', price: 75000 },
    { title: 'Oneplus - 12', price: 45000 },
    { title: 'Goggle pixel', price: 55000 },
];

// send
app.get("/", (req, res) => {
    res.json({message: "fetched all products", jo_chahe: "de sakate hai", products: products,success:true});

});

const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`))*/


/*import express from 'express'

const app = express();

const products = [
    { title: 'iphone - 15', price: 75000 },
    { title: 'Oneplus - 12', price: 45000 },
    { title: 'Goggle pixel', price: 55000 },
];

// send
app.get("/", (req, res) => {
    res.send('<h1>This is your response</h1>')
    // res.send('This is your response')

});

const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`))*/

// ++++++++++++++++++++ HTML-File  chorme par jo likha hai html file me ++++++++++++++++
/*import express from 'express'
import path from 'path'

const app = express();
// send
app.get("/", (req, res) => {

    const dir = path.resolve();
    
    const url = path.join(dir,'./server_CRUD.html')

    console.log("full path = ",url)

    res.sendFile(url)

});

const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`))*/

import express from 'express'
import path from 'path'

const app = express();
// send
app.get("/", (req, res) => {

    const dir = path.resolve();
    
    const url = path.join(dir,'./server_CRUD.html')

    console.log("full path = ",url)

    res.sendFile(url)

});

const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`))
