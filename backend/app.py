import os
from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import random


from models import setup_db, User, Payment,Leavestatus

def get_paginate_users(request, selection):
  page = request.args.get('page',1,type=int)
  start = (page - 1) * 10
  end = start + 10

  users = [user.format() for user in selection]
  users = users[start:end]
  return users

def create_app(test_config=None):
  # create and configure the app
  app = Flask(__name__)
  setup_db(app)
  
  '''
  set up CORS. Allow '*' for origins.
  '''
  CORS(app)

  '''
  set Access-Control-Allow
  '''
  @app.after_request
  def after_request(response):
      response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,true')
      response.headers.add('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE,OPTIONS')
      return response
  
  @app.route('/' , methods=['POST'])
  def checkUser():
    body = request.get_json()
    

    email = body.get('email', '')
    password = body.get('password', '')
    
    if ((email == '') or (password == '')):
      abort(400)

    try:
      user = User.query.filter_by(email = email).one_or_none()
      
      if (user == None):
        abort(404)

      if (password != user.password):
        abort(404)
      
      userid = user.id
      
      return jsonify({
      'success': True,
      'userid':userid,
      'message':'success login'
      }),200

    except:
      abort(404)

  @app.route('/<int:id>')
  def get_all_userinfo(id):
    
    try:
      info_query = User.query.filter_by(id = id)
      
      formated_info = [info.format() for info in info_query]

      return jsonify({
        'success': True,
        'userinfo':formated_info
      }), 200
      
    except:
      abort(500)
  
  @app.route('/payment/<int:id>')
  def get_all_payment(id):
    
    try:
      payment_query = Payment.query.filter_by(id = id)
      
      formated_info = [info.format() for info in payment_query]

      return jsonify({
        'success': True,
        'paymentinfo':formated_info
      }), 200
      
    except:
      abort(500)

  @app.route('/employees')
  def get_all_employees():
    try:
      info_query = User.query.order_by(User.id).filter_by(category="employee").all()
      
      formated_info = [info.format() for info in info_query]

      return jsonify({
        "usernumber": len(formated_info),
        'userinfo': formated_info,
        'success': True,
      }), 200
      
    except:
      abort(500)

  @app.route('/pendleavestatus')
  def get_all_pendleavestatus():
    try:
      pend_query = Leavestatus.query.order_by(Leavestatus.id).filter_by(status="Pending").all()
      
      formated_info = [info.format() for info in pend_query]
      formated_ids = [ids['user_id'] for ids in formated_info]
      formated_userinfo = []
      for i in formated_ids:
        users = User.query.filter_by(id=i)
        users_info = [info.format() for info in users]
        formated_userinfo.append({'preferredname':users_info[0]['preferredname'],'image':users_info[0]['image']})
      print(len(formated_info))
      
      for i in range(0,len(formated_info)):
        formated_info[i]['preferredname']=formated_userinfo[i]['preferredname']
        formated_info[i]['image']=formated_userinfo[i]['image']
      
      
      return jsonify({
        "pendnumber": len(formated_info),
        'success': True,
        'pendstatus':formated_info
      }), 200
        
    except:
      abort(500)
  @app.route('/approveleavestatus')
  def get_all_approveleavestatus():
    try:
      approved_query = Leavestatus.query.order_by(Leavestatus.id).filter_by(status="Approved").all()
      
      formated_info = [info.format() for info in approved_query]

      return jsonify({
        "approvenumber": len(formated_info),
        'success': True,
        'approvestatus':formated_info
      }), 200
      
    except:
      abort(500)
  
  @app.route('/pendleavestatus/<int:id>' , methods=['POST'])
  def create_leavestatus(id):
    body = request.get_json()
    user_id = id
    leavetype = body.get('leavetype', '')
    _from = body.get('_from', '')
    _to = body.get('_to', '')
    note = body.get('note', '')
    status = 'Pending'

    if ((leavetype == '') or (_from == '') or (_to == '') or (note == '')):
      abort(400)

    try:
      leave_insert = Leavestatus(user_id= user_id, leavetype=leavetype, _from=_from, _to=_to, note=note, status=status)
      leave_insert.insert()
      
      return jsonify({
      'success':True,
      'inserted': leave_insert.id,
      'message':'leaved created'
      }),201

    except:
      abort(422)

  @app.route('/pendleavestatus/<int:id>', methods=['DELETE'])
  def delete_pendleavestatus(id):

    try:
      leave_query = Leavestatus.query.filter_by(user_id=id).one_or_none()
      leave_query.delete()

      return jsonify({
        'success':True,
        'leave_item_id': id,
        'message':'leave status deleted'
      }),200
    except:
      abort(404)

  

  @app.route('/approveleavestatus/<int:id>', methods=['POST'])
  def update_leavestatus(id):
    body = request.get_json()
    status =  body.get('status', '')

    if (status == ''):
      abort(400)

    try:
      select_leave = Leavestatus.query.filter_by(user_id=id)

      formated_info = [info.format() for info in select_leave]
      # print(formated_info)
      user_id = formated_info[0]['user_id']
      leavetype = formated_info[0]['leavetype']
      _from = formated_info[0]['from']
      _to = formated_info[0]['to']
      note = formated_info[0]['note']
      
      leave_query = Leavestatus.query.filter_by(user_id=id).one_or_none()
      leave_query.delete()

      update_leave = Leavestatus(user_id=user_id , leavetype=leavetype, _from=_from, _to=_to, note=note, status=status)
      update_leave.insert()
        
      return jsonify({
      'success':True,
      'update status': id,
      'message':'leaved created'
      }),200

    except:
      abort(422)

  @app.route('/managers')
  def get_all_managers():
    try:
      manager_query = User.query.order_by(User.id).filter_by(category="Manager").all()
      
      formated_info = [info.format() for info in manager_query]

      return jsonify({
        "managernumber": len(formated_info),
        'success': True,
        'managerstatus':formated_info
      }), 200
      
    except:
      abort(500)
  @app.route('/checkmanager/<int:id>')
  def check_if_manager(id):
    try:
      manager_query = User.query.order_by(User.id).filter_by(id=id)
      
      formated_info = [info.format() for info in manager_query]
      
      ismanger = False
      if (formated_info[0]['category'] == "Manager"):
        ismanger=True

      return jsonify({
        'success': True,
        'ismanger':ismanger
      }), 200
      
    except:
      abort(500)



  @app.errorhandler(400)
  def bad_request(error):
      return jsonify({
          "success": False,
          "error": 400,
          "message": "Bad Request"
      }), 400


  @app.errorhandler(404)
  def not_found(error):
    return jsonify({
        "success": False,
        "error": 404,
        "message": "resource not found"
    }), 404


  @app.errorhandler(422)
  def unprocessable_entity(error):
      return jsonify({
          "success": False,
          "error": 422,
          "message": "Unprocessable"
      }), 422

  @app.errorhandler(500)
  def unprocessable_entity(error):
      return jsonify({
          "success": False,
          "error": 500,
          "message": "server error"
      }), 422

  return app

if __name__ == "__main__":
  app = create_app().run(debug=True)
    