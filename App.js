import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllTrans from './screens/AllTrans';
import AllDayTrans from './screens/AllDayTrans';
import TransDetails from './screens/TransDetails';
import NewTrans from './screens/NewTrans'
import colors  from './assets/colors/colors';
import TransInputModal from './components/TransInputModal';

import Entypo from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const TabNav =()=>{
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          ...styles.tabBar,
        },
        headerShow:false,
        tabBarInactiveTintColor: colors.black,
        // tabBarActiveTintColor:colors.black,
        tabBarShowLabel: false,
        headerShown:false,
      }}
      >
      <Tab.Screen
        name="AllTrans"
        component={AllTrans}
        options={{
          tabBarIcon: ({ color }) => {
            return <Entypo name="home" size={32} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="NewTrans"
        component={NewTrans}
        options={{
          tabBarIcon: ({ color }) => {
            return <Entypo name="add-to-list" size={32} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const App =()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={TransDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="NewTrans"
          component={NewTrans}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen
            name="AllDayTrans"
            component={AllDayTrans}
            options={{
              headerShown: false,
            }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    backgroundColor: colors.gray,
  },
});

export default App