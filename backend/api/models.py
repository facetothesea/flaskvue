from api import db
from datetime import datetime

# class Status(db.Model):
#     __tablename__='status'
#     describe=db.Column(db.Enum('停用','启用'),primary_key=True)

class Packages(db.Model):
    __tablename__='status'
    describe=db.Column(db.Enum('千克','件','托','箱','只','支','组','卷','立方米','平方米'),primary_key=True)

class Material(db.Model):
    __tablename__='material' #物料表
    
    id=db.Column(db.Integer,primary_key=True)
    code=db.Column(db.String(20))
    name=db.Column(db.String(30))
    pcs=db.Column(db.String(1))
    state=db.Column(db.String(1))
    remark=db.Column(db.String(200))
    lastdt=db.Column(db.DateTime,default=datetime.utcnow)
    inventory=db.relationship('Inventory',backref='mat',lazy='dynamic')   

    def __repr__(self):
        return '<Material 物料 {} >'.format(self.material_name)

class Storage(db.Model):
    __tablename__='storage' #货位表

    id=db.Column(db.Integer,primary_key=True)
    allocation=db.Column(db.String(10))
    state=db.String(db.String(1))
    remark=db.String(db.String(200))
    lastdt=db.Column(db.DateTime,default=datetime.utcnow)
    inventory=db.relationship('Inventory',backref='sto',lazy='dynamic')

    def __repr__(self):
        return '<Storage 货位 {} >'.format(self.allocation)

class Inventory(db.Model):
    __tablename__='inventory' #当前库存表
    
    id=db.Column(db.Integer,primary_key=True)
    code=db.Column(db.String(10))
    name=db.Column(db.String(30))
    inventory_acount=db.Column(db.Integer,default=0)
    material_id=db.Column(db.Integer,db.ForeignKey('material.id'))
    storage_id=db.Column(db.Integer,db.ForeignKey('storage.id'))
    lastdt=db.Column(db.DateTime,default=datetime.utcnow)
    
    def __repr__(self):
        return '< Inventory 库存 {} {} {} > '.format(self.material_code,self.material_name,self.material_acount)


class Safety(db.Model):
    __tablename__='safety' #安全库存表

    id=db.Column(db.Integer,primary_key=True)
    code=db.Column(db.String(10))
    name=db.Column(db.String(30))
    acount=db.Column(db.String(10))
    remark=db.Column(db.String(200))
    lastdt=db.Column(db.DateTime,default=datetime.utcnow)



class History(db.Model):
    __tablename__='history'

    id=db.Column(db.Integer,primary_key=True)
    lastdt=db.Column(db.DateTime,default=datetime.utcnow)
