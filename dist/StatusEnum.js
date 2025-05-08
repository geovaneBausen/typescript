"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusEnum = void 0;
// Enum para Status
// Status
class StatusEnem {
    constructor(cod, descricao) {
        this.cod = cod;
        this.descricao = descricao;
    }
}
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["ABERTO"] = 0] = "ABERTO";
    StatusEnum[StatusEnum["FECHADO"] = 1] = "FECHADO";
    StatusEnum[StatusEnum["CANCELADO"] = 2] = "CANCELADO";
})(StatusEnum || (exports.StatusEnum = StatusEnum = {}));
//# sourceMappingURL=StatusEnum.js.map