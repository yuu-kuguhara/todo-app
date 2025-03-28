const addTask = document.querySelector('.add'); /* document.querySelectorで入力フォームの要素を取得 */

const list = document.querySelector('.tasks');

// 作成したオブジェクトを配列に追加
let todos = [];

function addtodo(text) {
    // 現在日時に関するデータとtodoタスクを含んだオブジェクトを作成
    const todo = {
        id: Date.now(),
        text,
    };
    todos.push(todo) /* オブジェクトを追加 */
};

// 画面上の入力フォームを初期状態に戻す
function rendertodo() {
    let temp = ''; /* 空の文字列が入った変数tempを宣言 */

    // todos配列の要素を１つずつ呼び出し表示する
    todos.forEach(todo => {  /* forEach→配列に格納されている要素を順に呼び出し、処理を実行 */
        const html = `  
            <li key="${todo.id}">
                <span>${todo.text}</span>
        </li>
        `;
        /* ``→変数を+でつながなくても埋め込むことが出来る */
        temp += html; /* 左辺の変数の値に右辺の変数を加算し、その値を左辺の変数に代入 */
    });

    list.innerHTML = temp; /* <ui>要素の中身を生成したHTMLコードに変更 */
};

// enterが押下されたタイミングを感知する
addTask.addEventListener('submit', e => { /* submit=enter押下のイベントを表す */
    e.preventDefault(); /* デフォルトのアクションをキャンセル */

    // 入力されたtodoタスクを取得
const text = addTask.add.value.trim(); /* .trim() →文字列の両端の空白を削除 */
if (text !== '') {
    addtodo(text);
    addTask.reset();
    rendertodo();
}
});





