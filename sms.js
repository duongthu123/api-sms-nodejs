const express = require('express');
const app = express();
const port = 3001;
var exec = require('child_process').exec

app.get('/', (req, res) => {
  const key = req.query.key;  
  const phone = req.query.phone;
  const time = req.query.time;
if (!key || !phone || !time) {
    const err_u = {
        err: `true`,
        message: `sai url`,
        code: '410'
    }
    res.status(400).send(err_u);
  } else {
  if (key === '1234') {
   if (time <= 60) {
    if (phone) {

        const jsonData = {
            err: `false`,
            message: `spam sms`,
            phone: `${phone}`,
            time: `${time}`,
            code: '200'
        }
        res.status(200).send(jsonData)//;
        /*exec(`py sms.py ${phone} ${time}`, (error, stdout, stderr) => {  
        console.log('sms run');
        })
        exec(`py sms1.py ${phone} ${time}`, (error, stdout, stderr) => {  
            console.log('sms run');
        })
        exec(`py sms2.py ${phone} ${time}`, (error, stdout, stderr) => {  
            console.log('sms run');
        })*/
    } else {
        const err_url = {
            message: `coi lại url thiếu phone`,
            code: '400'
        }
        res.status(400).send(err_url);
    }
   } else {
    const err_url = {
        message: `coi lại url thiếu time`,
        code: '400'
    }
    res.status(400).send(err_url);
   }
    
  } else {
    const err_key = {
        message: `sai key`,
        code: '400'
    }
    res.status(400).send(err_key);
  }
}
});

app.listen(port, () => {
  console.log(`server run on port http://localhost:${port}`);
});