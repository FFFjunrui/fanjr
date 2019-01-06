# coding: utf-8
from flask import Flask

import os
import sys
PROJECT_ROOT = os.path.realpath(os.path.dirname(__file__))
sys.path.insert(0, os.path.join(PROJECT_ROOT, os.pardir))

from server.config import APP_KEY

app = Flask(__name__)
app.secret_key = APP_KEY

