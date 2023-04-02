import Boleta from "../components/Boleta.jsx";
//import { PDFViewer } from '@react-pdf/renderer';
import { useContext } from "react";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";
import { BlobProvider } from '@react-pdf/renderer';
import { useNavigate } from "react-router-dom";

export default function Carrito() {
    const { cart, setCart } = useContext(cartContext);
    const { cost, setCost } = useContext(contextCost);
    const navigate = useNavigate();
    /*<PDFDownloadLink>
        <Boleta datos={{cart, cost}}/>
    </PDFDownloadLink>*/
    /*return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <Boleta datos={{cart, cost}} />
        </PDFViewer>
    )*/

    const downloadReport = (url) => {
        if (url && url !== null) {
            const state = window.open(url, "_blank")
            if (state) {
                setCart([]);
                setCost(0);
                navigate('/')
            }
        }
    };
    return (
        <BlobProvider document={<Boleta datos={{ cart, cost }} />}>
            {({ url }) => {
                console.log(url);
                if (url && url !== null) {
                    downloadReport(url);
                }
            }}
        </BlobProvider>)
}