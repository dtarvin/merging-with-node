#!/usr/bin/env node

console.log('Running wpe-merge');

const csv = require('csv-parser');
const fs = require('fs');
const json2csv = require('json2csv');
const axios = require('axios');

let dataArray = [];

fs.createReadStream('input - input.csv')
    .pipe(csv())
    .on('data', function (data) {
        // const accountId = map(data => {
        //     console.log('data.accountId = ' + data.accountId);
        // })
        // data.employee = 'employee';
        // console.log("data: " + data);
        // var accountId = data.accountId;
        // console.log("accountId = " + accountId);
        
        dataArray.push(data);
    })
    .on('end', function() {
        let accountIdArray = dataArray.map(accountId => {
            return dataArray['accountId'];
        });
        console.log('Account Ids are ' + accountIdArray);
        // console.log('data.accountId: ' + data.accountId);
        var result = json2csv.parse({ data: dataArray, fields: Object.keys(dataArray[0]) });
        fs.writeFileSync('employeeFile.csv', result);
    });