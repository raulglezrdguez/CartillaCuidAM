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
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
