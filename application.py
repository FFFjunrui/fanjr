# coding: utf-8
from flask import Flask, request, render_template

import os
import sys
PROJECT_ROOT = os.path.realpath(os.path.dirname(__file__))
sys.path.insert(0, os.path.join(PROJECT_ROOT, os.pardir))

from fanjr.config import APP_KEY

app = Flask(__name__)
app.secret_key = APP_KEY

@app.route('/md', methods=['GET'])
def md():
    if request.method == 'GET':
        with open("./makedown/vim.md") as fd:
            v = fd.readlines()
            print(v)
        return render_template("test.html", **locals())

@app.route('/milan-kundera', methods=['GET'])
def job():
    if request.method == 'GET':
        return render_template("milan-kundera.html")

@app.route('/index', methods=['GET'])
def index():
    if request.method == 'GET':
        map = [
            ["米兰-昆德拉", "milankundera"]
        ]
        return render_template("index.html", **locals())

if __name__ == "__main__":
    print(PROJECT_ROOT)
