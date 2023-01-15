import SocialNetworkModel from '../models/socialnetwork.schema';


const createSocialNetwork = async (socials: any) => {
   try {
      
      // creo el documento de mi data
      const socialNetwork = await SocialNetworkModel.create(socials);

      // retorno el documento
      return socialNetwork;

   } catch (error: any) {

      // si hay un error, lo retorno
      throw new Error(error.message);

   }
}

export { createSocialNetwork }