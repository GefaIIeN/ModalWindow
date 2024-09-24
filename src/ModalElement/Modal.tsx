import React from 'react';

type Props = {
  isVisible: boolean
    onClose: () => void
}

export const Modal =({
  isVisible,
  onClose,
}: Props): JSX.Element|null => {
    return isVisible ? (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="body">
            Нажмите на кнопку чтобы закрыть окно.
          </div>
          <div className="footer">
          <button 
            onClick={() => {onClose()}}>{`Закрыть`}
          </button>

          </div>
        </div>
      </div>
    ) : null;
  };
  