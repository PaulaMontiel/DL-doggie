import Boleta from "../components/Boleta.jsx";
import { PDFViewer, BlobProvider } from '@react-pdf/renderer';
import { useContext } from "react";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";

export default function Carrito() {
    const { cart } = useContext(cartContext);
    const { cost } = useContext(contextCost);
    return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <Boleta datos={{cart, cost}} />
        </PDFViewer>
        
        /*<BlobProvider>
            <Boleta datos={{cart, cost}} />
        </BlobProvider>*/
    )
}