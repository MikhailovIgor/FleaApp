import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import colors from '../config/colors';
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveBackgroundColor: colors.white,
        inactiveTintColor: colors.medium,
      }}
    >
        <Tab.Screen
            name='Feed'
            component={FeedNavigator}
            options={{
              tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name='home' size={size} color={color} />
              ),
            }}
        />
        <Tab.Screen
            name='ListingEdit'
            component={ListingEditScreen}
            options={({ navigation }) => ({
                tabBarButton: () => (
                    <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT) }/>
                )
            })}
         />
        <Tab.Screen
            name='Account'
            component={AccountNavigator}
            options={{
              tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name='account' size={size} color={color} />
              ),
            }}
        />
    </Tab.Navigator>
);

export default AppNavigator;
