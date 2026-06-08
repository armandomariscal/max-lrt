# MAX-LRT

Backend platform for metropolitan light rail transit operations, real-time vehicle tracking, route management, and passenger information services.

## Stack

![Node.js](https://img.shields.io/badge/Node.js-24-339933?logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![AdonisJS](https://img.shields.io/badge/AdonisJS-7-5A45FF)
![SQLite](https://img.shields.io/badge/SQLite-Development-003B57?logo=sqlite)
![Lucid ORM](https://img.shields.io/badge/Lucid-ORM-5A45FF)
![REST API](https://img.shields.io/badge/API-REST-009688)
![WebSockets](https://img.shields.io/badge/WebSockets-Real_Time-FF9800)
![Testing](https://img.shields.io/badge/Testing-Japa-00C853)
![ESLint](https://img.shields.io/badge/Code_Quality-ESLint-4B32C3?logo=eslint)
![Prettier](https://img.shields.io/badge/Formatting-Prettier-F7B93E?logo=prettier)
![Architecture](https://img.shields.io/badge/Architecture-DDD_Ready-8A2BE2)

## Overview

MAX-LRT (Metropolitan Area Express Light Rail Transit) is a backend platform designed to support urban rail transit operations through a set of APIs and real-time communication services.

The platform serves as the system of record for transit data and provides information to external applications responsible for route visualization, passenger information, and operational monitoring.

The project is being developed with emphasis on:

- Domain-driven design principles
- API-first architecture
- Real-time communication
- Scalable backend services
- Maintainable domain boundaries
- Transit operations modeling
- Engineering best practices

## Current Features

- AdonisJS API foundation
- TypeScript configuration
- Lucid ORM integration
- SQLite development database
- Environment configuration
- Testing infrastructure
- Linting and formatting setup
- Application bootstrapping
- Development tooling configuration

## Planned Features

- Transit lines management
- Station management
- Route planning
- Timetable management
- Vehicle assignment
- Real-time train tracking
- WebSocket event streaming
- Passenger information services
- Operational alerts
- Geospatial services
- Service disruption management
- Administrative dashboards

## Tech Stack

### Backend

- Node.js
- TypeScript
- AdonisJS
- Lucid ORM
- SQLite (development)
- PostgreSQL (planned)

### Communication

- REST APIs
- WebSockets
- JSON-based event messaging

### Testing & Quality

- Japa
- ESLint
- Prettier
- TypeScript type checking

### DevOps & Tooling

- npm
- GitHub Actions (planned)
- Docker (planned)

## Getting Started

Clone the repository:

```
git clone https://github.com/armandomariscal/max-lrt.git
cd max-lrt
```

Install dependencies:

```
npm install
```

Create environment configuration:

```
cp .env.example .env
```

Generate application key:

```
node ace generate:key
```

Run database migrations:

```
node ace migration:run
```

Start the development server:

```
npm run dev
```

The application will be available at:

```
http://localhost:3333
```

## Development Focus

This project is used to explore and apply backend engineering practices around transportation systems, including:

- Domain modeling
- API design
- Real-time systems
- Event-driven architecture
- WebSocket communication
- Geospatial data handling
- Service-oriented design
- Software architecture patterns
- Documentation standards
- CI/CD workflows

## Domain Vision

The long-term goal is to model a complete metropolitan light rail ecosystem, including operational, administrative, and passenger-facing capabilities.

Core domains currently envisioned include:

- Transit Network
- Stations
- Routes
- Timetables
- Vehicles
- Operations
- Tracking
- Passenger Information

## Status

Early development.

## License

MIT
