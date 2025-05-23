## Requirements

- Python
- MySQL database
- pip

## Installation

1. Clone repo:
   ```bash
   git clone https://your-repo-url.git
   cd your-repo
   ```

2. Create a .env file in the root folder:
   ```ini
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=db_name
   DB_USER=user
   DB_PASSWORD=password
   JWT_SECRET_KEY=secretkey
   ```

3. Install dependencies (or do it in venv):
   ```bash
   pip install -r requirements.txt
   ```
  
4. Run database migrations:
   ```bash
   python db/migrate.py
   ```
  
5. Seed the database with initial data:
   ```bash
   python db/seed.py
   ```

6. Start the development server:
   ```bash
   python app.py
   ```