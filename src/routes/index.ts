import { Router, Request, Response } from "express";

const router = Router();

    router.get('/', (req: Request, res: Response) => {
        try {
            res.status(200).json({
                msg: 'Bienvenido a mi api'
            })
        } catch (e: any) {
            res.status(500).json({
                msg: e.message
            })
        }
    })

export { router }