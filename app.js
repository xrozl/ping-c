// 定期的にgoogleのトップページにpingを送る
// 10分に一回
// pingの応答がない場合は、エラーを出力する
// pingの応答がある場合は、応答時間を出力する
// 10分に一回pingを送る

var request = require('request');


while(true) {
    request('http://google.com', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let time = new Date().toLocaleTimeString();
                console.log('[' + time + '] PINGが確認できました。');
            } else {
                let time = new Date().toLocaleTimeString();
                console.log('[' + time + '] PINGが確認できませんでした。');
            }
        });
    // 10分に一回
    require('deasync').sleep(1000 * 60 * 10);
}