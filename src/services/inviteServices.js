import { api } from "../utils/requester.js";

const endPoints = {
    getAll: "/invitations",
};

async function getAllInvitations(signal) {
    return await api.get(endPoints.getAll, signal);
}

export const inviteServices = {
    getAllInvitations,
};
