# Servidor

#### Runserver
http://localhost:1234

Para ejecutar el programa es necesario usar este comando
```
npm install
npm run dev

```


# Empleado
## Obtener lista de empleado
get /api/empleado

## Obtener un empleado
get /api/empleado/:id

## Eliminar un empleado
delete /api/empleado/delete/:id

## Actualizar un empleado
put /api/empleado/update/:id 
```
{
  "codigo": 2,
  "nif": 2,
  "nombre": "andres",
  "apellido1": "mejia",
  "apellido2": "manjarres",
  "departamento": 1
}

```

## Crear un empleado
post /api/empleado/create
```
{
  "codigo": 2,
  "nif": 2,
  "nombre": "andres",
  "apellido1": "mejia",
  "apellido2": "manjarres",
  "departamento": 1
}
```

# Departamento

## Obtener lista de departamento
get /api/departamento

## Obtener un departamento
get /api/departamento/:id 

## Eliminar un departamento
delete /api/departamento/delete/:id 

## Actualizar un departamento
put /api/departamento/update/:id
```
{
  "codigo": 3,
  "nombre": "sistemas",
  "presupuesto": 6000
}

```

## Crear un departamento
post /api/departamento/create

```
{
  "codigo": 3,
  "nombre": "sistemas",
  "presupuesto": 6000
}

```


