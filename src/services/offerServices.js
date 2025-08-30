import { api } from "../utils/requester.js";

const endPoints = {
    getAll: "/offers",
};

async function getAllOffers(signal) {
    return await api.get(endPoints.getAll, signal);
}

export const offerServices = {
    getAllOffers,
};
