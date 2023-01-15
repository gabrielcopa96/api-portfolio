import { MyDataFindOutput, MyDataOutput, ServiceOutputFailure, ServiceOutputSuccess, UpdateDataSuccess } from "../interfaces/mydata.interface";
import DataModel from "../models/mydata.schema";

const getMyData = async (): Promise<ServiceOutputSuccess | ServiceOutputFailure> => {

   try {

      // busco el documento de mi data
      const data: MyDataFindOutput | null = await DataModel.findOne({
         last_name: "Copa"
      })
         .populate("socialnetwork", "name url image");

      // si no hay data, retorno un error junto con el status 400 bad request
      if (!data) {
         return {
            status: 400,
            message: "Data not found",
         }
      }

      // si hay data, retorno el documento junto con el status
      return {
         status: 200,
         data
      }


   } catch (error: any) {

      // si hay un error, lo retorno
      throw new Error(error.message);

   }

};

const createData = async (data: any): Promise<ServiceOutputSuccess> => {

   try {

      // creo el documento de mi data
      const myData: MyDataOutput = await DataModel.create(data);

      // retorno el documento junto con el status
      return {
         status: 200,
         data: myData
      }

   } catch (error: any) {

      // si hay un error, lo retorno
      throw new Error(error.message);

   }
}

const updateOneData = async (id: string, data: any): Promise<UpdateDataSuccess> => {

   try {

      await DataModel.updateOne(
         { _id: id },
         data
      )

      return {
         status: 200,
         message: "Data updated successfully"
      }

   } catch (error: any) {

      throw new Error(error.message);
   }
}

export {
   getMyData,
   createData,
   updateOneData
}