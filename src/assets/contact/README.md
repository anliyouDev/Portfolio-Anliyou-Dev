# Back-end formulaire de contact

## Installation

### 1. Créer le dossier back-end
```bash
mkdir backend-contact
cd backend-contact
```

### 2. Initialiser et installer les dépendances
```bash
npm init -y
npm install express nodemailer cors
```

### 3. Copier server.js dans ce dossier

---

## ⚠️ Configuration Gmail (important)

Gmail bloque les connexions avec ton mot de passe normal.
Tu dois créer un **mot de passe d'application** :

1. Va sur **myaccount.google.com**
2. Sécurité → Connexion à Google → **Validation en deux étapes** (active si pas fait)
3. Sécurité → **Mots de passe des applications**
4. Sélectionne "Autre" → nomme-le "Portfolio Contact" → clique Générer
5. Copie le mot de passe à 16 caractères généré

---

## Lancer le serveur

### Avec la variable d'environnement (recommandé)

**Linux / Mac :**
```bash
GMAIL_APP_PASSWORD="xxxx xxxx xxxx xxxx" node server.js
```

**Windows (PowerShell) :**
```powershell
$env:GMAIL_APP_PASSWORD="xxxx xxxx xxxx xxxx"; node server.js
```

### Ou créer un fichier .env (plus pratique)

Installe dotenv :
```bash
npm install dotenv
```

Crée un fichier `.env` :
```
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

Ajoute en haut de `server.js` :
```js
require('dotenv').config()
```

> ⚠️ N'oublie PAS d'ajouter `.env` dans ton `.gitignore` !

---

## Structure finale

```
ton-portfolio/
├── src/
│   └── components/
│       ├── Contact.jsx   ← remplace l'ancien
│       └── contact.css   ← inchangé
└── backend-contact/
    ├── server.js
    ├── package.json
    └── .env              ← jamais commit sur Git !
```

## Lancer les deux en même temps

Terminal 1 (front React) :
```bash
npm run dev
```

Terminal 2 (back Node.js) :
```bash
cd backend-contact
node server.js
```

Le serveur tourne sur **http://localhost:3001**
