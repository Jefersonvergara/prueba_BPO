const { Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'admin',
    password: 'junior1112',
    database: 'bpo',
    port: '5432'
})

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows)
}

//Empleado

const getEmpleado = async (req, res) => {
    const response = await pool.query('SELECT * FROM empleado');
    res.status(200).json(response.rows)
}

const getEmpleadoById = async (req, res) => {
    const id = req.params.id
    const resposne = await pool.query('SELECT * FROM empleado WHERE codigo = $1',[id]);
    res.json(response.rows)
}

const deleteEmpleado = async (req, res) => {
    const id = req.params.id
    const resposne = await pool.query('DELETE * FROM empleado WHERE codigo = $1',[id]);
    res.send('Empleado eliminado');
}


const createEmpleado = async (req,res) => {
    const { codigo,nif,nombre,apellido1,apellido2,departamento } = req.body;
    const response = await pool.query('INSERT INTO empleado (codigo,nif,nombre,apellido1,apellido2,codigo_departamento) values($1,$2,$3,$4,$5,$6)',[codigo,nif,nombre,apellido1,apellido2,departamento])
    console.log(response);
    res.send('Empleado creado');
}

const updateEmpleado = async (req,res) => {
    const id = req.params.id
    const { codigo,nif,nombre,apellido1,apellido2,departamento } = req.body;
    const response = await pool.query('UPDATE empleado SET codigo=$1, nif=$2, nombre=$3, apellido1=$4, apellido2=$5, codigo_departamento=$6 WHERE codigo=$7',[codigo,nif,nombre,apellido1,apellido2,departamento,id])
    console.log(response);
    res.send('Empleado actualizado');
}

//Departamento
const createDepartamento = async (req,res) => {
    const { codigo,nombre,presupuesto } = req.body;
    const response = await pool.query('INSERT INTO departamento (codigo,nombre,presupuesto) values($1,$2,$3)',[codigo,nombre,presupuesto])
    console.log(response);
    res.send('Departamento creado');
}

const getDepartamento = async (req, res) => {
    const response = await pool.query('SELECT * FROM departamento');
    res.status(200).json(response.rows)
}

const getDepartamentoById = async (req, res) => {
    const id = req.params.id
    const resposne = await pool.query('SELECT * FROM departamento WHERE codigo = $1',[id]);
    res.json(response.rows)
}

const deleteDepartamento = async (req, res) => {
    const id = req.params.id
    const resposne = await pool.query('DELETE * FROM departamento WHERE codigo = $1',[id]);
    res.send('Departamento eliminado');
}

const updateDepartamento = async (req,res) => {
    const id = req.params.id
    const { codigo,nombre,presupuesto} = req.body;
    const response = await pool.query('UPDATE departamento SET codigo=$1,nombre=$2,presupuesto=$3 WHERE codigo =$4',[codigo,nombre,presupuesto,id])
    console.log(response);
    res.send('Departamento actualizado');
}

module.exports = {
    getUsers,getEmpleado,getDepartamento,createEmpleado,createDepartamento,
    getEmpleadoById,getDepartamentoById,deleteEmpleado,deleteDepartamento,updateDepartamento,updateEmpleado
}