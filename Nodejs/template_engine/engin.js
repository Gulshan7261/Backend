/*import express from 'express'

const app = express();

app.get('/',(ers,res)=>{
    let name = 'ram'
    res.render('engin.ejs', {name})  // npm i ejs install karane ke bad index.ejs name ka file ban jayega

})
const port = 1000;
app.length(port,()=>console.log('server is running '))*/


// html file chorme par run karane ke liye code  easme extrnal CSS file kam nahi karega 
/*import express from 'express'

const app = express();
let products =[
    {title:'iphone - 16',price:75000},
    {title:'galaxy s24 ultra',price:95000},
    {title:'Goggle pixel',price:65000},
]

app.get('/',(ers,res)=>{
    let name = 'Ram'
    res.render('engin.ejs', {name,products})  // npm i ejs install karane ke bad index.ejs name ka file ban jayega

})
const port = 1000;
app.length(port,()=>console.log(`server is running on port ${port}`))*/

//  Setting the static file/folder CSS File external add karane ka code 

import express from 'express'
import path from 'path'

const app = express();

// css file ko join kiaya gaya code 
app.use(express.static(path.join(path.resolve(),'public')))

app.get('/', (req,res)=>{
    res.render('file Name.ejs')
})

const port = 1000;
app.listen(port,()=>console.log(`server is running on port ${port}`))

