import React from 'react';
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Categories from '../Screens/Categories';
import Practice from '../Screens/Practice';
import WishList from '../Screens/WishList';
import Account from '../Screens/Account';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BottomTabNavigator = () => {

    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    height:hp(8),
                    alignItems:'center',
                    paddingBottom:'1%',
                    backgroundColor:'#fff',
                    borderTopWidth:1,
                    borderTopColor:"#D3D3D3",
                },
                tabBarLabelPosition:'below-icon'
            }}>
            <Tab.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                    headerShown:false,
                    tabBarLabel:({focused})=>(
                        <Text 
                            style={{
                                color:focused ? '#000' : '#D3D3D3',
                                fontSize:RFPercentage(1.8)
                            }}
                            >Home</Text>
                    ),
                    tabBarIcon:({focused,color,size})=>(
                        <Entypo name="home" style= {{
                                color:focused ? '#000' : '#D3D3D3',
                                fontSize:RFPercentage(3)
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name='Categories' 
                component={Categories}
                options={{
                    headerShown:false,
                    tabBarLabel:({focused})=>(
                        <Text style={{
                            color:focused?'#000':'#D3D3D3',
                            fontSize:RFPercentage(1.8)
                        }}>Categories</Text>
                    ),
                    tabBarIcon:({focused})=>(
                        <Octicons name="list-unordered" style= {{
                            color:focused ? '#000' : '#D3D3D3',
                            fontSize:RFPercentage(3)
                        }}/>
                    )
                }}

            />
            <Tab.Screen 
                name='Practice' 
                component={Practice}
                options={{
                    headerShown:false,
                    tabBarLabel:({focused})=>(
                        <Text style={{
                            color:focused?'#000':'#D3D3D3',
                            fontSize:RFPercentage(1.8)
                        }}>Practice</Text>
                    ),
                    tabBarIcon:({focused})=>(
                        <MaterialIcons name="article" style= {{
                            color:focused ? '#000' : '#D3D3D3',
                            fontSize:RFPercentage(3)
                        }}/>
                    )
                }}
                />
            <Tab.Screen 
                name='WishList' 
                component={WishList}
                options={{
                    headerShown:false,
                    tabBarLabel:({focused})=>(
                        <Text style={{
                            color:focused?'#000':'#D3D3D3',
                            fontSize:RFPercentage(1.8)
                        }} >WishList</Text>
                    ),
                    tabBarIcon:({focused})=>(
                        <MaterialIcons name="favorite-border" style={{
                            color:focused ? '#000' : '#D3D3D3',
                            fontSize:RFPercentage(3)
                        }}/>
                    )
                }}
                />
            <Tab.Screen 
                name='Account' 
                component={Account}
                options={{
                    headerShown:false,
                    tabBarLabel:({focused})=>(
                        <Text style={{
                            color:focused?'#000':'#D3D3D3',
                            fontSize:RFPercentage(1.8)
                        }}>Account</Text>
                    ),
                    tabBarIcon:({focused})=>(
                        <MaterialCommunityIcons name="account-outline" style={{
                            color:focused ? '#000' : '#D3D3D3',
                            fontSize:RFPercentage(3.5)
                        }}/>
                    )
                }}
                />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;