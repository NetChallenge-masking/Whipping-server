
const mysql = require('mysql');  // mysql 모듈 로드

const conn = {  // mysql 접속 설정
    host: '127.0.0.1',
    port: '8080',
    user: 'recd608126075d3b2',
    password: '993ac3f298e77d28',
    database: 'whippingDB'
};


var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속
 
var testQuery = "INSERT INTO `members` (`username`,`password`) VALUES ('test','test');";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
testQuery = "SELECT * FROM MEMBERS";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
 
connection.end(); // DB 접속 종료



// const mysql = require('mysql');

// let test = async() => {
//     const db = mysql.createPool({
//         host: '127.0.0.1',
//         user: 'recd608126075d3b2',
//         password: '993ac3f298e77d28',
//         port: '8080',
//         database: 'whippingDB',
//         waitForConnections: true,
//         insecureAuth:true
//     });
//     let sql = 'SELECT * FROM beacon';
//     let [rows, fields] = await db.query(sql);
//     console.log(rows);
// };

// test();








// const express = require("express");

// const app = express();

// const { NUMBER } = require('sequelize')

// app.listen(8080, () => {
//     console.log('test code');
// });

// app.get('/', (req, res) => {
//     res.send('Hello world!\n');
// });

// app.get('/api/navigation/beacon-location', (req, res) => {
//     return res.json(beacons);
// });



// app.get('/api/navigation/beacon-location/:id', (req, res) => {
// 	const id = parseInt(req.params.id,10);
//     if(!id){
//         return res.status(400).json({err:'Incorrect id'});
//     }

//     let beacon = beacons.filter(beacon => beacon.id === id)[0]
//     if(!beacon) {
//         return res.status(404).json({err: 'Unknown user'});
//     }
//     return res.json(beacon);
// });




// ////



// app.get('/api/navigation/beacon-location/:id', (req, res) => {
// 	let beacon = beacons.filter(beacon => beacon.id === id)[0];
// 	if(!beacon){
// 		return res.status(404).json({err: 'Unknown user'});
//     }
// });


// //장바구니 모든 상품 리스트 불러오기
// app.get('/api/cart/item-list', (req, res) => {
// 	return res.json(beacons);
// });



// app.get('/api/cart/call-barcode/:id', (req,res)=>{
//     const id = parseInt(req.params.id,10)   //경로 안에 데이터를 넘겨줄 때, 데이터 타입 맞추기 위해 parseInt
//     if(!id){
//         return res.status(400).json({err:'Incorrect id'});
//     }
//     let beacon = beacons.filter(beacon => beacon.id === id)[0]
//     if(!beacon) {
//         return res.status(404).json({err: 'Unknown user'});
//     }
//     return res.json(beacon);
// })


// let beacons= [
//     {id: 1,
//     name: "aaa"},
//     {id: 2,
//     name: "bbb"},
//     {id: 3,
//     name: "ccc"}
// ]