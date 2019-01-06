from flask_restful import Api

def bind_app(app):
    api = Api(app, catch_all_404s=True)

    from . import content
    api.add_resource(content.ApiMilan, "/api/milan-kundera")
