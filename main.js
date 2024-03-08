// JavaScript source code

//ルール説明
var rule_book = [
    "・ゼウスはあなたに問題をだします。<br>・あなたは出題された問題について、質問を選択してください。<br>・ゼウスは「はい」「いいえ」「関係ありません」の3択だけで答えます。<br>・あなたは質問を繰り返して推理し、答えを導いてください。"
];
// 問題文の配列
var questions = [
    "古びた家に住むゼウスは、シャンプーのボトルを使い切り、捨てることに疑問を抱いていました。<br>ある晩、彼は使い古したシャンプーのボトルを植物のためになるように変身させる方法を学びました。<br>さて、この方法とは何でしょう?",
    "ゼウスは、ある日、森でバナナを食べていました。<br>森の中でバナナの皮を使い、あるものを輝かせる方法を発見しました。<br>さて、その方法とは何でしょう？",
    "ゼウスは、毎朝新聞を受けとっていました。<br>ある日、ゼウスは廃棄されていた新聞が生まれ変わる可能性に気付きました。<br>新聞を利用して何を作ったのでしょう？",
    "ゼウスは、動かなくなった古い時計を見つけました。<br>ゼウスは、古い時計を捨てずに再利用する方法を見つけようと思いました。<br>この古い時計を再利用して、何か新しいアイテムを作る方法は何ですか？",
    "ゼウスは古い布地を押し入れの中で発見しました。<br>ゼウスは古い布地を取り出し、それを再利用して家を新たな風景で飾りました。<br>再利用して何か役立つものを作る方法は何ですか？"
];

// 選択肢と回答の連想配列
var answers = [
    { choice: "シャンプーのボトルを植物の根元に埋めますか？", answer: "はい" },
    { choice: "それは美容やスキンケアに使用できますか？", answer: "いいえ" },
    { choice: "シャンプーのボトルを植物の茎に差し込みますか？", answer: "わかりません" },

    { choice: "それは水が関係しますか？", answer: "はい" },
    { choice: "それはボトルを植物の実に挿しますか？", answer: "いいえ" },
    { choice: "それは室内で使えますか？", answer: "はい" },

    { choice: "シャンプーのボトルを植物の花に挿しますか？", answer: "いいえ" },
    { choice: "ボトルは使い切る必要がありますか？", answer: "はい" },
    { choice: "シャンプーのボトルを植物の葉っぱに巻きつけますか？", answer: "いいえ" },

    { choice: "植物に悪影響はないですか？", answer: "はい" },
    { choice: "それは電化製品ですか？", answer: "いいえ" },
    { choice: "なぜ植物のために行動したのですか？", answer: "わかりません" },

    { choice: "シャンプーのボトルを切り取りますか？", answer: "はい" },
    { choice: "それは食べられますか？", answer: "いいえ" },
    { choice: "植物の成長に関係していますか？", answer: "はい" },
    /////////////////////////////////////////////
    { choice: "それはほかにも光らせる方法がありますか" ,answer: "はい" },
    { choice: "それは生きているものですか？", answer: "いいえ" },
    { choice: "ゼウスはお金に困っていましたか？", answer: "わかりません" },
               
    { choice: "それは食べることに関連していますか？", answer: "はい" },
    { choice: "それには特別な道具が必要ですか？", answer: "いいえ" },
    { choice: "それは外で使用できますか？", answer: "はい" },
               
    { choice: "それは美容やスキンケアに使用できますか？", answer: "いいえ" },
    { choice: "それはバナナの皮の特性を活かすものですか？", answer: "はい" },
    { choice: "それは家庭内の装飾に関連していますか？", answer: "いいえ" },
               
    { choice: "それはバナナの皮を使うことで環境に優しいものですか？", answer: "はい" },
    { choice: "それは害虫駆除に関連していますか？", answer: "いいえ" },
    { choice: "それにはバナナの皮を加工する必要がありますか？", answer: "わかりません" },
               
    { choice: "それには他の材料が必要ですか？", answer: "いいえ" },
    { choice: "それはアート作品やクラフトに関連していますか？", answer: "いいえ" },
    { choice: "それはバナナの皮の代わりが存在しますか？", answer: "はい" },
     /////////////////////////////////////////////
    { choice: "それは紙の新聞を切ることを必要としますか？", answer: "はい" },
    { choice: "それは紙の新聞を画材として使用しますか？", answer: "はい" },
    { choice: "それには特別な道具が必要ですか？", answer: "わかりません" },

    { choice: "それは家庭内の装飾に関連していますか？", answer: "はい" },
    { choice: "それは家庭内の収納に役立つものですか？", answer: "いいえ" },
    { choice: "それは紙の新聞を折りたたむことを必要としますか？", answer: "はい" },

    { choice: "それは家庭内の清掃に使用できますか？", answer: "いいえ" },
    { choice: "それにはリサイクルに関連していますか？", answer: "はい" },
    { choice: "それは紙の新聞を家具に変身させるものですか？", answer: "いいえ" },

    { choice: "それは紙の新聞を再利用する方法ですか？", answer: "はい" },
    { choice: "それは紙の新聞を使ってラッピングや贈り物に関連していますか？", answer: "いいえ" },
    { choice: "それはDIYプロジェクトに関連していますか？", answer: "わかりません" },

    { choice: "それは紙の新聞を加工する方法ですか？", answer: "はい" },
    { choice: "それは紙の新聞を使って花や植物を育てる方法ですか？", answer: "いいえ" },
    { choice: "それは子供向けのクラフトに関連していますか？", answer: "はい" },
     /////////////////////////////////////////////
    { choice: "それには特別な工具が必要ですか？", answer: "はい" },
    { choice: "それは音の発生に関連していますか？", answer: "いいえ" },
    { choice: "それは古い時計の価値を高める方法ですか？", answer: "わかりません" },

    { choice: "それは時計のメカニズムを再利用するものですか？", answer: "はい" },
    { choice: "それは宝飾品やアクセサリーに変身させる方法ですか？", answer: "いいえ" },
    { choice: "それは家庭内のエコプロジェクトに関連していますか？", answer: "はい" },

    { choice: "それには他の古いアイテムを組み合わせる必要がありますか？", answer: "いいえ" },
    { choice: "それは時間を意味するアート作品に関連していますか？", answer: "はい" },
    { choice: "それは時計の歴史に関連していますか？", answer: "いいえ" },

    { choice: "それには時計の部品を分解する必要がありますか？", answer: "はい" },
    { choice: "それは音楽に関連していますか？", answer: "いいえ" },
    { choice: "それは家具に関連していますか？", answer: "わかりません" },

    { choice: "それは時間を意味するアート作品に関連していますか？", answer: "はい" },
    { choice: "それは時間を測ることに関連していますか？", answer: "いいえ" },
    { choice: "それは家庭内の装飾に使用できますか？", answer: "はい" },
    ///////////////////////////////////////////////////////////////////////////////////////////////
    { choice: "それは家庭内の装飾に関連していますか？", answer: "はい" },
    { choice: "それは服を着ることに関連していますか？", answer: "いいえ" },
    { choice: "それは古着をファッショナブルに再デザインする方法ですか？", answer: "わかりません" },

    { choice: "それには布地を縫い合わせる必要がありますか？", answer: "はい" },
    { choice: "それは布地を染めることが必要ですか？", answer: "いいえ" },
    { choice: "それはDIYに関連していますか？", answer: "はい" },

    { choice: "それには他の再利用アイテムを組み合わせる必要がありますか？", answer: "いいえ" },
    { choice: "それは破れた布地を修理する方法ですか？", answer: "はい" },
    { choice: "それには特別な縫製スキルが必要ですか？", answer: "いいえ" },

    { choice: "それは家庭内のエコプロジェクトに関連していますか？", answer: "はい" },
    { choice: "それは古着を新たなアクセサリーに変身させる方法ですか？", answer: "いいえ" },
    { choice: "それはユニークな贈り物やギフトに関連していますか？", answer: "わかりません" },

    { choice: "それは身に着けることができますか？", answer: "はい" },
    { choice: "それは織物や布地の技術に関連していますか？", answer: "いいえ" },
    { choice: "それは家庭内の収納に役立つものですか？", answer: "いいえ" },

]
const choices = [//選択肢
    'ボトル', '切ること', '潅水装置', '二倍に増える', '耕作装置',//1
    '鞄', '靴', '食べる', 'バナナの皮', '磨くこと',//2
    '新聞紙', 'ちぎること', '折ること', '紙袋', '折り紙やアート',//3
    'インテリア', '時計', '溶かすこと', '削ること', '分解すること',//4
    '敷き詰めること', '布地', 'カーペット', '裁縫すること', 'ブランケット'//5
];
const correctAnswers = [//解答
  　['ボトル', '切ること', '潅水装置'],//1
  　['靴', 'バナナの皮', '磨くこと',],//2
    ['新聞紙', '折ること', '折り紙やアート'],//3
    ['時計', '分解すること', 'インテリア',],//4
    ['布地', '裁縫すること', 'ブランケット']//5
];
const colors = ["red", "orange", "blue"];

let score = 0;//正解数
let cIndex = -5;//選択肢を５つずつ表示するためのカウンター初期値は-5。
const chunkSize = 5; // 一度に表示する選択肢の数
let correctAnswersIndex = 0;//解凍表示の際に使うカウント
var choicesClickCount = 0;//choicesのクリックした回数
var index = -1;//配列番号
var currentIndex = 0;//制御用番号
let userSelections = [];// ユーザーの選択情報を格納する配列を定義
$(function () {
    trans_Title();//タイトル画面遷移
})
// choiceのボタンを指定
var buttonsContainer = $("#choices");

// 初期表示用の関数
var index = showQuestion();
showInitialButtons();
function showInitialButtons() {
    for (var i = currentIndex; i < currentIndex + 3 && i < answers.length; i++) {
        var button = $("<button></button>").html(answers[i].choice);
        button.attr("onclick", "showAnswer(" + i + ")");
        buttonsContainer.append(button);
       
    }
}

// 問題文を表示する関数
function showQuestion() {
    
    $("#question").html(questions[index]);
    index++;
    return index;

   //問題を画面遷移した際にindex番号を進めたい
    
}

// 回答を表示する関数
function showAnswer(index) {
    $("#answer").html(answers[index].choice+ ":A " +answers[index].answer);
    choicesClickCount++;
    if (choicesClickCount % 5 === 0) {
        // 問題番号を進める
        showQuestion();
        // 新しい問題を表示する
        if (index < questions.length) {
            $("#question").html(questions[index]);
        }
        // ボタンを初期化する
        buttonsContainer.empty();
        showInitialButtons();
        $('#question').css('display', 'none');
        $('#choices').css('display', 'none');
        $("#next0").css('display', 'block');
    }
}
// クリック時の処理
buttonsContainer.on("click", function () {
    currentIndex += 3;
    buttonsContainer.empty();
    if (currentIndex >= answers.length) {
        currentIndex = 0;
        index = showQuestion();
        $("#answer").html("");
    }
    showInitialButtons();
});



// チェックボックスを作成し、選択肢を埋め込む関数
function createCheckboxes() {
    cIndex += 5;
    const choicesToShow = choices.slice(cIndex, cIndex + chunkSize);
    const colorMap = new Map();
    choicesToShow.forEach((choice, choiceIndex) => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = choice;
        checkbox.id = `checkbox - ${ choiceIndex }`;
        const label = document.createElement('label');
        label.textContent = choice;
        label.setAttribute('for', `checkbox - ${ choiceIndex }`);
        document.body.appendChild(checkbox);
        document.body.appendChild(label);
        colorMap.set(choice, null);
    });
    $('input[type="checkbox"]').on('click', function () {
        const index = $('input[type="checkbox"]').index(this);
        const label = $('label').eq(index);
        const choice = label.text();
        if ($(this).is(':checked')) {
            const color = colors.find(color => !colorMap.has(color) || colorMap.get(color) === choice);
            colorMap.set(color, choice);
            label.css('color', color);
        } else {
            const color = colorMap.get(choice);
            colorMap.set(color, null);
            label.css('color', '');
        }
    });
}



// チェックボックスを削除する関数
function removeCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.remove());
    const labels = document.querySelectorAll('label');
    labels.forEach(label => label.remove());
}

// 正誤判定とスコア計算を行う関数
function checkAnswers() {

    const selectedChoices = userSelections.map(selection => selection);
    const correctChoices = correctAnswers[correctAnswersIndex];
    correctAnswersIndex += 1;
    $("#hantei").css('display', 'none');
    if (JSON.stringify(selectedChoices) === JSON.stringify(correctChoices)) {
        const selectedAnswers = userSelections.join("、");
        removeCheckboxes();
        $(".result").text("「" + selectedChoices[0] + "」を「" + selectedChoices[1] + "」で「" + selectedChoices[2] + "」ができるとなり、正解です");
        $("#maru").css("display", "block");
        score += 1;
        //userSelections配列を初期化
        userSelections = [];
    } else {
        removeCheckboxes();
        $(".result").text("不正解です");
        $(".result").append($("<p>").text("「"+correctChoices[0] + "」を「" + correctChoices[1] + "」で「" + correctChoices[2] + "」ができる" + "が正解です"));
        $("#batsu").css("display", "block");
        //userSelections配列を初期化
        userSelections = [];
    }
    
}


 function trans() {
     if (cIndex >= 20) {
         removeCheckboxes();
         $("#next1").css("display", "none");
         trans_Result(score);
     }
     else {
         removeCheckboxes();
         $("#next1").css("display", "none");
         trans_Question();
     }
        
}
// 問題をチェックする関数
function CheckQuestion() {
    userSelections = [];
    removeCheckboxes();
    $(".result").text("*チェックボックスをクリックすると色が順番に赤色、橙色、青色に一度だけ変化するよ");
    $(".result").append($('<div class="mondai">').text('それは')
        .append($('<span>').text('？？？').css('color', 'red'))
        .append('を')
        .append($('<span>').text('？？？').css('color', 'orange'))
        .append('で')
        .append($('<span>').text('？？？').css('color', 'blue'))
        .append(' ができる。当てはまるものを３つ選ぼう。'));
    $("#hantei").css('display', 'block');
    createCheckboxes();

    document.addEventListener('change', (event) => {
        if (event.target.type === 'checkbox') {
            const selectedChoice = event.target.value;
            if (event.target.checked && !userSelections.includes(selectedChoice)) {
                userSelections.push(selectedChoice);
            } else if (!event.target.checked && userSelections.includes(selectedChoice)) {
                const index = userSelections.indexOf(selectedChoice);
                userSelections.splice(index, 1);
            }
        }
    });
    
}

function Result(score) {
    // 既存のスコア表示を削除
    const existingScoreText = document.querySelector('strong');
    if (existingScoreText) {
        existingScoreText.remove();
    }
    
    if (score <= 3) {
        $("#img1").css("display", "block");
        $("#comment").text("まだまだ頭が固いようじゃのう...");
    }
    else if (score >= 4) {
        $("#img2").css("display", "block");
        $("#comment").text("お主すごいじゃないか！！！天才だな！！！");

    }
    // scoreを太文字のscore/5点として表示
    const scoreText = document.createElement('strong');
    scoreText.textContent = ("正答率"+score + "/5点");
    document.body.appendChild(scoreText);
}


$("#start").on("click", function () {
    trans_Question();//問題画面へ
    showQuestion();
});
$("#rule").on("click", function () {
    trans_Rule();//ルール説明画面表示
    $('.rule_page').html(rule_book);
    $('.rule_page').append($('<button class="go_title">').text('タイトルへ戻る'));

    $('.go_title').on("click", function () {
        trans_Title();
    });
});
//回答を選択する画面へ
$("#next0").on("click", function () {
    trans_DropQuestion();
});
//次の問題へボタン
$("#next1").on("click", function () {
    trans();
});
//正誤判定呼び出しボタン
$("#hantei").on("click", function () {
        $("#next1").css("display", "block");
        checkAnswers();
});
    //restartボタン設定
$("#restart").on("click", function () {
    // データの初期化とタイトルページへの遷移
     score = 0;//正解数
     cIndex = -5;//選択肢を５つずつ表示するためのカウンター初期値は-5。
     correctAnswersIndex = 0;//解凍表示の際に使うカウント
     choicesClickCount = 0;//choicesのクリックした回数
     index = 0;//配列番号
     currentIndex = 0;//制御用番号
    userSelections = [];// ユーザーの選択情報を格納する配列を定義
    $('strong').css("display", "none");
    $("#img1").css("display", "none");
    $("#img2").css("display", "none");
    trans_Title();
});
function trans_Title() {
    $('#img0').css('display', 'block');
    $('.title_page').css('display', 'block');
    $('.rule_page').css('display', 'none');
    $('.question_page').css('display', 'none');
    $('.drop_page').css('display', 'none');
    $('.result_page').css('display', 'none');
    
}
function trans_Rule() {
    $('.title_page').css('display', 'none');
    $('.rule_page').css('display', 'block');
    $('.question_page').css('display', 'none');
    $('.drop_page').css('display', 'none');
    $('.result_page').css('display', 'none');
}
function trans_Question() {
    $('.title_page').css('display', 'none');
    $('.rule_page').css('display', 'none');
    $('.question_page').css('display', 'block');
    $('.drop_page').css('display', 'none');
    $('.result_page').css('display', 'none');
    $('#question').css('display', 'block');
    $('#choices').css('display', 'block');
    $("#next0").css('display', 'none');
    $("#maru").css("display", "none")
    $("#batsu").css("display", "none")
    $("#answer").html("");
    
}
function trans_DropQuestion() {
    $('.title_page').css('display', 'none');
    $('.rule_page').css('display', 'none');
    $('.question_page').css('display', 'none');
    $('.drop_page').css('display', 'block');
    $('.result_page').css('display', 'none');
    CheckQuestion();
}
function trans_Result() {
    $('.title_page').css('display', 'none');
    $('.rule_page').css('display', 'none');
    $('.question_page').css('display', 'none');
    $('.drop_page').css('display', 'none');
    $('.result_page').css('display', 'block');
    Result(score);//点数表示、最終画面
}


