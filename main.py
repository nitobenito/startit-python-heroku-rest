#from app import app
from flask import Flask, request, render_template, jsonify
import json
app = Flask(__name__)
# Uzstada test.html ka nokluseto web lapas sākumu.
@app.route('/')
def root():
    return render_template('test.html')

@app.route('/api/rezultati')
def rez():
    vards=request.args.get("vards")+"TT"
    punkti=request.args.get("punkti")
    f=open('app/vardi.txt','r')
    saraksts=json.load(f)
    f.close()
    jauns={"vards":vards,"punkti":int(punkti)}
    saraksts.append(jauns)
    f=open('app/vardi.txt','w')
    json.dump(saraksts,f)
    f.close()
    response = {
        'rezultati': sorted(saraksts,key=lambda vi: vi["punkti"])
    }
    return json.dumps(response)
@app.route('/api/rezultati', methods=['POST'])
def atbilde():
    dati = request.json
    vards=dati("vards")+"01"
    punkti=dati("punkti")
    f=open('app/vardi.txt','r')
    saraksts=json.load(f)
    f.close()
    jauns={"vards":vards,"punkti":int(punkti)}
    saraksts.append(jauns)
    f=open('app/vardi.txt','w')
    json.dump(saraksts,f)
    f.close()
    response = {
        'rezultati': sorted(saraksts,key=lambda vi: vi["punkti"])
    }
    return json.dumps(response)
#dīvaini, bet iekš Heroku šis if bija izšķirošais lai sāktu strādāt
if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)


