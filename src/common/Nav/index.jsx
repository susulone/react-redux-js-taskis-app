import { Link } from "react-router-dom";
import { Grid, Info, PlusCircle, Search, Settings } from "react-feather";
import { Logo } from "../../assets/Logo";
import "./styles.css";

export const Nav = () => {
    return (
        <nav className="Nav">
            <Logo />
        </nav>
    );
};
