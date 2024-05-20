import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
export declare class AvaliacaoController {
    private readonly avaliacaoService;
    constructor(avaliacaoService: AvaliacaoService);
    create(createAvaliacaoDto: CreateAvaliacaoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAvaliacaoDto: UpdateAvaliacaoDto): string;
    remove(id: string): string;
}
