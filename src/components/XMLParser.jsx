import React from 'react'; // Import React (optional if not in a React environment)

function XMLParser(xmlFile, setParsedText, setIsLoading, setStep) {
  const reader = new FileReader(); // Create a FileReader to read the uploaded file
  reader.onload = () => {
    const parser = new DOMParser(); // Create a DOMParser to parse XML
    const xmlDoc = parser.parseFromString(reader.result, 'application/xml'); // Parse the file as XML

    let extractedText = ''; // Initialize a string to accumulate the extracted content

    // Extract the title from the XML (namespaced element)
    const title = xmlDoc.querySelector('dc\\:title')?.textContent || 'No title available';
    extractedText += `Title: ${title}\n\n`;

    // Extract bill number, session, and congress information
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

      // Extract paragraphs within the section
      const paragraphs = section.querySelectorAll('paragraph');
      paragraphs.forEach((paragraph) => {
        const enumValue = paragraph.querySelector('enum')?.textContent || ''; // Number or enum for the paragraph
        const paragraphText = paragraph.querySelector('text')?.textContent || ''; // Text content
        extractedText += `  ${enumValue} ${paragraphText}\n`; // Add indent for paragraphs
      });
    });

    setParsedText(extractedText); // Update the parsed text state
    setIsLoading(false); // Set loading state to false
    setStep(4); // Move to the summary display step
  };

  reader.readAsText(xmlFile); // Read the XML file as text
}

export default XMLParser; // Export the function for use in other components
