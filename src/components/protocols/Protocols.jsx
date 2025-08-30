import { useEffect, useState } from "react";

import { useError } from "../../contexts/ErrorContext";

import { protocolServices } from "../../services/protocolServices";

import SimpleProtocol from "./SimpleProtocol";
import Spinner from "../shared/spinner/Spinner";
import NothingYet from "../shared/NothingYet";

export default function Protocols() {
    const { setError } = useError();
    const [protocols, setProtocols] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchProtocols = async () => {
            try {
                const protocolsData = await protocolServices.getAllProtocols(
                    signal
                );
                setProtocols(protocolsData);
            } catch (error) {
                if (!signal.aborted) {
                    setError(error.message);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchProtocols();

        return () => {
            abortController.abort();
        };
    }, [setError]);

    return (
        <>
            {isLoading && <Spinner />}
            <section className="about p-50 bgcolor-2 border-rounded">
                <div className="table-container">
                    <h3>Протоколи</h3>
                    <div className="table-wrapper">
                        {!isLoading && protocols.length === 0 && <NothingYet />}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Заглавие</th>
                                    <th>От дата</th>
                                    <th>Файл</th>
                                </tr>
                            </thead>
                            <tbody>
                                {protocols
                                    .sort(
                                        (a, b) =>
                                            new Date(b.date) - new Date(a.date)
                                    )
                                    .map((protocol) => (
                                        <SimpleProtocol
                                            key={protocol._id}
                                            {...protocol}
                                        />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
