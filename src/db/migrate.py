import os
from utils import run_sql_files

def main():
    print("Running Migrations...")
    run_sql_files(os.path.join(os.path.dirname(__file__), "migrations"))
    print("Migrations completed!")

if __name__ == "__main__":
    main()