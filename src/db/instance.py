import pymysql
import os
from dotenv import load_dotenv

load_dotenv()

def get_connection():
    return pymysql.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME"),
        port=int(os.getenv("DB_PORT", 3306)),
        cursorclass=pymysql.cursors.DictCursor
    )

def db_query(query, params=None):
    conn = get_connection()
    with conn.cursor() as cursor:
        cursor.execute(query, params or ())
        result = cursor.fetchall()
    conn.close()
    return result

def db_execute(query, params=None, return_last_id=True):
    conn = get_connection()
    with conn.cursor() as cursor:
        cursor.execute(query, params or ())
        conn.commit()
        last_id = cursor.lastrowid if return_last_id else None
    conn.close()
    return last_id
