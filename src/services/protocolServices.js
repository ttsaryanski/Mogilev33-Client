import { api } from "../utils/requester.js";

const endPoints = {
    getAll: "/protocols",
};

async function getAllProtocols(signal) {
    return await api.get(endPoints.getAll, signal);
}

export const protocolServices = {
    getAllProtocols,
};
