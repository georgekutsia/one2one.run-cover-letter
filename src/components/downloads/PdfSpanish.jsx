import React from 'react'
import { Link } from 'react-router-dom';

function PdfSpanish() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('gamify español.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'myself español.pdf';
            alink.click();
        })
    })
}
  return (
    <div>
            <>
            <Link onClick={onButtonClick} className='d-flex justify-content-end download-link'><i className="fa-solid fa-download mx-3 mt-1"></i> Descargar PDF de esta carta</Link>
        </>
    </div>
  )
}

export default PdfSpanish