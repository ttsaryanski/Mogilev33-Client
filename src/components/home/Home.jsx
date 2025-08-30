import { useEffect, useState } from "react";
import { Link } from "react-router";

import { inviteServices } from "../../services/inviteServices";

import InvitePdf from "../pdf/invitePdf";
import Spinner from "../shared/spinner/Spinner";

export default function Home() {
    const [invite, setInvite] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchInvitations = async () => {
            try {
                const invitationsData = await inviteServices.getAllInvitations(
                    signal
                );
                setInvite(invitationsData);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching invitations:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchInvitations();

        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <section className="site-header flex-center bgcolor-2 border-rounded">
            <h1 className="h1-home">гр.Габрово, бул."Могильов" 33</h1>
            {isLoading && <Spinner />}
            {invite.length > 0 && <InvitePdf fileUrl={invite[0].fileUrl} />}
            <Link to="/protocols" className="h1">
                Към протоколите
            </Link>
        </section>
    );
}
