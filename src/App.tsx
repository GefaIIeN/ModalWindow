import React from 'react';

import {Modal} from './ModalElement'
import {useModal} from "./UseModal";
import './App.css';

export const App = () : JSX.Element => {
  const [isShowingModal, toggleModal] = useModal();

  return (
    <div className="App">
      <Modal 
        show = {isShowingModal} 
        onCloseButtonClick = {toggleModal} 
      />

      <button className="button" 
       onClick={() => {toggleModal}}>{`Открыть`}
      </button>
      <button className="button button-smaller" 
       onClick={() => {toggleModal}}>{`Другое открыть`}
      </button>
    </div>
  );
}

