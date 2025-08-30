import { Link } from "react-router";

export default function SimpleProtocol({ title, date, fileUrl }) {
    return (
        <tr>
            <td>{title}</td>
            <td>{date}</td>
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
