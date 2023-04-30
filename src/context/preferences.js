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

    case 'SET_BACKPAGE':
      return {
        ...state,
        backPage: action.payload,
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
    backPage: '',
  };
  const [state, dispatch] = useReducer(preferencesReducer, initialState);

  useEffect(() => {
    getPreferences();
  }, [getPreferences]);

  const getPreferences = useCallback(async () => {
    const theme = await getItem('@theme');
    const chapter = await getItem('@chapter');
    const scroll = await getItem('@scroll');
    const backPage = await getItem('@backPage');

    dispatch({type: 'SET_THEME', payload: theme || 'light'});
    dispatch({type: 'SET_CHAPTER', payload: chapter || 'Inicio'});
    dispatch({type: 'SET_SCROLL', payload: scroll || '0'});
    dispatch({type: 'SET_BACKPAGE', payload: backPage || ''});
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

  const navigate = async c => {
    try {
      const lastChapter = await AsyncStorage.getItem('@chapter');
      let backPage = await AsyncStorage.getItem('@backPage');
      if (backPage) {
        const backPages = backPage.split(',');
        if (backPages.length > 5) {
          backPage = backPages.slice(1).join(',') + ',' + lastChapter;
        } else {
          backPage += ',' + lastChapter;
        }
      } else {
        backPage = lastChapter;
      }
      await AsyncStorage.setItem('@backPage', backPage);
      dispatch({type: 'SET_BACKPAGE', payload: backPage});
      await AsyncStorage.setItem('@chapter', c);
      dispatch({type: 'SET_CHAPTER', payload: c});
    } catch (e) {
      console.log(e);
    }
  };

  const navigateBack = async () => {
    try {
      let backPage = await AsyncStorage.getItem('@backPage');
      if (backPage) {
        const backPages = backPage.split(',');
        if (backPages.length > 0) {
          const newChapter = backPages[backPages.length - 1];
          backPage = backPages.slice(0, backPages.length - 1).join(',');
          await AsyncStorage.setItem('@backPage', backPage);
          dispatch({type: 'SET_BACKPAGE', payload: backPage});
          await AsyncStorage.setItem('@chapter', newChapter);
          dispatch({type: 'SET_CHAPTER', payload: newChapter});
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PreferencesDispatchContext.Provider value={dispatch}>
      <PreferencesStateContext.Provider
        value={{...state, navigate, navigateBack}}>
        {children}
      </PreferencesStateContext.Provider>
    </PreferencesDispatchContext.Provider>
  );
};

export const usePreferencesState = () => useContext(PreferencesStateContext);
export const usePreferencesDispatch = () =>
  useContext(PreferencesDispatchContext);
