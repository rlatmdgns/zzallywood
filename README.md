# ZZALLYWOOD

## 😄 파일 구조

```
┌── .next/                      - next install
├── node_modules/
├── public/                     - fonts, images, lotties
├── src/
│   ├── constants/              - 프로젝트에서 사용하고 있는 상수 모음
│   │    └── content/           - 도메인별로 페이지에서 사용할 텍스트 리소스 모음
│   │    └── paths/             - 이미지, 페이지 URL 정보
│   │    └── index.ts
│   │
│   ├── components              - 공통 컴포넌트
│   │
│   │
│   ├── hooks/                  - 프로젝트 공통으로 사용하는 custom hooks 모음
│   │
│   ├── modules/                - 모듈 모음
│   │
│   ├── styles/                 - 스타일 모음
│   │   └── globalStyle.ts      - 전체 스타일
│   │   └── Theme.ts            - 프로젝트 테마
│   │
│   ├── services/               - API Service 모음
│
├── .github                     - github CI workflows, pull request에 사용되는 template
├── .eslintrc                   - eslint 설정
├── .env                        - 전체 환경에서 사용되는 환경 변수
├── .env.development            - Development 환경에서 사용되는 환경 변수
├── .env.production             - Production 환경에서 사용되는 환경 변수
├── .gitignore                  - git 형상관리에서 체크하지 않는 파일
├── .prettierrc                 - prettier 설정             - amplfy 설정 파일
├── next.config.js              - next 설정 파일
├── next-env.d.ts
├── package.json
├── README.md
```
