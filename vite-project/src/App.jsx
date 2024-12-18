import { useRef, useState, useEffect } from 'react'
import colorfillLogo from './assets/colorfill_logo.png'
import xcircle from './assets/x-close.png'
import './App.css'

function App() {
  const [image, setImage] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const selectFile = () => {
    fileInputRef.current.click()
  }

  const onFileSelect = (event) => {
    console.log('hello')
    const files = event.target.files
    if (files.length == 0) return;
    setImage(URL.createObjectURL(files[0]))
  }

  const onDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy"
  }

  const onDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false)
  }

  const onDrop = (event) => {
    event.preventDefault();
    setIsDragging(false)
    const files = event.dataTransfer.files
    if (files.length == 0) return;
    setImage(URL.createObjectURL(files[0]))
  }

  useEffect(() => {
    console.log(image);
  }, [image]);



  return (
    <>
      <div className='cont--max-width'>
        <img src={colorfillLogo} height='80px' width='480px' />
        <div className='cont--file-drop' onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
          {image && <img className='x-icon' src={xcircle} role='button' onClick={() => { setImage(null) }} />}
          {image ? <img className='cont--img visible' src={image} /> : <img className='cont--img' />}
          {isDragging ?
            <span className='drop-message'>Drop image here</span> :
            <>
              <span>Drag and drop an image here</span>
              <span>- or -</span>
              <span className='span--browse-files' role='button' onClick={selectFile}>Browse Files</span>
            </>
          }

          <input className='file' type='file' ref={fileInputRef} onChange={onFileSelect} accept="image/*" />
        </div>
        <button className={`${image ? '' : 'disabled-button'}`}>Color Me!</button>
      </div>
    </>
  )
}

export default App
