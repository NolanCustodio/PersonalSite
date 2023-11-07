import { useState } from 'react';
import { Document, Page } from 'react-pdf';


import resumePath from './NolanLeyCustodioResume.pdf'

function Resume() {

  return (
    <div className='resumeContainer'>
      <Document file={resumePath}>
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