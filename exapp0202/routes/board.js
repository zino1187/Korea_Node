var express = require('express');
var router = express.Router();

/* /board/ 요청을 처리하는 메서드*/
router.get('/', function(req, res, next) {
  res.send('게시판 목록을 원해?');
});

//등록
router.post("/", function(request, response, next){
  console.log("게시판 등록을 원해?");
})

module.exports = router;
