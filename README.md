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
- /permisos:
    - GET /permisos
    - POST /permisos
    - DELETE /permisos/:id
    - PUT /permisos/:id
- /recursos:
    - GET /recursos
    - POST /recursos
    - DELETE /recursos/:id
    - PUT /recursos/:id
- /modulos:
    - GET /modulos
    - POST /modulos
    - DELETE /modulos/:id
    - PUT /modulos/:id