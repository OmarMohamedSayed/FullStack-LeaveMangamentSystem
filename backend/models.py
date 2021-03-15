import os
from sqlalchemy import Column, String, Integer, create_engine
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import json


database_name = "leaveapp"
database_path = "postgresql://{}:{}@{}/{}".format('postgres','Postgres1234','localhost:5432', database_name)

db = SQLAlchemy()

'''
setup_db(app)
    binds a flask application and a SQLAlchemy service
'''
def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()
    Migrate(app,db)
'''
User InFo
'''
class User(db.Model):  
  __tablename__ = 'User'

  id = Column(Integer, primary_key=True)
  email = Column(String)
  password = Column(String)
  preferredname = Column(String)
  lastname = Column(String)
  joptitle = Column(String)
  nationality = Column(String)
  dateofbirth = Column(String)
  gender = Column(String)
  bloodgroup = Column(String)
  category = Column(String)
  image = Column(String)
  phonenumber = Column(String)
  secondarynumber = Column(String)
  website = Column(String)
  linkedin = Column(String)
  payment = db.relationship('Payment', backref='payment', lazy=True)

  def __init__(self, email, password, preferredname, lastname,joptitle,nationality,dateofbirth,gender,bloodgroup,category, image,phonenumber,secondarynumber,website,linkedin):
    self.email = email
    self.password = password
    self.preferredname = preferredname
    self.lastname = lastname
    self.joptitle =joptitle
    self.nationality = nationality
    self.dateofbirth = dateofbirth
    self.preferredname = preferredname
    self.gender = gender
    self.bloodgroup = bloodgroup
    self.category = category
    self.image = image
    self.phonenumber = phonenumber
    self.secondarynumber = secondarynumber
    self.website = website
    self.linkedin = linkedin

  def insert(self):
    db.session.add(self)
    db.session.commit()
  
  def update(self):
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()

  def format(self):
    return {
      'id': self.id,
      'email': self.email,
      'preferredname': self.preferredname,
      'lastname': self.lastname,
      'joptitle':self.joptitle,
      'nationality': self.nationality,
      'dateofbirth': self.dateofbirth,
      'preferredname': self.preferredname,
      'gender': self.gender,
      'bloodgroup': self.bloodgroup,
      'category': self.category,
      'image': self.image,
      'phonenumber': self.phonenumber,
      'secondarynumber': self.secondarynumber,
      'website': self.website,
      'linkedin': self.linkedin
    }

'''
payment

'''
class Payment(db.Model):  
  __tablename__ = 'Payment'

  id = Column(Integer, primary_key=True)
  user_id = Column(db.Integer, db.ForeignKey('User.id'), nullable= False)
  startdate = Column(String)
  visaexpirydate = Column(String)

  def __init__(self, startdate,visaexpirydate):
    self.startdate = startdate
    self.visaexpirydate = visaexpirydate

  def format(self):
    return {
      'id': self.id,
      'startdate': self.startdate,
      'visaexpirydate': self.visaexpirydate
    }

'''
leavestatus

'''
class Leavestatus(db.Model):  
  __tablename__ = 'Leavestatus'

  id = Column(Integer, primary_key=True)
  user_id = Column(Integer)
  leavetype = Column(String)
  _from = Column(String)
  _to = Column(String)
  note = Column(String)
  status = Column(String)
  
  def __init__(self, user_id ,leavetype,_from,_to,note,status):
    self.user_id=user_id
    self.leavetype = leavetype
    self._from = _from
    self._to = _to
    self.note = note
    self.status = status
    
  def insert(self):
    db.session.add(self)
    db.session.commit()
  
  def update(self):
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()

  def format(self):
    return {
      'id': self.id,
      'user_id':self.user_id,
      'leavetype': self.leavetype,
      'from': self._from,
      'to': self._to,
      'note': self.note,
      'status': self.status,
    }