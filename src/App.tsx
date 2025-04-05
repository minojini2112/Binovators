import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens'; // Enable screens for performance

// import CompanySchedule from './screens/CompanySchedule';
// import UserSchedule from './screens/UserSchedule';
// import Maps from './screens/Maps';
import Login from './screens/Login';
// import UserProfile from './screens/UserProfile';
import CompanyHome from './screens/CompanyHome';
import EwasteCollege from './screens/EwasteCollege';
import CollegeDashboard from './screens/CollegeDashboard';
import CollegeBin from './screens/CollegeBin';
import EwasteSchedule from './screens/EwasteSchedule';
import CollegeProfile from './screens/CollegeProfile';
import CompanyProfile from './screens/CompanyProfile';
import CompanyDisplayprofile from './screens/CompanyDisplayprofile';
enableScreens();

export type RootStackParamList = {
  Homepage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CollegeHome">
        <Stack.Screen name="CollegeHome" component={CollegeDashboard} options={{ headerShown: false }} />
        <Stack.Screen name="CompanyHome" component={CompanyHome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="EwasteCollege" component={EwasteCollege} options={{ headerShown: false }} />
        <Stack.Screen name="CollegeBin" component={CollegeBin} options={{ headerShown: false }} />
        <Stack.Screen name="EwasteSchedule" component={EwasteSchedule} options={{ headerShown: false }} />
        <Stack.Screen name="CompanySchedule" component={EwasteSchedule} options={{ headerShown: false }} />
        <Stack.Screen name="CollegeProfile" component={CollegeProfile} options={{ headerShown: false }} />
        <Stack.Screen name="CompanyProfile" component={CompanyProfile} options={{ headerShown: false }} />
        <Stack.Screen name="CompanyDisplayprofile" component={CompanyDisplayprofile} options={{ headerShown: false }} />
      </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;