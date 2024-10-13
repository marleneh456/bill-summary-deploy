import React from 'react';


function XMLParser(xmlFile, setParsedText, setIsLoading, setStep) {
  const reader = new FileReader();
  reader.onload = () => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(reader.result, 'application/xml');

    let extractedText = '';

    // Extract the title
    const title = xmlDoc.querySelector('dc\\:title')?.textContent || 'No title available';
    extractedText += `Title: ${title}\n\n`;

    // Extract the bill number, session, and congress
    const billNum = xmlDoc.querySelector('legis-num')?.textContent || 'No bill number';
    const session = xmlDoc.querySelector('session')?.textContent || 'No session information';
    const congress = xmlDoc.querySelector('congress')?.textContent || 'No congress information';
    extractedText += `Bill Number: ${billNum}\nSession: ${session}\nCongress: ${congress}\n\n`;

    // Extract sections and paragraphs
    const sections = xmlDoc.querySelectorAll('section');
    sections.forEach((section) => {
      const header = section.querySelector('header')?.textContent || 'No header';
      const text = section.querySelector('text')?.textContent || 'No text';
      extractedText += `Section: ${header}\n${text}\n\n`;

      const paragraphs = section.querySelectorAll('paragraph');
      paragraphs.forEach((paragraph) => {
        const enumValue = paragraph.querySelector('enum')?.textContent || '';
        const paragraphText = paragraph.querySelector('text')?.textContent || '';
        extractedText += `  ${enumValue} ${paragraphText}\n`;
      });
    });

    setParsedText(extractedText); // Set the parsed text in state
    setIsLoading(false); // Stop loading spinner
    setStep(4); // Proceed to summary step
  };
  reader.readAsText(xmlFile); // Read the XML file
}

export default XMLParser;
