from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

model = pickle.load(open("model.pkl","rb"))

@app.route("/predict", methods=["POST"])
def predict():

    data=request.get_json()

    experience=float(data["experience"])

    prediction=model.predict([[experience]])

    return jsonify({
        "salary": round(prediction[0],2)
    })
@app.route("/")
def home():
    return "Salary Prediction Model Running!"


if __name__=="__main__":
    app.run(debug=True)