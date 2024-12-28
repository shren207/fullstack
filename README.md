# 게시판 프로젝트

## 프로젝트 구조
```
.
├── frontend/          # Next.js 프론트엔드
├── backend/           # Nest.js 백엔드
└── docker-compose.yml # MySQL 데이터베이스 설정
```

## 기술 스택

### Frontend
- Next.js
- TypeScript
- Emotion
- React-Query
- React-Hook-Form
- Jotai (필요시)

### Backend
- Nest.js
- TypeScript
- MySQL (Docker)

## 시작하기

### 사전 요구사항
- Node.js 18 이상
- Docker Desktop
- Yarn

### 설치 및 실행

1. 저장소 클론
```bash
git clone [repository-url]
cd [repository-name]
```

2. 의존성 설치
```bash
yarn install
```

3. 데이터베이스 실행
```bash
docker compose up -d
```

4. 개발 서버 실행 (프론트엔드 + 백엔드)
```bash
yarn dev
```

## 접속 정보

- 프론트엔드: http://localhost:3000
- 백엔드: http://localhost:3001
- API 문서: http://localhost:3001/api-docs
- 데이터베이스: localhost:3306

## 개발 명령어

- `yarn dev`: 모든 워크스페이스 개발 서버 실행
- `yarn dev:frontend`: 프론트엔드 개발 서버 실행
- `yarn dev:backend`: 백엔드 개발 서버 실행
- `yarn build`: 모든 워크스페이스 빌드
- `yarn build:frontend`: 프론트엔드 빌드
- `yarn build:backend`: 백엔드 빌드

## 워크스페이스 구조

- `frontend`: Next.js 프론트엔드 애플리케이션
- `backend`: Nest.js 백엔드 API 서버 