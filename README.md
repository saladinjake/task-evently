# Evently Tickets Marketplace

## How to run the application

1. Start the Docker containers:
   ```bash
   docker-compose up -d
   ```
2. Access the application:
   - Frontend: [http://localhost:3114](http://localhost:3114)
   - API: [http://localhost:5114](http://localhost:5114)

## How to seed the database

Run the following command to populate the database with sample events and tickets:
```bash
docker exec evently_api npm run seed
```

Last updated: 2026-05-01
