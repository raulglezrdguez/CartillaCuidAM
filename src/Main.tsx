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
import EnfermaDependiente from './screens/EnfermaDependiente';
import EstructuraCasa from './screens/EstructuraCasa';
import CuidadosPersonales from './screens/CuidadosPersonales';
import Sobrecarga from './screens/Sobrecarga';
import SaludMental from './screens/SaludMental';
import AutonomiaPersonal from './screens/AutonomiaPersonal';
import CuidadoresAutoayuda from './screens/CuidadoresAutoayuda';
import Tecnologias from './screens/Tecnologias';
import Bibliografia from './screens/Bibliografia';
import Anexo1 from './screens/Anexo1';
import Anexo2 from './screens/Anexo2';
import Anexo3 from './screens/Anexo3';
import Anexo4 from './screens/Anexo4';
import Anexo5 from './screens/Anexo5';
import Ultima from './screens/Ultima';

const Drawer = createDrawerNavigator();

const customDrawerContent = (props: DrawerContentComponentProps) => {
  return <DrawerContent {...props} />;
};

const screenOptions = (props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
  navigateBack: any;
  backPage: any;
}): DrawerNavigationOptions => {
  const {navigation, navigateBack, backPage} = props;
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
    headerRight: ({}) => (
      <IconButton
        icon="notebook-minus"
        disabled={
          backPage === null || backPage === undefined || backPage === ''
        }
        size={20}
        onPress={() => {
          navigateBack();
        }}
      />
    ),
  };
};

export default function Main() {
  const {theme, navigateBack, backPage} = usePreferencesState();
  const userTheme = theme === 'dark' ? themeDark : themeLight;

  return (
    <PaperProvider theme={userTheme}>
      <NavigationContainer theme={userTheme}>
        <Drawer.Navigator
          initialRouteName="Inicio"
          drawerContent={customDrawerContent}
          screenOptions={({route, navigation}) =>
            screenOptions({route, navigation, navigateBack, backPage})
          }>
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
            options={{title: 'Sistema de Cuidados'}}
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
          <Drawer.Screen
            name="EnfermaDependiente"
            component={EnfermaDependiente}
            options={{title: 'Enfermo Dependiente'}}
          />
          <Drawer.Screen
            name="EstructuraCasa"
            component={EstructuraCasa}
            options={{title: 'Estructura de la Casa'}}
          />
          <Drawer.Screen
            name="CuidadosPersonales"
            component={CuidadosPersonales}
            options={{title: 'Cuidados Personales'}}
          />
          <Drawer.Screen
            name="Sobrecarga"
            component={Sobrecarga}
            options={{title: 'Sobrecarga Cuidador'}}
          />
          <Drawer.Screen
            name="SaludMental"
            component={SaludMental}
            options={{title: 'Salud Mental'}}
          />
          <Drawer.Screen
            name="AutonomiaPersonal"
            component={AutonomiaPersonal}
            options={{title: 'Autonomia Personal'}}
          />
          <Drawer.Screen
            name="CuidadoresAutoayuda"
            component={CuidadoresAutoayuda}
            options={{title: 'Cuidadores y Autoayuda'}}
          />
          <Drawer.Screen
            name="Tecnologias"
            component={Tecnologias}
            options={{title: 'Tecnologías'}}
          />
          <Drawer.Screen
            name="Bibliografia"
            component={Bibliografia}
            options={{title: 'Bibliografía'}}
          />
          <Drawer.Screen
            name="Anexo1"
            component={Anexo1}
            options={{title: 'Anexo 1'}}
          />
          <Drawer.Screen
            name="Anexo2"
            component={Anexo2}
            options={{title: 'Anexo 2'}}
          />
          <Drawer.Screen
            name="Anexo3"
            component={Anexo3}
            options={{title: 'Anexo 3'}}
          />
          <Drawer.Screen
            name="Anexo4"
            component={Anexo4}
            options={{title: 'Anexo 4'}}
          />
          <Drawer.Screen
            name="Anexo5"
            component={Anexo5}
            options={{title: 'Anexo 5'}}
          />
          <Drawer.Screen
            name="Ultima"
            component={Ultima}
            options={{title: 'Última página'}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
