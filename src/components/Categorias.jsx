import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import '../assets/css/categorias.css';

export default function Categorias() {
    const [open, setOpen] = useState(false);

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <>
            <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            >
            Categorias
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/gallery" end>
                            Alimentos
                        </NavLink>
                    </div>
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/gallery" end>
                            Descanso
                        </NavLink>
                    </div>
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/gallery" end>
                            Accesorios
                        </NavLink>
                    </div>
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/gallery" end>
                            Higiene 
                        </NavLink>
                    </div>                    
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/gallery" end>
                            Entretencion
                        </NavLink>
                    </div>

                </div>
            </Collapse>
        </>
    )
}