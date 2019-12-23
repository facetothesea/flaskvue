from api import app, db
from flask import render_template, jsonify, request, Response
from api.models import Material, State, Inventory, Safety, Storage, Package
from sqlalchemy import func
from random import randint
from datetime import datetime


# test url
@app.route('/hello')
def index():
    return "hello flask backend"


# restful apis start
@app.route('/api/material/getList', methods=['GET'])
def mat_getlist():
    #  { code: '10101', name: '电池12', pcs: '0', state: '1', remark: '初始化', lastdt: '2019-12-14 13:03:01' },
    mats = Material.query.all()
    result = []
    for s in mats:
        result.append({
            'code': s.id,
            'name': s.name,
            'pcs': s.pcs,
            'state': s.state,
            'remark': s.remark,
            'lastdt': s.lastdt
        })
    return jsonify(result)


@app.route('/api/storage/getList', methods=['GET'])
def sto_getlist():
    # { allocation: 'A01A', state: '1', remark: '每次都要初始化', lastdt: '2019-12-14 13:03:01'},
    stos = Storage.query.all()
    result = []
    for s in stos:
        result.append({
            'allocation': s.allocation,
            'state': s.state,
            'remark': s.remark,
            'lastdt': s.lastdt
        })
    return jsonify(result)


@app.route('/api/safety/getList', methods=['GET'])
def saf_getlist():
    # { code: '1001', name: '1001', acount: '9000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    saf = Safety.query.all()
    result = []
    for s in saf:
        result.append({
            'code': s.code,
            'name': s.name,
            'acount': s.acount,
            'remark': s.remark,
            'lastdt': s.lastdt
        })
    return jsonify(result)
    return ("/api/storage/getList")


@app.route('/api/inventory/getList', methods=['GET'])
def inv_getlist():
    """
    api结果样式
    { 
    'A': {
      '01A': [ ],
      '02A': [
        { code: '001', name: '电池12', acount: 999 },
        { code: '003', name: '电池120', acount: 3000 } ]
    },...
    查询结果 [('A01A', '1', '电池20', 2000, 'A', '01A'), ('A02A', '1', '电池20', 5000, 'A', '02A'), ('A01A', '1', '电池20', 1000, 'A', '01A')]
    """
    inv = db.session.query(Inventory.allocation, Inventory.code,
                           Inventory.name, Inventory.inventory_acount,
                           func.substr(Inventory.allocation, 1, 1),
                           func.substr(Inventory.allocation, 2, 3)).all()
    result = {}
    for i in inv:
        key1 = i[4]
        key2 = i[5]
        if key1 not in result:
            result[key1] = {}
        if key2 not in result[key1]:
            result[key1][key2] = []
        result[key1][key2].append({'code': i[1], 'name': i[2], 'acount': i[3]})
    return jsonify(result)


@app.route('/api/getpcss', methods=['GET'])
def getpcss():
    pcs = Package.query.all()
    result = []
    for s in pcs:
        result.append({'value': s.id, 'label': s.describe})
    return jsonify(result)


@app.route('/api/getstates', methods=['GET'])
def getstatus():
    status = State.query.all()
    result = []
    for s in status:
        result.append({'value': s.id, 'label': s.describe})
    return jsonify(result)


@app.route('/api/getMaterials', methods=['GET'])
def getmaterials():
    mat = Material.query.all()
    result = []
    for s in mat:
        result.append({'value': s.id, 'label': s.name})
    return jsonify(result)


@app.route('/api/getAllocations', methods=['GET'])
def getlocations():
    stos = Storage.query.all()
    result = []
    for s in stos:
        result.append({'value': s.allocation})
    return jsonify(result)


@app.route('/api/getsafety', methods=['GET'])
def getsafety():
    # { code: '1001', name: '1001', acount: '9000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    saf = Safety.query.all()
    result = []
    for s in saf:
        result.append({
            'code': s.code,
            'name': s.name,
            'acount': s.acount,
            'remark': s.remark,
            'lastdt': s.lastdt
        })
    return jsonify(result)


@app.route('/api/inventory/add', methods=['POST'])
def inv_add():
    pass


@app.route('/api/inventory/sub', methods=['POST'])
def inv_sub():
    pass


@app.route('/api/inventory/chg', methods=['POST'])
def inv_chg():
    pass


@app.route('/api/material/add', methods=['POST'])
def mat_add():
    # 表单数据： {'code': '12', 'name': '13', 'state': 1, 'pcs': 2, 'remark': ''}
    post_data = request.get_json()
    code = post_data['code']
    name = post_data['name']
    state = State.query.filter(State.id == post_data['state']).first().describe
    pcs = Package.query.filter(Package.id == post_data['pcs']).first().describe
    remark = post_data['remark']
    mat = Material(name=name, state=state, pcs=pcs, remark=remark)
    db.session.add(mat)
    db.session.commit()
    return jsonify({
        'status': 'ok',
        'code': 0,
        'msg': '物料添加成功',
        'data': {
            'code': code,
            'name': name,
            'state': state
        }
    })


@app.route('/api/material/mod', methods=['POST'])
def mat_mod():
    post_data = request.get_json()
    print(post_data)
    code = post_data['code']
    name = post_data['name']
    name2 = post_data['name2']
    state = State.query.filter(State.id == post_data['state']).first().describe
    pcs = Package.query.filter(Package.id == post_data['pcs']).first().describe
    remark = post_data['remark']
    mat=db.session.query(Material).filter(Material.id==code).first()
    mat.pcs=pcs
    if len(name2)>0:
        mat.name=name2
    mat.state=state
    mat.remark=remark
    mat.lastdt=datetime.utcnow()
    db.session.commit()
    return jsonify({
        'status': 'ok',
        'code': 0,
        'msg': '物料更新成功',
        'data': {
            'code': code,
            'name': name,
            'pcs': pcs,
            'state': state
        }
    })


@app.route('/api/allocation/add', methods=['POST'])
def all_add():
    if request.method == 'POST':
        post_data=request.get_json()
        allocation=post_data['allocation']
        state = State.query.filter(State.id == post_data['state']).first().describe
        remark = post_data['remark']
        sto = Storage(allocation=allocation, state=state, remark=remark)
        sto.lastdt=datetime.utcnow()
        if Storage.query.filter(Storage.allocation==allocation).first():
            return jsonify({
                'status': 'error',
                'code': 1,
                'msg': '出错，货位已存在，插入未成功',
                'data': { }
                })
        else:
            db.session.add(sto)
            db.session.commit()
            return jsonify({
                'status': 'ok',
                'code': 0,
                'msg': '货位添加成功',
                'data': { 'allocation':allocation,'state':state,'remark':remark}
                })



@app.route('/api/allocation/mod', methods=['POST'])
def all_mod():
    pass


@app.route('/api/safety/add', methods=['POST'])
def saf_add():
    pass


@app.route('/api/safety/mod', methods=['POST'])
def saf_mod():
    pass


# restful apis end


@app.route('/api/random')
def random_number():
    response = {'randomNumber': randint(1, 100)}
    return jsonify(response)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')
