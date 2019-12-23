from api import db
from datetime import datetime
class State(db.Model):
    __tablename__ = 'state'
    id = db.Column(db.Integer, primary_key=True)
    describe = db.Column(db.Enum('停用', '启用'))  # 状态

    # material_id=db.Column(db.Integer,db.ForeignKey('material.id'))

    def __repr__(self):
        return '< State {} >'.format(self.describe)


class Package(db.Model):
    __tablename__ = 'package'
    id = db.Column(db.Integer, primary_key=True)
    describe = db.Column(
        db.Enum('千克', '件', '托', '箱', '只', '支', '组', '卷', '立方米', '平方米'))  #包装方式

    # material_id=db.Column(db.Integer,db.ForeignKey('material.id'))

    def __repr__(self):
        return '< Package {} >'.format(self.describe)


class Material(db.Model):
    __tablename__ = 'material'  #物料表

    id = db.Column(db.Integer, primary_key=True)  #物料id
    name = db.Column(db.String(30))  #物料描述
    pcs = db.Column(db.String(1))  #包装方式
    state = db.Column(db.String(10))  #物料状态
    remark = db.Column(db.String(200))  #备注信息
    lastdt = db.Column(db.DateTime, default=datetime.utcnow)  #最后修改时间

    # state_describe=db.relationship('State',backref='state',lazy='dynamic')
    # package_describe=db.relationship('Package',backref='package',lazy='dynamic')
    # inventory_id=db.Column(db.Integer,db.ForeignKey('inventory.id'))

    def __repr__(self):
        return '<Material 物料 {} >'.format(self.name)


class Storage(db.Model):
    __tablename__ = 'storage'  #货位表

    allocation = db.Column(db.String(10), primary_key=True)
    remark = db.Column(db.String(200))
    state = db.Column(db.String(10))
    lastdt = db.Column(db.DateTime, default=datetime.utcnow)

    # inventory_id=db.Column(db.Integer,db.ForeignKey('inventory.id'))
    # state_describe=db.relationship('State',backref='state',lazy='dynamic')

    def __repr__(self):
        return '<Storage 货位 {} >'.format(self.allocation)


class Inventory(db.Model):
    __tablename__ = 'inventory'  #当前库存表

    id = db.Column(db.Integer, primary_key=True)  #记录的id
    allocation = db.Column(db.String(10))  #货位编号
    code = db.Column(db.String(10))  #物料编号
    name = db.Column(db.String(30))  #物料描述
    inventory_acount = db.Column(db.Integer, default=0)  #数量
    lastdt = db.Column(db.DateTime, default=datetime.utcnow)  #修改时间

    # mat=db.relationship('Material',backref='mat',lazy='dynamic')
    # sto=db.relationship('Storage',backref='sto',lazy='dynamic')

    def __repr__(self):
        return '< Inventory 库存 {} {} {} {} {} > '.format(
            self.allocation, self.code, self.name, self.inventory_acount,
            self.lastdt)


class Safety(db.Model):
    __tablename__ = 'safety'  #安全库存表

    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(10))
    name = db.Column(db.String(30))
    acount = db.Column(db.String(10))
    remark = db.Column(db.String(200))
    lastdt = db.Column(db.DateTime, default=datetime.utcnow)


class History(db.Model):
    __tablename__ = 'history'

    id = db.Column(db.Integer, primary_key=True)
    mat_code = db.Column(db.String(10))
    mat_name = db.Column(db.String(30))
    sto_code = db.Column(db.Integer)
    sto_name = db.Column(db.String(30))
    acount = db.Column(db.String(10))
    lastdt = db.Column(db.DateTime, default=datetime.utcnow)
