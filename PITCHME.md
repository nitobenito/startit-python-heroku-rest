## Heroku

---

### Nepieciešamie materiāli
@ul

- Python
- Pip
- Heroku

---

#### Python
[Python lejuplāde](https://www.python.org/ftp/python/3.8.0/python-3.8.0-amd64.exe)
```bash
python --version
```
---

#### PIP
[Pamācība angļu valodā](https://www.liquidweb.com/kb/install-pip-windows/)
[Lejuplādējam get-pip.py](https://bootstrap.pypa.io/get-pip.py)

```bash
python get-pip.py
pip -V
```
---

#### Heroku
[Heroku CLI lejuplāde](https://devcenter.heroku.com/articles/heroku-cli)
```bash
heroku --version
```

---

### Nepieciešamās bibleotēkas
```bash
pip install flask
pip install python-dotenv
pip install gunicorn
```

---

### Izveidojam Heroku lietotni
```bash
heroku create
git clone
```
---

### Heroku konfigurācija
@ul
- requirements.txt
- runtime.txt
- Procfile
- Procfile.windows

---

### Lokālā konfigurācija
@ul
- .env

---
