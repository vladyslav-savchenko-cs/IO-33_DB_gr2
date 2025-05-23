from db import db_query, db_execute

class DatasetRepository:
    @staticmethod
    def create_dataset(name, description, query_str):
        return db_execute("INSERT INTO datasets (name, description, query) VALUES (%s, %s, %s)", (name, description, query_str))

    @staticmethod
    def get_dataset_by_id(dataset_id):
        result = db_query("SELECT * FROM datasets WHERE id = %s", (dataset_id,))
        return result[0] if result else None

    @staticmethod
    def get_all_datasets():
        return db_query("SELECT * FROM datasets")

    @staticmethod
    def update_dataset(dataset_id, updates):
        set_clause = ", ".join([f"{k} = %s" for k in updates.keys()])
        values = list(updates.values()) + [dataset_id]
        db_execute(f"UPDATE datasets SET {set_clause} WHERE id = %s", values)
        return True

    @staticmethod
    def delete_dataset(dataset_id):
        db_execute("DELETE FROM datasets WHERE id = %s", (dataset_id,))
        return True