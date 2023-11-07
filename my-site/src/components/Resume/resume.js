import { useState } from 'react';
import { Document, Page } from 'react-pdf';


import resumePath from './NolanLeyCustodioResume.pdf'

function Resume() {

  return (
    <div>
      <div className='resumeContainer'>
        <Document file={resumePath}>
          <Page 
              pageNumber={1} 
              renderAnnotationLayer={false}
              renderTextLayer={false}
          />
        </Document>
      </div>
      <button className='btn'>
        <a href={resumePath}>
          Download
        </a>
      </button>
    </div>
  );
}

export default Resume