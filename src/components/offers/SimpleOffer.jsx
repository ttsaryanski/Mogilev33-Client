import { Link } from "react-router";

export default function SimpleOffer({ title, company, price, fileUrl }) {
    return (
        <tr>
            <td>{title}</td>
            <td>{company}</td>
            <td>{price} лв.</td>
            <td>
                <Link
                    to={`/pdf/${encodeURIComponent(fileUrl)}`}
                    className="links"
                >
                    doc.pdf
                </Link>
            </td>
        </tr>
    );
}
