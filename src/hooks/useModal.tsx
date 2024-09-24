import { useState } from 'react';

export const useModal = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const toggleVisible = () : void => {
		setIsVisible(!isVisible);
	}

	return {
		isVisible: isVisible,
		toggleVisible: toggleVisible
	};
}
