// 모듈을 추출합니다.
var http = require('http');
var url = require('url');
var express = require('express');

var apiData = {
    url: 'http://apis.data.go.kr/6280000/busArrivalService',
    serviceKey: 'dU7dvWQUG8tftP9%2FNQlBADY5gjT5ZpS6xWVIZ%2Fwxr26jXjuJZlrLgExQvtyIaCfiioEJWez5DJ%2FcdIWAAFrctQ%3D%3D',
    numOfRows: 100,
    pageNo: 1,
    bstopId: 168001043
}

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));

// 웹 서버를 라우트합니다.
app.get('/data.redirect', function (request, response) {
    var apiUrl = 'http://apis.data.go.kr/6280000/busArrivalService/getAllRouteBusArrivalList?bstopId='
    + apiData.bstopId + '&serviceKey=' + apiData.serviceKey + '&numOfRows=100&pageNo=1';
    if (apiUrl) {
        http.get(apiUrl, function (web) {
            // 데이터를 읽을 때마다
            web.on('data', function (buffer) {
                response.write(buffer);
            });

            // 데이터를 모두 읽으면
            web.on('end', function () {
                response.end();
            });
        });
    } else {
        response.send('url 속성이 정의되지 않았습니다.');
    }
});

// 웹 서버를 실행합니다.
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});