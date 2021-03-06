import { IsString, MaxLength, IsNumber, IsArray, IsObject } from "class-validator";
import { Exclude, Expose } from 'class-transformer';

@Expose()
export class ReadNewsDto {
    @IsString()
    @MaxLength(200, { message: 'this is not valid.' })
    readonly comment_text: string;

    @IsString()
    @MaxLength(200, { message: 'this is not valid.' })
    readonly title: string;

    @IsString()
    @MaxLength(200, { message: 'this is not valid.' })
    readonly url: string;

    @IsString()
    @MaxLength(200, { message: 'this is not valid.' })
    readonly author: string;

    @IsString()
    @MaxLength(200, { message: 'this is not valid.' })
    readonly objectID: string;

    @IsNumber()
    readonly created_at_i: number;

    @IsNumber()
    readonly created_at: string;

    @IsNumber()
    readonly points: number;

    @IsNumber()
    readonly num_comments: number;

    @IsNumber()
    readonly parent_id: number;

    @IsNumber()
    readonly story_id: number;

    @IsString()
    @MaxLength(200, { message: 'this is not valid.' })
    readonly story_text: string;

    @IsString()
    @MaxLength(200, { message: 'this is not valid.' })
    readonly status: string;

    @IsString()
    @MaxLength(200, { message: 'this is not valid.' })
    readonly story_title: string;

    @IsString()
    @MaxLength(200, { message: 'this is not valid.' })
    readonly story_url: string;

    @IsArray()
    readonly _tags: [string];

    @IsObject()
    readonly _highlightResult: {};

}