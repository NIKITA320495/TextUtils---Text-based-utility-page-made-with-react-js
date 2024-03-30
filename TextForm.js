import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [replacementTerm, setReplacementTerm] = useState('');
  const [showSearchReplace, setShowSearchReplace] = useState(false); // State to control visibility of search and replace input fields

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleSearchReplace = () => {
    setShowSearchReplace(true); // Show the search and replace input fields
  };

  const handlePerformSearchReplace = () => {
    // Perform search and replace operation
    const newText = text.replace(new RegExp(searchTerm, 'g'), replacementTerm);
    setText(newText);
    setShowSearchReplace(false); // Hide the search and replace input fields after performing the operation
  };

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      // Create a new instance of SpeechSynthesisUtterance
      const utterance = new SpeechSynthesisUtterance(text);
      // Use the default voice
      utterance.voice = speechSynthesis.getVoices()[0];
      // Speak the text
      speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech not supported in your browser.');
    }
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  };

  return (
    <>
      <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor: props.mode==='dark'?'hsl(218, 22%, 14%)':'white',color: props.mode==='dark'?'white':'black',borderColor: props.theme}}
            onChange={handleOnChange}
            placeholder="Leave a comment here"
            id="mybox"
            rows="15"
          ></textarea>
        </div>
        {!showSearchReplace && ( // Render search and replace buttons only if search and replace input fields are not visible
          <button className={`btn ${props.theme === 'red' ? 'btn-danger' : props.theme === 'yellow' ? 'btn-warning' : props.theme === 'green' ? 'btn-success' : 'btn-primary'} me-2`} onClick={handleSearchReplace}>
            Search & Replace
          </button>
        )}
        {showSearchReplace && ( // Render search and replace input fields only if search and replace buttons have been clicked
          <>
            <div className="mb-3" style={{ marginTop: '10px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search term"
                value={searchTerm}
                style={{
                  backgroundColor: props.mode === 'dark' ? 'hsl(218, 22%, 14%)' : 'white',
                  color: props.mode === 'dark' ? 'white' : 'black',
                  '::placeholder': {
                    color: props.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
                  }
                }}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Replacement term"
                style={{backgroundColor:props.mode==='dark'?'hsl(218, 22%, 14%)':'white',color: props.mode==='dark'?'white':'black'}}
                value={replacementTerm}
                onChange={(e) => setReplacementTerm(e.target.value)}
              />
            </div>
            <button className={`btn ${props.theme === 'red' ? 'btn-danger' : props.theme === 'yellow' ? 'btn-warning' : props.theme === 'green' ? 'btn-success' : 'btn-primary'} me-2`} onClick={handlePerformSearchReplace}>
              Replace
            </button>
          </>
        )}
        <button className={`btn ${props.theme === 'red' ? 'btn-danger' : props.theme === 'yellow' ? 'btn-warning' : props.theme === 'green' ? 'btn-success' : 'btn-primary'} mx-2 my-2`} onClick={handleTextToSpeech}>
          Text to Speech
        </button>
        <button className={`btn ${props.theme === 'red' ? 'btn-danger' : props.theme === 'yellow' ? 'btn-warning' : props.theme === 'green' ? 'btn-success' : 'btn-primary'} mx-2 my-2`} onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className={`btn ${props.theme === 'red' ? 'btn-danger' : props.theme === 'yellow' ? 'btn-warning' : props.theme === 'green' ? 'btn-success' : 'btn-primary'} mx-2 my-2`} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className={`btn ${props.theme === 'red' ? 'btn-danger' : props.theme === 'yellow' ? 'btn-warning' : props.theme === 'green' ? 'btn-success' : 'btn-primary'} mx-2 my-2`} onClick={handleExtraSpaces}>
          Remove Extra spaces
        </button>
      </div>
      <div className="container my-2"style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  );
}
