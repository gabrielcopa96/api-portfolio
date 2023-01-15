import { Request, Response } from "express";
import { createData, getMyData, updateOneData } from "../services/mydata.service";

const getData = async (req: Request, res: Response) => {
    
    try {

        const data: any = await getMyData();

        if(data.status !== 200) {
            return res.status(data.status).json({
                message: data.message
            })
        }

        return res.status(data.status).json({
            data: data.data
        })

    } catch (e: any) {

        return res.status(404).json({
            message: e.message
        })

    }

}

const postData = async ({ body }: Request, res: Response) => {
    
    try {

        const data: any = await createData(body);

        if(data.status !== 200) {
            return res.status(data.status).json({
                message: data.message
            })
        }

        return res.status(data.status).json({
            data: data.data
        })

    } catch (e: any) {

        return res.status(404).json({
            message: e.message
        })

    }

}

const updateData = async ({ params, body }: Request, res: Response) => {
    
    try {

        const { id } = params

        const data: any = await updateOneData(id, body);

        if(data.status !== 200) {
            return res.status(data.status).json({
                message: data.message
            })
        }

        return res.status(data.status).json({
            data: data.data
        })

    } catch (e: any) {

        return res.status(404).json({
            message: e.message
        })

    }

}

export { getData, postData, updateData }