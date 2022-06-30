// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    
    let an = document.querySelector('p#result');
    let s = document.querySelector('span#kai');
    s.textContent = kaisu;
    let y = document.querySelector('span#yo');
    y.textContent = yoso;
    
    if(kaisu>3){
      an.textContent=  "答えは "+kotae+" でした．すでにゲームは終わっています";
    }else if(yoso===kotae){
        an.textContent= "正解です．おめでとう!";
        kaisu = kaisu+1;
    }else if(kotae>yoso){
        an.textContent=    "まちがい．答えはもっと大きいですよ（または小さいですよ）";
        kaisu = kaisu+1;
    }else{
        an.textContent=    "まちがい．答えはもっと小さいですよ（または大きいですよ）";
        kaisu = kaisu+1;
    }
    
}
