# Test Assignment Project

This is an Angular project that implements a search interface with data table functionality. The application allows users to search through records using multiple criteria and displays the results in a responsive table format.

## Features
- Search Panel with multiple search fields:
  - First Name
  - Last Name
  - Address
  - Phone
  - Number
  - Position
- Responsive Data Table with sortable columns
- Real-time search functionality
- Material Design UI components
- JSON-server backend for data persistence

## Technology Stack
- Angular 16
- Angular Material
- TypeScript
- JSON Server
- Docker & Docker Compose

## Prerequisites
Choose either local development or Docker-based setup:

### Local Development
- Node.js (v16 or higher)
- npm (v6 or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Docker-based Development
- Docker
- Docker Compose

## Setup Instructions

### Using Docker (Recommended)
1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Start the application using Docker Compose:
```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:4200
- API: http://localhost:3000

### Local Development
1. Install dependencies:
```bash
npm install
```

2. Install and start JSON-server:
```bash
npm install -g json-server
json-server --watch db.json
```

3. Start the Angular application:
```bash
ng serve
```

## Project Structure
```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── search-panel/
│   │   │   └── data-table/
│   │   ├── services/
│   │   ├── models/
│   │   └── app.module.ts
│   ├── assets/
│   └── index.html
├── docker-compose.yml
├── Dockerfile
├── db.json
└── package.json
```

## Development

### Making Changes
- The application uses hot-reloading, so changes will be reflected immediately
- When using Docker, the volumes are mounted, so local changes will sync with the container

### API Endpoints
The JSON Server provides RESTful endpoints:
- GET `/users` - List all users
- GET `/users?firstName_like=value` - Search users by first name
- GET `/users?lastName_like=value` - Search users by last name
- (Similar endpoints for other fields)

## Design Decisions
1. SOLID Principles Implementation:
   - Single Responsibility: Each component has a single purpose
   - Open-Closed: Components are extensible without modification
   - Interface Segregation: Clean separation of component interfaces
   - Dependency Inversion: Services are injected where needed

2. UI/UX Considerations:
   - Material Design for consistent look and feel
   - Responsive layout for various screen sizes
   - Interactive table with sorting capabilities
   - Clear search form with proper field validation

3. Performance:
   - Lazy loading where applicable
   - Efficient search with server-side filtering
   - Optimized Docker configuration for development

## Troubleshooting

### Docker Issues
1. Port conflicts:
   - Ensure ports 4200 and 3000 are available
   - Modify docker-compose.yml if different ports are needed

2. Container access:
   - Frontend container: `docker-compose exec frontend sh`
   - API container: `docker-compose exec api sh`

### Common Issues
1. If the API is not responding:
   ```bash
   docker-compose restart api
   ```

2. If node_modules are not syncing:
   ```bash
   docker-compose down
   docker-compose up --build
   ```

## License
[MIT License](LICENSE)

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 
