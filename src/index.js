import Express from 'express'
import router from './router/RouterTecnicare.js'

import { PORT } from './config.js'

const app = Express()
app.use(Express.json())
app.use(router)

app.use((req,res,next)=>{
  res.status(404).json({
    message:"endpoint not found"
  })
})

app.listen(PORT)
console.log('server port',PORT)

