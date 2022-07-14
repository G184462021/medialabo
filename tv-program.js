let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0000",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0000"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう
let s1 = document.querySelector('p#Start');
let s2 = document.querySelector('p#End');
let s3 = document.querySelector('p#Title');
let s4 = document.querySelector('p#SUBtitle');
let s5 = document.querySelector('p#Content');
let s6 = document.querySelector('p#Act');






function hantei() {
  const Cha = document.getElementById('channel').value;//検索欄のチャンネル名の値を取得
  const Gan = document.getElementById('genre').value;//検索欄のジャンル名の値を取得

  let pyoso1 = document.querySelectorAll('#Start p');
for (const P of pyoso1) {
	P.remove();
}

let pyoso2 = document.querySelectorAll('#End p');
for (const P of pyoso2) {
	P.remove();
}

  let pyoso3 = document.querySelectorAll('#Title p');
for (const P of pyoso3) {
	P.remove();
}

let pyoso4 = document.querySelectorAll('#SUBtitle p');
for (const P of pyoso4) {
	P.remove();
}

let pyoso5 = document.querySelectorAll('#Content p');
for (const P of pyoso5) {
	P.remove();
}

let pyoso6 = document.querySelectorAll('#Act p');
for (const P of pyoso6) {
	P.remove();
}



 if (data.list[Cha]) {

for (let n of data.list[Cha]) {

  if (n.genres.includes(Gan)) {
    let p1 = document.createElement('p');
    p1.textContent = n.end_time;
    s1.insertAdjacentElement('beforeend', p1);

    let p2 = document.createElement('p');
    p2.textContent = n.start_time;
    s2.insertAdjacentElement('beforeend', p2);

    let p3 = document.createElement('p');
    p3.textContent = n.title;
    s3.insertAdjacentElement('beforeend', p3);

    let p4 = document.createElement('p');
    p4.textContent = n.subtitle;
    s4.insertAdjacentElement('beforeend', p4);

    let p5 = document.createElement('p');
    p5.textContent = n.content;
    s5.insertAdjacentElement('beforeend', p5);

    let p6 = document.createElement('p');
    p6.textContent = n.act;
    s6.insertAdjacentElement('beforeend', p6);

     }

    }

  }

}

 


let b1 = document.querySelector('#print');
b1.addEventListener('click', hantei);




