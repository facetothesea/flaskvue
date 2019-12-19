from api import db

class Material(db.Model):
    __tablename__='material'
    
    id=db.Column(db.Integer,primary_key=True)
    code=db.Column(db.String(20))
    name=db.Column(db.String(30))
    pcs=db.Column(db.String(1))
    state=db.Column(db.String(1))
    remark=db.Column(db.String(200))
    lastdt=db.Column(db.String(20))

    def __repr__(self):
        return '<Material 物料 {} >'.format(self.name)

class Storage(db.Model):
    __tablename__='storage'

    id=db.Column(db.Integer,primary_key=True)
    allocaton=db.Column(db.String(10))
    state=db.String(db.String(1))
    remark=db.String(db.String(200))
    lastdt=db.String(db.String(20))

    def __repr__(self):
        return '<Storage 货位 {} >'.format(self.allocation)

class Safety(db.Model):
    __tablename__='safety'

    id=db.Column(db.Integer,primary_key=True)
    code=db.Column(db.String(10))
    name=db.Column(db.String(30))
    acount=db.Column(db.String(10))
    remark=db.Column(db.String(200))
    lastdt=db.Colun(db.String(20))

class Inventor(db.Model):
    __tablename__='inventory'
    
    id=db.Column(db.Integer,primary_key=True)
    material_code=db.Column(db.String(10))
    material_name=db.Column(db.String(30))
    inventory_acount=db.Column(db.Integer)
    
    def __repr__(self):
        return '< Inventory 库存 {} {} {} > '.format(self.material_code,self.material_name,self.material_acount)
