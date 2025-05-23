import os
from utils import run_sql_files

def main():
    print("Running Seeders...")
    run_sql_files(os.path.join(os.path.dirname(__file__), "seeders"))
    print("Seeders completed!")

if __name__ == "__main__":
    main()