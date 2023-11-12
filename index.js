const express = require('express')
const app = express()

const filter = (req , res , next) =>{
    if(!req.query.age)
    {
        res.send('not done insert query')
    }
    else if(req.query.age<18 )
    {
        res.send(' you are under age')
    } 
    else
    {
        next();
    }
}

// app.use(filter)
app.get('/' , function(req ,res){
    res.send('hello skywin this is home page')
})
app.get('/get', filter, function(req , res){
    res.send('hello skywin this is get pages')
})
app.get('/about', function(req , res){
    res.send('hello skywin this is about  pages')
})
app.listen(3030)


// route level middleware perticlar route ma aapde aapva nu hoy like a 50 routes che and aapde 10 ma j  validation jotu che to aeni mate route level middleware no use thay che and jyare application level ma badha route ma ek sathe apply thai jay che