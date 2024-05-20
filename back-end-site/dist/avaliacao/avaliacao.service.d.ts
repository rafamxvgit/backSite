import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
export declare class AvaliacaoService {
    create(createAvaliacaoDto: CreateAvaliacaoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAvaliacaoDto: UpdateAvaliacaoDto): string;
    remove(id: number): string;
}
