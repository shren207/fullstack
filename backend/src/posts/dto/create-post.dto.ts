import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: '게시글 제목입니다',
    description: '게시글 제목',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  title: string;

  @ApiProperty({
    example: '게시글 본문입니다',
    description: '게시글 내용',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  content: string;
} 