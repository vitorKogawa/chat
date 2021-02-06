import { Request, Response } from 'express'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { getRepository } from 'typeorm'
import { User } from '../database/entity/User'


class AuthController{
    async auth(request: Request, response: Response){
        console.log(request.body)
        const repository = getRepository(User)
        const { username, password } = request.body

        const user = await repository.findOne({ where: { username } })
        if(!user)
            return response.json({ message: 'Este usuário não está cadastrado na base de dados.' })
        
        const isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword)
            return response.json({ message: 'Senha incorreta.' })
        
        delete user.password
        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

        return response.json({
            user,
            token
        })
    }
}

export default new AuthController()