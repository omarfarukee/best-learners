import React from 'react';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';
import { Button } from 'react-bootstrap';
const ReactPdf = ({rootElementID,DownloadFileName}) => {
    const PdfDownload = () =>{
        const input = document.getElementById(rootElementID);
        html2canvas(input, {logging: true, letterRendering: 1, useCORS: true}).then((canvas) => {
            const Data = canvas.toDataURL('image/png')
            const Width =  208;
            const Height = canvas.height * Width /canvas.width;
            const pdf = new jsPDF('p','mm','a4');
            pdf.addImage(Data,'PNG',0,0,Width,Height)
            pdf.save( `${DownloadFileName}`)
        })
    }
    return (
        <div>
            <Button onClick={PdfDownload} className='btn-primary p-3 fs-5 mt-5'>DownLoad PDF</Button>
        </div>
    );
};


export default ReactPdf;