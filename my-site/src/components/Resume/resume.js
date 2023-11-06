import { useState } from 'react';
import { Document, Page } from 'react-pdf';


import resumePath from './NolanLeyCustodioResume.pdf'

function Resume() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='container'>
      <Document file={resumePath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page 
            pageNumber={1} 
            renderAnnotationLayer={false}
            renderTextLayer={false}
        />
      </Document>
    </div>
  );
}

export default Resume