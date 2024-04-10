"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 0;
    };
    const validateDate = (date) => {
        return date.toString().length > 0;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Namespaces are cool!'));
//# sourceMappingURL=main.js.map