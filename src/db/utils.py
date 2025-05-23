import pymysql
import os
from dotenv import load_dotenv

load_dotenv()

def run_sql_files(directory):
    conn = pymysql.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME"),
        port=int(os.getenv("DB_PORT", 3306)),
        cursorclass=pymysql.cursors.DictCursor
    )
    cursor = conn.cursor()

    files = sorted(os.listdir(directory))
    for file in files:
        if file.endswith(".sql"):
            with open(os.path.join(directory, file), "r", encoding="utf-8") as f:
                sql = f.read()
                for statement in sql.split(";"):
                    if statement.strip():
                        cursor.execute(statement)
            print(f"Executed: {file}")

    conn.commit()
    cursor.close()
    conn.close()
