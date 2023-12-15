import { json } from 'express'
import pool from '../db.js'

export const getTecnicare = async (req, res) => {
  try {
    const [rows] = await pool.query('select * from telefonos')
    res.send(rows)
  } catch (error) {
    res.status(500).json({
      message:"error de sistema"
    })
  }
}

export const getUnidadTecnicare = async (req, res) => {
  const id = req.params.id
  try {
     const [rows] = await pool.query('select * from telefonos where id=?', [id])
  res.send(rows) 
  } catch (error) {
    res.status(500),json({
      messaje:"error de busqueda"
    })
  }

}

export const postTecnicare = async (req, res) => {
  const { marca, modelo, imagen, precio, especificaciones } = req.body
  try {
 const [rows] = await pool.query('insert into telefonos(marca,modelo,imagen,precio,especificaciones) values(?,?,?,?,?)', [marca, modelo, imagen, precio, especificaciones])
  res.send(rows)    
  } catch (error) {
   res.status(500),json({
    message:"verifique sus datos "
   }) 
  }
 
}

export const deleteTecnicare = async (req, res) => {
  const id = req.params.id
  try {
   const rows = await pool.query('delete from telefonos where id=?', [id])

  res.send(rows)  
  } catch (error) {
    res.status(500),json({
      message:"error verifique id"
    })
  }
 
}

export const putTecnicare = async (req, res) => {
  const id = req.params.id
  const { marca, modelo, imagen, precio, especificaciones } = req.body
  try {
     const [rows] = await pool.query('update telefonos set marca=?, modelo =?,imagen=?,precio=? ,especificaciones=? where id=?', [marca, modelo, imagen, precio, especificaciones, id])

  res.send(rows) 
  } catch (error) {
    res.status(500),json({
      message:"veirifque sus datos esten correctos"
    })
  }

}

export const getUsuario=async(req, res)=>{
  const id= req.params.id
  try {
  const [rows]= await pool.query('select * from usuario where id = ?',[id])
  res.send(rows)  
  } catch (error) {
    res.status(404),json({
      message:"no se encuentra"
    })
  }
  
}