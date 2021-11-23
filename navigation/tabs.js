import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import { useTheme } from "../context/ThemeProvider";

import ArchiveScreen from "../screens/ArchiveScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SearchScreen from "../screens/SearchScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import PostScreen from "../screens/PostScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -40,

      elevation: 5,
    }}
    onPress={console.log("hello")}
  >
    <View
      style={{
        width: 75,
        height: 75,
        borderRadius: 37.5,
        backgroundColor: "white",
        ...styles.shadow,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  const { colors, isDark } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: colors.menuBackground,
            borderRadius: 15,
            height: 90,
            borderColor: "blue",
            ...styles.shadow,
          },
        }}
      >
        <Tab.Screen
          name="Archive"
          component={ArchiveScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name="folder"
                  type="font-awesome"
                  color={focused ? colors.iconSelected : colors.icon}
                  size={30}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name="star"
                  type="font-awesome"
                  color={focused ? colors.iconSelected : colors.icon}
                  size={30}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={PostScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name="plus"
                  type="font-awesome"
                  color={colors.addButton}
                  size={30}
                />
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name="search"
                  type="font-awesome"
                  color={focused ? colors.iconSelected : colors.icon}
                  size={30}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  elevation: 5,
                }}
              >
                <Icon
                  name="cog"
                  type="font-awesome"
                  color={focused ? colors.iconSelected : colors.icon}
                  size={30}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
    borderTopWidth: 0,
  },
});

export default Tabs;
