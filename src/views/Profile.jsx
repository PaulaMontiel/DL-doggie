
import Navbar from "../components/Navbar.jsx";
import { UserProfile } from '../components/UserProfile.jsx';

export default function Profile() {
    
    return (
        <>
            <Navbar></Navbar>
            <h1>Publicaciones</h1>
            <UserProfile></UserProfile>
        </>
    );
}