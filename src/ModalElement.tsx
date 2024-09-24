import React from 'react';

type Props = {
    onCloseButtonClick: () => boolean,
    show: boolean
}

export const Modal =({
    show,
    onCloseButtonClick,

}: Props): JSX.Element => {
    if (!show) {
      return <></>;
    }
  
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="body">
            Нажмите на кнопку чтобы закрыть окно.
          </div>
          <div className="footer">
          <button 
            onClick={() => {onCloseButtonClick}}>{`Закрыть`}
          </button>

          </div>
        </div>
      </div>
    );
  };
  