"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAvaliacaoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_avaliacao_dto_1 = require("./create-avaliacao.dto");
class UpdateAvaliacaoDto extends (0, mapped_types_1.PartialType)(create_avaliacao_dto_1.CreateAvaliacaoDto) {
}
exports.UpdateAvaliacaoDto = UpdateAvaliacaoDto;
//# sourceMappingURL=update-avaliacao.dto.js.map