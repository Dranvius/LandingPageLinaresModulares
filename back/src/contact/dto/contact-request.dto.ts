import { IsEmail, IsOptional, IsPhoneNumber, IsString, MaxLength } from "class-validator";

export class ContactRequestDto {
  @IsString()
  @MaxLength(120)
  company!: string;

  @IsString()
  @MaxLength(120)
  contact!: string;

  @IsOptional()
  @IsPhoneNumber("CO", { message: "phone must be a valid Colombian number" })
  phone?: string;

  @IsEmail()
  @MaxLength(160)
  email!: string;

  @IsString()
  @MaxLength(1000)
  message!: string;
}
