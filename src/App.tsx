import { useLayoutEffect, useRef } from 'react'
import './App.css'
import yootLogo from './assets/YootLogo.png'

function App() {
  const ref = useRef<HTMLIFrameElement>(null)

  useLayoutEffect(() => {
    if (!ref.current) return
    ref.current.onload = () => {
      console.log('loaded')
      const contentWindow = ref.current?.contentWindow
      const item = contentWindow?.document.querySelector('hidden')
      console.log('🚀🚀', item)
      // item?.remove()
    }
  }, [ref])
  return (
    <>
      <iframe
        ref={ref}
        className='iframe-admin_admissionchance'
        src={import.meta.env.VITE_ADMIN_ADMISSIONCHANCE_UL || ''}
      />
      <div className='yoot-logo'>
        <img src={yootLogo} />
      </div>
    </>
  )
}

export default App
