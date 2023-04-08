import React, {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const PreferencesStateContext = createContext();
const PreferencesDispatchContext = createContext();

const preferencesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };

    case 'SET_CHAPTER':
      return {
        ...state,
        chapter: action.payload,
      };

    case 'SET_SCROLL':
      return {
        ...state,
        scroll: action.payload,
      };

    default:
      return state;
  }
};

export const PreferencesProvider = ({children}) => {
  const initialState = {
    theme: 'light',
    chapter: 'Inicio',
    scroll: '0',
  };
  const [state, dispatch] = useReducer(preferencesReducer, initialState);

  useEffect(() => {
    getPreferences();
  }, [getPreferences]);

  const getPreferences = useCallback(async () => {
    const theme = await getItem('@theme');
    const chapter = await getItem('@chapter');
    const scroll = await getItem('@scroll');

    dispatch({type: 'SET_THEME', payload: theme || 'light'});
    dispatch({type: 'SET_CHAPTER', payload: chapter || 'Inicio'});
    dispatch({type: 'SET_SCROLL', payload: scroll || '0'});
  }, []);

  const getItem = async item => {
    let it = '';
    try {
      it = await AsyncStorage.getItem(item);

      if (it === null) {
        it = '';
      }
    } catch (error) {
      it = '';
    }
    return it;
  };

  return (
    <PreferencesDispatchContext.Provider value={dispatch}>
      <PreferencesStateContext.Provider value={state}>
        {children}
      </PreferencesStateContext.Provider>
    </PreferencesDispatchContext.Provider>
  );
};

export const usePreferencesState = () => useContext(PreferencesStateContext);
export const usePreferencesDispatch = () =>
  useContext(PreferencesDispatchContext);
