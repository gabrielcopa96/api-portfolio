import DataModel from "../models/mydata.schema";

const getMyData = async () => {

   try {

      // busco el documento de mi data
      const data = await DataModel.findOne({
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

const createData = async (data: any) => {

   try {

      // creo el documento de mi data
      const myData = await DataModel.create(data);

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

const updateOneData = async (id: string, data: any) => {

   try {

      const updateData = await DataModel.updateOne(
         { _id: id },
         data,
         {
            new: true
         }
      )

      return {
         status: 200,
         data: updateData
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