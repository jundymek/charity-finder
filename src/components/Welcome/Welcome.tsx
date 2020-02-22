import React from 'react';

interface Props {
  isVisible?: boolean;
  setIsWelcomeVisible: (isVisible: boolean) => void;
}

function Welcome({isVisible=true, setIsWelcomeVisible}: Props) {

  return (
    <div>
      Welcome Page
      <button onClick={() => setIsWelcomeVisible(false)}>Close</button>
    </div>
  )
}

export default Welcome;
