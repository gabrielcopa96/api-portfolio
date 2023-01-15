import DataModel from "../models/mydata.schema";

const getMyData = async () => {

   try {

      const data = await DataModel.findOne({
         last_name: "Copa"
      });

      if (!data) {
         return {
            status: 400,
            message: "Data not found",
         }
      }

      return {
         status: 200,
         data
      }


   } catch (error: any) {

      throw new Error(error.message);

   }

};

const createData = async (data: any) => {

   try {

      const myData = await DataModel.create(data);

      return {
         status: 200,
         data: myData
      }

   } catch (error: any) {

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