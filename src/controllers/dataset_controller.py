from flask import Blueprint, request, jsonify, g
from flask_jwt_extended import jwt_required
from repositories.dataset_repository import DatasetRepository
from db import db_query
from utils.audit_decorator import audit_log
from utils.role_decorator import has_permission

dataset_bp = Blueprint("dataset", __name__)

@dataset_bp.route("/dataset", methods=["POST"])
@jwt_required()
@has_permission("create_dataset")
@audit_log(entity="dataset", id_param="dataset_id")
def create_dataset():
    data = request.get_json()
    name = data.get("name")
    description = data.get("description")
    query = data.get("query")

    if not name or not description or not query:
        return jsonify(message="Name, description and query are required"), 400

    dataset_id = DatasetRepository.create_dataset(name, description, query)

    g.audit_entity = {
        "entity": "dataset",
        "entity_id": dataset_id
    }

    return jsonify(message="Dataset created successfully", datasetId=dataset_id)

@dataset_bp.route("/dataset/<int:id>", methods=["GET"])
@jwt_required()
@has_permission("read_dataset")
def get_dataset(id):
    dataset = DatasetRepository.get_dataset_by_id(id)
    if not dataset:
        return jsonify(message="Dataset not found"), 404
    return jsonify(dataset)

@dataset_bp.route("/dataset/<int:id>/data", methods=["GET"])
@jwt_required()
@has_permission("read_dataset")
@audit_log(entity="dataset", id_param="dataset_id")
def get_dataset_data(id):
    dataset = DatasetRepository.get_dataset_by_id(id)
    if not dataset:
        return jsonify(message="Dataset not found"), 404
    return jsonify(db_query(dataset["query"]))

@dataset_bp.route("/dataset/<int:id>", methods=["PUT"])
@jwt_required()
@has_permission("update_dataset")
@audit_log(entity="dataset", id_param="id")
def update_dataset(id):
    data = request.get_json()
    if not DatasetRepository.get_dataset_by_id(id):
        return jsonify(message="Dataset not found"), 404

    DatasetRepository.update_dataset(id, data)
    return jsonify(DatasetRepository.get_dataset_by_id(id))

@dataset_bp.route("/dataset/<int:id>", methods=["DELETE"])
@jwt_required()
@has_permission("delete_dataset")
@audit_log(entity="dataset", id_param="id")
def delete_dataset(id):
    if not DatasetRepository.get_dataset_by_id(id):
        return jsonify(message="Dataset not found"), 404
    DatasetRepository.delete_dataset(id)
    return jsonify(message="Dataset deleted successfully")
