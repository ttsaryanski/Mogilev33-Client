import { useEffect, useState } from "react";

import { useError } from "../../contexts/ErrorContext";

import { offerServices } from "../../services/offerServices";

import SimpleOffer from "./SimpleOffer";
import Spinner from "../shared/spinner/Spinner";
import NothingYet from "../shared/NothingYet";

export default function Offers() {
    const { setError } = useError();
    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchOffers = async () => {
            try {
                const offersData = await offerServices.getAllOffers(signal);
                setOffers(offersData);
            } catch (error) {
                if (!signal.aborted) {
                    setError(error.message);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchOffers();

        return () => {
            abortController.abort();
        };
    }, [setError]);

    return (
        <>
            {isLoading && <Spinner />}
            <section className="about p-50 bgcolor-2 border-rounded">
                <div className="table-container">
                    <h3>Оферти</h3>
                    <div className="table-wrapper">
                        {!isLoading && offers.length === 0 && <NothingYet />}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Заглавие</th>
                                    <th>Фирма</th>
                                    <th>Цена</th>
                                    <th>Файл</th>
                                </tr>
                            </thead>
                            <tbody>
                                {offers
                                    .sort(
                                        (a, b) =>
                                            new Date(b.date) - new Date(a.date)
                                    )
                                    .map((offer) => (
                                        <SimpleOffer
                                            key={offer._id}
                                            {...offer}
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
