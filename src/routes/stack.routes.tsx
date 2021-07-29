import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, Counter } from '../pages'

const StackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => {
    return (
        <StackRoutes.Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#fff'
                }
            }}>
            <StackRoutes.Screen name='Homepage' component={ Home } />
            <StackRoutes.Screen name='Counter' component={ Counter } />
        </StackRoutes.Navigator>
    )
}

export default AppRoutes;