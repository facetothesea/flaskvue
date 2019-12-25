from api import app, db
from api.models import *

if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0')

# for windows
# set FLASK_APP=run.py
# flask run

# for linux
# export FLASK_APP=run.py
# flask run
