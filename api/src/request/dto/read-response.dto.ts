import { IsString, MaxLength, IsNumber } from "class-validator";
import { CreateHitDto } from "./create-hit.dto";
import { isBoolean } from "util";

export class ReadResponseDto {
    readonly exhaustiveNbHits: boolean;

    readonly hits: [CreateHitDto];

    @IsNumber()
    readonly nbHits: number;

}