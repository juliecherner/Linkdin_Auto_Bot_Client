import axios from "axios";

const uri = process.env.ENV === "production"
  ? "https://job-application-organizer.herokuapp.com/api"
  : "http://localhost:8080/api";
const ApiHeader = axios.create({ baseURL: uri, });

export const getProfiles = async (filter: any = undefined, sort: any = undefined) => {
  try {
    const { data } = await ApiHeader.get('profile/profiles', {
      params: { filter, sort }
    });
    return data;

  } catch (error) {
    console.error(error);
    throw error;
  }
}

// export const updateJob = async (userId, jobData) => {
//   try {
//     return await ApiHeader.put('/users/update-job', {
//       userId,
//       jobData
//     });
//   } catch (error) {
//     console.error(error);
//     throw error
//   }
// }

// export const deleteItem = async (userId, jobId) => {
//   try {
//     return await ApiHeader.delete('/users/delete-job', {
//       data: {
//         userId,
//         jobId
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     throw error
//   }
// }
