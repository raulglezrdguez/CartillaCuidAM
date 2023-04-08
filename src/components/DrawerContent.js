/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Drawer,
  Paragraph,
  Switch,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TapButton from './TapButton';

import {
  usePreferencesState,
  usePreferencesDispatch,
} from '../context/preferences';

import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerContent = props => {
  //   const {progress, navigation, state} = props;
  const {navigation} = props;

  const [errors] = useState({});

  const {colors} = useTheme();
  const {theme, chapter} = usePreferencesState();
  const dispatch = usePreferencesDispatch();

  useEffect(() => {
    if (chapter && chapter !== 'undefined') {
      navigation.navigate(chapter);
    }
  }, [chapter, navigation]);

  const storagePreferences = async () => {
    try {
      await AsyncStorage.setItem('@theme', theme);
    } catch (e) {
      console.log(e);
    }
  };

  const navigate = async c => {
    try {
      await AsyncStorage.setItem('@chapter', c);
      dispatch({type: 'SET_CHAPTER', payload: c});
      // navigation.navigate(c);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View
        style={[
          styles.drawerContent,
          {
            backgroundColor: colors.surface,
          },
        ]}>
        <Drawer.Section title={'Preferencias'}>
          <TouchableRipple onPress={() => dispatch({type: 'TOGGLE_THEME'})}>
            <View style={styles.preferenceTheme}>
              <Text>{'Tema'}</Text>
              <MaterialCommunityIcons
                name={
                  theme === 'dark' ? 'moon-waning-crescent' : 'weather-sunny'
                }
                color={colors.accent}
                size={24}
              />
              <View pointerEvents="none">
                <Switch value={theme === 'dark'} />
              </View>
            </View>
          </TouchableRipple>

          {errors.general ? (
            <Paragraph
              style={{
                borderRadius: 5,
                borderColor: colors.error,
                borderWidth: 1,
                color: colors.error,
                marginVertical: 10,
                padding: 10,
              }}>
              {errors.general}
            </Paragraph>
          ) : null}

          <View style={styles.button}>
            <TapButton onPress={storagePreferences} icon="content-save" />
          </View>
        </Drawer.Section>

        <Drawer.Section title={'Contenido'}>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('Inicio')}>
            <Text>{'Inicio'}</Text>
          </TouchableRipple>
        </Drawer.Section>
      </Animated.View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  preferenceTheme: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
  },
  link: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 2,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
