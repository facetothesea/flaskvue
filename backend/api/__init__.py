from flask import Flask
from flask_cors import CORS
from config import Config 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app=Flask(__name__,static_folder="../../dist/static",template_folder="../../dist")
app.config.from_object(Config)
cors=CORS(app,resources={r"/api/*":{"origins":"*"}})
db=SQLAlchemy(app)
migrate=Migrate(app,db)

from api import routes, models
