import * as React from 'react';
import {IconButton, Provider as PaperProvider} from 'react-native-paper';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';

import {usePreferencesState} from './context/preferences';
import {themeDark, themeLight} from './context/theme';

import RootScreen from './screens/RootScreen';
import DrawerContent from './components/DrawerContent';
import Pensamientos from './screens/Pensamientos';
import Datos from './screens/Datos';
import Preambulo from './screens/Preambulo';
import Introduccion from './screens/Introduccion';
import SistemaCuidados from './screens/SistemaCuidados';
import AsistenteSocial from './screens/AsistenteSocial';
import EvaluacionFuncional from './screens/EvaluacionFuncional';

const Drawer = createDrawerNavigator();

const customDrawerContent = (props: DrawerContentComponentProps) => {
  return <DrawerContent {...props} />;
};

const screenOptions = (props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}): DrawerNavigationOptions => {
  const {navigation} = props;

  return {
    headerLeft: ({}) => (
      <IconButton
        icon="notebook"
        size={20}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    ),
  };
};

export default function Main() {
  const {theme} = usePreferencesState();
  const userTheme = theme === 'dark' ? themeDark : themeLight;

  return (
    <PaperProvider theme={userTheme}>
      <NavigationContainer theme={userTheme}>
        <Drawer.Navigator
          initialRouteName="Inicio"
          drawerContent={customDrawerContent}
          screenOptions={screenOptions}>
          <Drawer.Screen
            name="Inicio"
            component={RootScreen}
            options={{title: 'Presentación'}}
          />
          <Drawer.Screen
            name="Pensamientos"
            component={Pensamientos}
            options={{title: 'Pensamientos'}}
          />
          <Drawer.Screen
            name="Datos"
            component={Datos}
            options={{title: 'Datos'}}
          />
          <Drawer.Screen
            name="Preambulo"
            component={Preambulo}
            options={{title: 'Preámbulo'}}
          />
          <Drawer.Screen
            name="Introduccion"
            component={Introduccion}
            options={{title: 'Introducción'}}
          />
          <Drawer.Screen
            name="SistemaCuidados"
            component={SistemaCuidados}
            options={{title: 'Sistema de cuidados'}}
          />
          <Drawer.Screen
            name="AsistenteSocial"
            component={AsistenteSocial}
            options={{title: 'Asistente Social'}}
          />
          <Drawer.Screen
            name="EvaluacionFuncional"
            component={EvaluacionFuncional}
            options={{title: 'Evaluación Funcional'}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
