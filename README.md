# Test Assignment Project

This is an Angular project that implements a search interface with data table functionality. The application allows users to search through records using multiple criteria and displays the results in a responsive table format.

## Prerequisites

Choose either local development or Docker-based setup:

### Local Development Prerequisites
- Node.js (v16 or higher)
- npm (v6 or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Docker Prerequisites
- Docker
- Docker Compose

## Setup Instructions

### Option 1: Using Docker (Recommended)

1. Clone the Repository
```bash
git clone https://github.com/imAnmolGupta/test_assignment.git
cd test_assignment
```

2. Start the application using Docker Compose
```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:4200
- Backend API: http://localhost:3000

### Option 2: Local Development Setup

1. Clone the Repository
```bash
git clone https://github.com/imAnmolGupta/test_assignment.git
cd test_assignment
```

2. Install Dependencies
```bash
npm install
```

3. Start the Backend Server (JSON Server)
Open a new terminal window and run:
```bash
json-server --watch db.json
```
The JSON server will start on http://localhost:3000

4. Start the Frontend (Angular Application)
Open another terminal window and run:
```bash
npm start
```
The Angular application will start on http://localhost:4200

## Accessing the Application

- Frontend: Open http://localhost:4200 in your web browser
- Backend API: http://localhost:3000/users

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

## Stopping the Application

### Docker Setup
```bash
docker-compose down
```

### Local Setup
1. Press `Ctrl+C` in the Angular server terminal
2. Press `Ctrl+C` in the JSON server terminal

## Troubleshooting

### Docker Issues
1. Port conflicts:
   - Ensure ports 4200 and 3000 are available
   - Modify docker-compose.yml if different ports are needed

2. Container access:
   - Frontend container: `docker-compose exec frontend sh`
   - API container: `docker-compose exec api sh`

3. If the API is not responding:
   ```bash
   docker-compose restart api
   ```

4. If node_modules are not syncing:
   ```bash
   docker-compose down
   docker-compose up --build
   ```

### Local Development Issues
1. Port 4200 already in use:
   ```bash
   # Find the process using port 4200
   lsof -i :4200
   # Kill the process
   kill <PID>
   ```

2. Port 3000 already in use:
   ```bash
   # Find the process using port 3000
   lsof -i :3000
   # Kill the process
   kill <PID>
   ```

3. If you see Angular CLI workspace errors:
   ```bash
   npm install @angular/cli@16.2.0 --save-dev
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

## API Endpoints

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

## License
[MIT License](LICENSE)

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 
