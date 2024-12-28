import { Controller, Post, Body, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from '../users/dto/login.dto';
import { AuthGuard } from './auth.guard';

@ApiTags('인증')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '회원가입' })
  @ApiResponse({ 
    status: 201, 
    description: '회원가입 성공',
    type: CreateUserDto 
  })
  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @ApiOperation({ summary: '로그인' })
  @ApiResponse({ 
    status: 200, 
    description: '로그인 성공. JWT 토큰 반환',
    schema: {
      properties: {
        access_token: {
          type: 'string',
          example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        },
      },
    },
  })
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @ApiOperation({ summary: '회원탈퇴' })
  @ApiResponse({ 
    status: 200, 
    description: '회원탈퇴 성공',
    schema: {
      properties: {
        message: {
          type: 'string',
          example: '회원 탈퇴가 완료되었습니다.',
        },
      },
    },
  })
  @ApiBearerAuth()
  @Delete('withdraw')
  @UseGuards(AuthGuard)
  withdraw(@Request() req) {
    return this.authService.remove(req.user.sub);
  }
} 