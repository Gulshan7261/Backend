import express from 'express'

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('form_Handing.ejs')}) // form_Handing ko views ke under dalana hoga


app.post('/form-submit',(req,res)=>{
    console.log(req.body)
    res.json({
        message:'your form has been submited',
        success:true

    })
    })

const port = 1000;
app.listen(port,console.log(`server is running on port ${port}`))


// 3:12 mint video dekhana hai