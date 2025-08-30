import { useRef } from "react";
import { Link } from "react-router";

export default function Header() {
    const checkRef = useRef();

    const handleLinkClick = () => {
        if (checkRef.current) {
            checkRef.current.checked = false; // затваря менюто
        }
    };
    return (
        <nav>
            <input type="checkbox" id="check" ref={checkRef} />
            <label htmlFor="check" className="checkbtn">
                <i className="logo fas fa-bars"></i>
            </label>
            <div className="media">
                <Link to="/" className="logo">
                    <i className="fa-solid fa-building"></i>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/" className="active" onClick={handleLinkClick}>
                        Начало
                    </Link>
                </li>
                <li>
                    <Link to="/protocols" onClick={handleLinkClick}>
                        Протоколи
                    </Link>
                </li>
                <li>
                    <Link to="/offers" onClick={handleLinkClick}>
                        Оферти
                    </Link>
                </li>
                <li>
                    <Link to="/gallery" onClick={handleLinkClick}>
                        Галерия
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={handleLinkClick}>
                        За приложението
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
