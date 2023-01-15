import { Request, Response } from "express";
import { createData, getMyData, updateOneData } from "../services/mydata.service";
import { createSocialNetwork } from "../services/socialnetwork.service";

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

        // extraemos los datos de las redes sociales
        const { socialnetworks } = body

        // creo esta variable let para almacenar mis redes sociales en el caso de que vengan por body
        let social: any;

        // si existe la propiedad socialnetworks en el body, creo las redes sociales
        if(socialnetworks) {
            social = await createSocialNetwork(socialnetworks);
        }

        // elimino la propiedad socialnetworks del body
        delete body.socialnetworks;

        // creo el documento de mi data
        const data: any = await createData({
            ...body,
            socialnetwork: social.map((social: any) => social._id)
        });

        // si el status de la respuesta no es 200, retorno el error
        if(data.status !== 200) {
            return res.status(data.status).json({
                message: data.message
            })
        }

        // si el status de la respuesta es 200, retorno la data
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