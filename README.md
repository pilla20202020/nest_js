# NestJS REST API

A NestJS REST API with user management, JWT authentication, and a PostgreSQL database managed via Prisma ORM.

## Tech Stack

- **Framework:** [NestJS](https://nestjs.com/) v11 (TypeScript)
- **Database:** PostgreSQL
- **ORM:** [Prisma](https://www.prisma.io/) v7
- **Auth:** JWT (`@nestjs/jwt`) + Passport
- **Validation:** `class-validator` / `class-transformer`
- **Password hashing:** `bcrypt`

## Project Structure

```
src/
├── auth/          # Authentication module (JWT)
├── users/         # Users module (CRUD)
│   └── dto/       # Data Transfer Objects
├── prisma/        # Prisma service & module
└── common/
    └── utils/     # Shared utilities (dd helper)
prisma/
├── schema.prisma  # Database schema
└── migrations/    # Prisma migration history
```

## Database Schema

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## API Endpoints

| Method | Path     | Description       |
|--------|----------|-------------------|
| POST   | /users   | Create a new user |
| GET    | /users   | List all users    |

### Create User — `POST /users`

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secret123"
}
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Yarn

### Installation

```bash
yarn install
```

### Environment Setup

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME"
JWT_SECRET="your-jwt-secret"
```

### Database Setup

```bash
# Run migrations
npx prisma migrate deploy

# (Optional) Open Prisma Studio
npx prisma studio
```

### Running the App

```bash
# Development
yarn start

# Watch mode (auto-reload)
yarn start:dev

# Production
yarn start:prod
```

The server starts on **http://localhost:3000**.

## Scripts

| Command              | Description                        |
|----------------------|------------------------------------|
| `yarn build`         | Compile TypeScript to `dist/`      |
| `yarn start:dev`     | Start with file watching           |
| `yarn start:debug`   | Start with debugger attached       |
| `yarn lint`          | Lint and auto-fix source files     |
| `yarn format`        | Format source files with Prettier  |

## Testing

```bash
# Unit tests
yarn test

# Watch mode
yarn test:watch

# e2e tests
yarn test:e2e

# Coverage report
yarn test:cov
```

## License

UNLICENSED


