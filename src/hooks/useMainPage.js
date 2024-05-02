import { MainPageContext } from 'context/MainPageProvider';
import { useContext } from 'react';

export const useMainPage = () => useContext(MainPageContext);
