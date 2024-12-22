import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateIssueDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;
}
