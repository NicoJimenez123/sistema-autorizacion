Mi idea es armar una API que podría ser utilizada en varios sistemas.

Esta API incluiría la administración de **Usuarios**, la asignación de distintos **Roles** cuyo objetivo es agrupar los **Permisos** a los **Recursos** pertenecientes a distintos **Modulos.**
Principalmente habría 5 endpoints:

- /usuarios:
    - GET /usuarios
    - POST /usuarios
    - DELETE /usuarios/:id
    - PUT /usuarios/:id
- /roles:
    - GET /roles
    - GET /roles/usuario/:usuarioID
    - GET /roles/recurso/:recursoID
    - POST /roles
    - POST /roles/usuario/:usuarioID/rol/:rolID
    - DELETE /roles/:id
    - DELETE /roles/usuario/:usuarioID/rol/:rolID
    - PUT /roles/:id
    - PUT /roles/usuario/:usuarioID
- /recursos:
    - GET /recursos
    - POST /recursos
    - DELETE /recursos/:id
    - PUT /recursos/:id

Aunque por falta de tiempo no pude desarrollar el projecto como me hubiese gustado. Lo que terminé haciendo fue realizar las implementaciones necesarias para demostrar los conocimientos de lo visto durante la cursada.

### Antes de iniciar el servidor
Debe crearse un archivo .env en el directorio raíz del proyecto, utilizando la siguiente estructura:
- PORT=3000
- MONGO_CONNECTION_STRING=''
  

El MONGO_CONNECTION_STRING es la conexión a una BD de mongo, yo utilicé mongodb.com
### Levantar el servidor con NPM
primero hay que instalar las dependencias
```
npm i
```
luego iniciar el servidor 
```
npm start
```
### Levantar el servidor con Docker
Primero hay que crear la imagen
```
sudo docker build -t api-auth -f Dockerfile .
```
Después iniciar el contenedor, utilizando el string de conexión a mongo
```
docker run -p 3000:3000 --env MONGO_CONNECTION_STRING='' api-auth
```