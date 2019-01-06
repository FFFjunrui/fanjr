# coding: utf-8

from flask_script import Manager, Server, prompt_bool

import os
import sys
PROJECT_ROOT = os.path.realpath(os.path.dirname(__file__))
sys.path.insert(0, os.path.join(PROJECT_ROOT, os.pardir))

from server.application import app
from server import api

api.bind_app(app)

# 以下是启动参数
manager = Manager(app)
manager.add_command("run", Server(port=8554, host="0.0.0.0"))

if __name__ == '__main__':
    manager.run()
