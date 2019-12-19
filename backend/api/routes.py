from api import app
from flask import render_template,jsonify

# test url
@app.route('/hello')
def index():
    return "hello flask backend"

# restful apis start
@app.route('/api/material/getList',methods=['GET'])
def mat_getlist():
    pass

@app.route('/api/storage/getList',methods=['GET'])
def sto_getlist():
    pass

@app.route('/api/safety/getList',methods=['GET'])
def saf_getlist():
    pass

@app.route('/api/inventory/getList',methods=['GET'])
def inv_getlist():
    pass

@app.route('/api/getpcss',methods=['GET'])
def getpcss():
    pass

@app.route('/api/getstatus',methods=['GET'])
def getstatus():
    pass

@app.route('/api/getMaterials',methods=['GET'])
def getmaterials():
    pass

@app.route('/api/getAllocations',methods=['GET'])
def getlocations():
    pass

@app.route('/api/getsafety',methods=['GET'])
def getsafety():
    pass

@app.route('/api/inventory/add',methods=['POST'])
def inv_add():
    pass

@app.route('/api/inventory/sub',methods=['POST'])
def inv_sub():
    pass

@app.route('/api/inventory/chg',methods=['POST'])
def inv_chg():
    pass

@app.route('/api/material/add',methods=['POST'])
def mat_add():
    pass

@app.route('/api/material/mod',methods=['POST'])
def mat_mod():
    pass

@app.route('/api/allocation/add',methods=['POST'])
def all_add():
    pass

@app.route('/api/allocation/mod',methods=['POST'])
def all_mod():
    pass

@app.route('/api/safety/add',methods=['POST'])
def saf_add():
    pass

@app.route('/api/safety/mod',methods=['POST'])
def saf_mod():
    pass


# restful apis end

@app.route('/api/random')
def random_number():
    response={
        'randomNumber':randint(1,100)
    }
    return jsonify(response)


@app.route('/',defaults={'path':''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')
