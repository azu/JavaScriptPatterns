/**
 * Created by azu.
 * Date: 12/06/12 22:27
 * License: MIT License
 */
function genericErrorHandler(error){
    console.log(error)
}
try{
    // 何か異常が発生したのでエラーを投げます
    throw {
        name : "MyErrorType", // カスタムのエラー型
        message : "oops",
        extra : "This was rather embarrassing",
        remedy : genericErrorHandler // これを処理するハンドラ
    }
} catch (e){
    // ユーザに通知
    alert(e.message); // "oops"
    // エラーを優雅に処理
    e.remedy(e); // genericErrorHandler()を呼びます
}
