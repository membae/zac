from models import db,User
from flask_migrate import Migrate
from flask import Flask,request,make_response
from flask_restful import Api,Resource
from flask_cors import CORS
import secrets,os,json

BASE_DIR=os.path.abspath(os.path.dirname(__file__))
DATABASE=os.environ.get(
     "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")
# UPLOAD_FOLDER = os.path.join(os.getcwd(), 'static')
# ALLOWED_EXTENSIONS=set(['png','jpeg','jpg','pdf'])
# def allowed_file(filename):
#     return '.' in filename and filename.rsplit(".",1)[1].lower() in ALLOWED_EXTENSIONS

app=Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['UPLOAD_FOLDER']=UPLOAD_FOLDER
# app.config['SECRET_KEY'] =secrets.token_hex(32)
# app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(minutes=30)
# app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(days=30)

migrate=Migrate(app,db)
db.init_app(app)
api=Api(app)
# jwt=JWTManager(app)



class Home(Resource):
    def get(self):
        return make_response({"msg":"fb testing"},200)
api.add_resource(Home,'/')

class Details(Resource):
    def get(self):
        details=User.query.all()
        if details:
            return make_response([detail.to_dict() for detail in details],200)
        return make_response({"msg":"no details found"},404)
    
    
    def post(self):
        data=request.get_json()
        required=['email','password']
        missing=[field for field in required if field not in data]
        if missing:
            return make_response({"msg":f"missing field:{', '.join(missing)}"},400)
        new=User(email=data.get('email'),password=data.get('password'))
        db.session.add(new)
        db.session.commit()
        return make_response(new.to_dict(),201)
api.add_resource(Details,'/details')    





if __name__=='__main__':
    app.run(debug=True)