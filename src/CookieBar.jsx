import React, { useState, Fragment } from 'react'
import MUICookieConsent from 'material-ui-cookie-consent';


export default function CookieBar() {
  const [isOpened, setIsOpened] = useState(true)

  const closeIt = () => {
    setIsOpened(false)
  }

  return (
    <MUICookieConsent 
        cookieName="mySiteCookieConsent"
        message="We don't store cookies but RAWG does please visit 
        their website for more information :)"
    />
  )
}