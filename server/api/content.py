# coding: utf-8
from flask_restful import Resource
from flask import jsonify


class ApiMilan(Resource):
    def __init__(self):
        pass

    def get(self):
        res = {
            "name": "milan-kundera"
        }
        return jsonify(res)
