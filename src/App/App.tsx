import React from 'react';

import {Modal} from '../ModalElement';
import {useModal} from "../hooks";
import './App.scss';

export const App = () : JSX.Element => {
  const {isVisible, toggleVisible} = useModal();

  return (
    <div className="App">
      <Modal isVisible={isVisible} onClose = {()=>{toggleVisible();}} />

      <button className="button" 
       onClick={() => {toggleVisible()}}>{`Открыть`}
      </button>
      <button className="button button-smaller" 
       onClick={() => {toggleVisible()}}>{`Другое открыть`}
      </button>
    </div>
  );
}

