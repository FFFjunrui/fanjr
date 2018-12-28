# coding: utf-8
from flask import Flask

import os
import sys
PROJECT_ROOT = os.path.realpath(os.path.dirname(__file__))
sys.path.insert(0, os.path.join(PROJECT_ROOT, os.pardir))

from fanjr.config import APP_KEY

app = Flask(__name__)
app.secret_key = APP_KEY

if __name__ == "__main__":
    print(PROJECT_ROOT)
