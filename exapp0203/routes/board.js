var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var message = require("../lib/message");

var conStr={
  url:"localhost",
  user:"root",
  password:"1234",
  database:"android"
};

//목록
router.get('/', function(request, response, next) {
  var con = mysql.createConnection(conStr);
  var sql="select * from board order by board_id desc";

  con.query(sql, function(error, result, fields){
    if(error){
      response.writeHead(500, {"Content-Type":"application/json;charset=utf-8'"});
      message.resultCode=500;
      message.msg="목록실패";
      response.end(JSON.stringify(message));
    }else{
      response.writeHead(200, {"Content-Type":"application/json;charset=utf-8'"});
      message.resultCode=200;
      message.data=result;
      response.end(JSON.stringify(message));
    }
    con.end();//접속끊기
  });
});

//상세보기
router.get('/:board_id', function(request, response, next) {
  var con = mysql.createConnection(conStr);
  var sql="select * from board where board_id=?";

  con.query(sql,[request.params.board_id] ,function(error, result, fields){
    if(error){
      response.writeHead(500, {"Content-Type":"application/json;charset=utf-8'"});
      message.resultCode=500;
      message.msg="상세보기 실패";
      response.end(JSON.stringify(message));
    }else{
      response.writeHead(200, {"Content-Type":"application/json;charset=utf-8'"});
      message.resultCode=200;
      message.data=result;
      response.end(JSON.stringify(message));
    }
    con.end();//접속끊기
  });

});

//등록
router.post('/', function(request, response, next) {
  var con = mysql.createConnection(conStr);
  var sql="insert into board(title, writer ,content) values(?,?,?)";
  var title=request.body.title;
  var writer=request.body.writer;
  var content=request.body.content;

  con.query(sql,[title, writer, content] ,function(error, result, fields){
    if(error){
      response.writeHead(500, {"Content-Type":"application/json;charset=utf-8'"});
      message.resultCode=500;
      message.msg="등록실패";
      response.end(JSON.stringify(message));
    }else{
      response.writeHead(200, {"Content-Type":"application/json;charset=utf-8'"});
      message.resultCode=200;
      message.msg="등록 성공";
      response.end(JSON.stringify(message));
    }
    con.end();//접속끊기
  });

});

//수정
router.put('/', function(request, response, next) {
  var con = mysql.createConnection(conStr);
  var sql="update board set title=?, writer=?, content=? where board_id=?";
  var title=request.body.title;
  var writer=request.body.writer;
  var content=request.body.content;
  var board_id=request.body.board_id;

  con.query(sql,[title, writer, content, board_id] ,function(error, result, fields){
    if(error){
      response.writeHead(500, {"Content-Type":"application/json;charset=utf-8'"});
      message.resultCode=500;
      message.msg="수정실패";
      response.end(JSON.stringify(message));
    }else{
      response.writeHead(200, {"Content-Type":"application/json;charset=utf-8'"});
      message.resultCode=200;
      message.msg="수정 성공";
      response.end(JSON.stringify(message));
    }
    con.end();//접속끊기
  });

});

//삭제
router.delete('/:board_id', function(request, response, next) {
  var con = mysql.createConnection(conStr);
  var sql="delete from board where board_id=?";
  var board_id=request.params.board_id;

  con.query(sql,[board_id] ,function(error, result, fields){
    if(error){
      response.writeHead(500, {"Content-Type":"application/json;charset=utf-8'"});
      message.resultCode=500;
      message.msg="삭제실패";
      response.end(JSON.stringify(message));
    }else{
      response.writeHead(200, {"Content-Type":"application/json;charset=utf-8'"});
      message.resultCode=200;
      message.msg="삭제 성공";
      response.end(JSON.stringify(message));
    }
    con.end();//접속끊기
  });
});
module.exports = router;