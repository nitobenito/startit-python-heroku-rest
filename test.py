from flask import Flask,request
import json
# šī rinda laikam palaiž mūsu kodu kā flask api
app = Flask(__name__, static_url_path='')

# Uzstada test.html ka nokluseto web lapas sākumu.
@app.route('/')
def root():
    return app.send_static_file('test.html')

# route rezultati, kurai būs jāapstrādā pieprasījums
@app.route('/api/rezultati')
def rez():
    # dabū ārā līdzi iedotos parametrus
    vards=request.args.get("vards")
    punkti=request.args.get("punkti")
    # testēšanas nolūkā izdrukā līdzi iedoto vārdu, to varēs redzēt konsolē
    print(vards)
    # atver lasīšanai vārdu datni
    f=open('static/vardi.txt','r')
    # json objekta metode visu no faila ielasa mainīgajā saraksts, strukturētu json formātā
    saraksts=json.load(f)
    f.close()
    # no līdzi iedotajiem datiem izveido jaunu objektu un pievieno to sarakstam
    jauns={"vards":vards,"punkti":int(punkti)}
    saraksts.append(jauns)
    # atver rakstīšanai vārdu datni 
    f=open('static/vardi.txt','w')
    # json objekts ieraksta datnē vārdu sarakstu ar jauno vārdu 
    json.dump(saraksts,f)
    f.close()
    # sagatavojam datus, ko serveris sūtīs atpakaļ. Tas būs sakārtots vārdu saraksts, sauksies rezultati
    # var kārtot arī citādi, bet māte Google piedāvāja šādu skaistu rindiņu ar lambdu
    # ja grib kārtot pretējā secībā, tad ..  vi["punkti"],reverse=True) 
    response = {
        'rezultati': sorted(saraksts,key=lambda vi: vi["punkti"])
    }
    # atgriežam sagatavotos atbildes datus
    return json.dumps(response)



