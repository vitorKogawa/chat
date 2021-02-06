import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'

export default function authMiddleware(request: Request, response: Response, next_function: NextFunction){
    const { authorization } = request.headers
    if(!authorization)
        return response.sendStatus(401)
    
    const token = authorization.replace('Bearer ', '').trim()

    try{
        const data = jwt.verify(token, 'secret')
        next_function()
    }catch{
        return response.sendStatus(401)
    }
}