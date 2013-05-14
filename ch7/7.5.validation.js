/**
 * User: azu
 * Date: 2013/05/14
 * License: MIT License
 */
var validator = {
    types: {},
    messages: [],
    config: {},
    hasError: function (){
        return validator.messages.length !== 0;
    }
};
// 空の値でないか検査
validator.types.isNonEmpty = {
    validate: function (value){
        return value !== "";
    },
    instructions: "the value cannot be empty"
};
// 値が数字か検査
validator.types.isNumber = {
    validate: function (value){
        return !isNaN(value);
    },
    instructions: "the value can only be a valid number, e.g. 1, 3.14 or 2010"
};
// 値が英数字か検査
validator.types.isAlphaNum = {
    validate: function (value){
        return !/[^a-z0-9]/i.test(value);
    },
    instructions: "the value can only contain characters and numbers, no special symbols"
};
function validate(data){
    validator.messages = [];
    var keys = Object.keys(data);
    for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        var value = data[key];
        var validationType = validator.config[key];
        var checker = validator.types[validationType];
        // バリデーションするtypeが定義されてないならスルー
        if (validationType == null) {
            continue;
        }
        if (checker == null) {
            throw new Error({
                name: "ValidationError",
                message: "No handler to validate type " + validationType
            });
        }
        // バリデーションする
        var resultOK = checker.validate(value);
        // falseならバリデーション失敗してるのエラーメッセージを追加する
        if (!resultOK) {
            var invalidMessage = "Invalid value for *" + key + "*, " + checker.instructions;
            validator.messages.push(invalidMessage);
        }
    }
    return validator.hasError();
}


var data = {
    first_name: "Super", last_name: "Man", age: "unknown", username: "o_O"
};
validator.config = {
    first_name: 'isNonEmpty', age: 'isNumber', username: 'isAlphaNum'
};
if (validate(data)) {
    console.log(validator.messages.join("\n"));
}
