import './App.css'

function App() {
  return (
    <>
      <iframe className='iframe-admin_admissionchance' src={import.meta.env.VITE_ADMIN_ADMISSIONCHANCE_UL || ''} />
    </>
  )
}

export default App
