// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let b1 = document.querySelector('#print');
b1.addEventListener('click', hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso =document.querySelector('input[name="YOSOU"]');       // 第5回課題:テキストボックスの数値をここに代入
    let kaitou = Math.floor(yoso.value); 
    
    let an = document.querySelector('p#result');
    let s = document.querySelector('span#kai');
    s.textContent = kaisu+"回目の予想:";
    let y = document.querySelector('span#yo');
    y.textContent = kaitou;
    
    
    if(kaisu>3){
      an.textContent=  "答えは "+kotae+" でした．すでにゲームは終わっています";
      kaisu = kaisu+1;
    }else if(kaisu===3&&kaitou!==kotae){
        an.textContent="gameoverです.答えは"+kotae+"でした.";
        kaisu = kaisu+1;
    }else if(kaitou===kotae){
        an.textContent= "正解です．おめでとう!";
        kaisu = kaisu+1;
    }else if(kotae>kaitou){
        an.textContent=    "まちがい．答えはもっと大きいですよ（または小さいですよ）";
        kaisu = kaisu+1;
    }else{
        an.textContent=    "まちがい．答えはもっと小さいですよ（または大きいですよ）";
        kaisu = kaisu+1;
    }
    
}
