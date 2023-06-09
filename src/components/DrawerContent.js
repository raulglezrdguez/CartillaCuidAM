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
  const {theme, chapter, navigate} = usePreferencesState();
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
                color={colors.secondary}
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
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Inicio')}>
            <Text>{'Presentación'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Pensamientos')}>
            <Text>{'Pensamientos'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Datos')}>
            <Text>{'Datos'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Preambulo')}>
            <Text>{'Preámbulo'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Introduccion')}>
            <Text>{'A modo de Introducción'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('SistemaCuidados')}>
            <Text>
              {'Hacia un sistema de cuidados en adultos mayores dependientes'}
            </Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('AsistenteSocial')}>
            <Text>{'Del asistente social a domicilio'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('EvaluacionFuncional')}>
            <Text>{'¿Qué hacer con la evaluación funcional?'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('EnfermaDependiente')}>
            <Text>{'Necesidades de la persona enferma dependiente'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('EstructuraCasa')}>
            <Text>{'Cambios en la Estrutura de la Casa'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('CuidadosPersonales')}>
            <Text>{'Cuidados Personales'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Sobrecarga')}>
            <Text>{'Sobrecarga de la persona cuidadora'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('SaludMental')}>
            <Text>{'Elementos de Salud Mental'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('AutonomiaPersonal')}>
            <Text>{'Promoción de la autonomía personal'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('CuidadoresAutoayuda')}>
            <Text>{'Recomendaciones para los cuidadores y la autoayuda'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Tecnologias')}>
            <Text>{'Apoyo de tecnologías'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Bibliografia')}>
            <Text>{'Bibliografía'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Anexo1')}>
            <Text>{'Anexo 1'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Anexo2')}>
            <Text>{'Anexo 2'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Anexo3')}>
            <Text>{'Anexo 3'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Anexo4')}>
            <Text>{'Anexo 4'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Anexo5')}>
            <Text>{'Anexo 5'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.primary}]}
            onPress={() => navigate('Ultima')}>
            <Text>{'Última página'}</Text>
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
    marginHorizontal: 20,
    width: '80%',
    marginBottom: 15,
  },
});

export default DrawerContent;
