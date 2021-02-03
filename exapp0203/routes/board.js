var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var conStr={
  url:"localhost",
  user:"root",
  password:"1234",
  database:"android"
};

//목록
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//상세보기
router.get('/:board_id', function(req, res, next) {
  res.send('respond with a resource');
});

//등록
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

//수정
router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});

//삭제
router.delete('/:board_id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
