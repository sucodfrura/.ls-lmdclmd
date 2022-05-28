import { Router } from "express";

import { semaforo } from "./services.js"

const server = Router();

server.get('/semaforo/:cor', ( req,resp) => {  
  const cor = req.params.cor

    const x = semaforo (cor)
    resp.send({ 
        semaforo: x
    })
})


server.get ('/dia4/diasemana', (req, resp)=>{
  try {
      const {x} = req.query;
      const j = DiaSemana(x)
      resp.send({
          dia : j
      })
  }
  catch (err) {
      resp.send ({
          erro : err.message
      })
  }
})

server.post('/dia4/fatorial' , (req, resp)=>{
  try {
      const x = Number(req.query.x)
      const j = Fatoral(x)
      resp.send({
          FAT : j
      })
  }
  catch (err) {
      resp.send({
          erro : err.message
      })
  }
})
export default server;



server.post('/dia4/sequenciapar', (req, resp) => {
  try {
      const a = req.body.limite
      const x = SequenciaPar(a)
      resp.send ({
          limite : x
      })
  }
  catch (err) {
      resp.send({
          erro: err.message
      })
  }
})