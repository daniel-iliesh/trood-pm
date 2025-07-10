import { api } from ".";
import { Vacancy } from "./dtos";

export const getVacancys = async (): Promise<Vacancy[]> => {
  try {
    const response = await api.get("/vacancys");
    return response.data;
  } catch (error) {
    console.error("Error fetching vacancys:", error);
    throw error;
  }
};

export const createVacancy = async (vacancyData: Vacancy): Promise<Vacancy> => {
  try {
    const response = await api.post("/vacancys", vacancyData);
    return response.data;
  } catch (error) {
    console.error("Error creating vacancy:", error);
    throw error;
  }
};

export const updateVacancy = async (
  vacancyId: string,
  vacancyData: Vacancy,
): Promise<Vacancy> => {
  try {
    const response = await api.put(`/vacancys/${vacancyId}`, vacancyData);
    return response.data;
  } catch (error) {
    console.error("Error updating vacancy:", error);
    throw error;
  }
};

export const deleteVacancy = async (vacancyId: string): Promise<void> => {
  try {
    await api.delete(`/vacancys/${vacancyId}`);
  } catch (error) {
    console.error("Error deleting vacancy:", error);
    throw error;
  }
};
