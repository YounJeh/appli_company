# Utiliser une image de base légère avec Node.js et npm
FROM node:14-alpine

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application React
RUN npm run build

# Utiliser une image de base légère pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits dans le répertoire par défaut de Nginx
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]