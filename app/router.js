import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerItems, createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import Home from './views/home'
import Detail from './views/detail'
import Favorite from './views/favorite'

const CustomerDrawerContentComponent = (props) => (
    <View style={{ backgroundColor: '#2793E1', height: '100%' }}>
        <View style={{ flex: 1, justifyContent:'center', alignContent:'center' }}>
            {/* <Image source={require('./assets/images/logo.jpg')} style={{width:50,height:50}}></Image> */}
            <Text style={{fontSize:18,color:'white',fontWeight:'bold',textAlign:'center'}}>MovieFinder</Text>
        </View>
        <View style={{ flex: 2 }}>
            <DrawerItems {...props} />
        </View>
    </View>
)

const MovieStack = createStackNavigator(
    {
        Movie: {
            screen: Home,
            navigationOptions: {
                header: (({ navigation }) => <View style={{ backgroundColor: '#2793E1', height: 50, justifyContent: 'center', padding: 10 }}>
                    <TouchableOpacity transparent onPress={() => {
                        navigation.openDrawer();
                    }}>
                        <Image source={require('./assets/images/menu.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>),
            }
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                header: (({ navigation }) => <View style={{ backgroundColor: '#2793E1', height: 50, justifyContent: 'center', padding: 10 }}>
                    <TouchableOpacity transparent onPress={() => {
                        navigation.goBack(null);
                    }}>
                        <Image source={require('./assets/images/backarrow.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>),
            }
        }
        // MovieDetail:{

        // }
    }
)

const FavoriteStack = createStackNavigator(
    {
        Favorite: {
            screen: Favorite,
            navigationOptions: {
                header: (({ navigation }) => <View style={{ backgroundColor: '#2793E1', height: 50, justifyContent: 'center', padding: 10 }}>
                    <TouchableOpacity transparent onPress={() => {
                        navigation.openDrawer();
                    }}>
                        <Image source={require('./assets/images/menu.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>),
            }
        },
    }
)


const UserStack = createDrawerNavigator(
    {
        Movie: {
            screen: MovieStack,
            navigationOptions: {
                title: 'Movies',
                drawerIcon: ({ tintColor }) => (
                    <Image source={require('./assets/images/movies.png')} style={{ width: 50, height: 50 }} />
                ),
            }
        },
        Favorite: {
            screen: FavoriteStack,
            navigationOptions: {
                title: 'Favorite',
                drawerIcon: ({ tintColor }) => (
                    <Image source={require('./assets/images/favorite.png')} style={{width: 50, height: 50}} />
                ),
            }
        }
    },
    // this.props.agree ? 
    //     {
    //         initalRouteName: 'Location'
    //     }
    // :
    //     {
    //         initalRouteName: 'EditProfile'
    //     },
    {
        contentOptions: {
            labelStyle: {
                fontSize: 15,
                marginLeft: 50,
                color: 'white'
            },
        },
        contentComponent: CustomerDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerPosition: 'left',
    }
);

export const AppContainer = createAppContainer(UserStack);

