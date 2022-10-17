import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { ScreenHome } from '../screens/ScreenHome'
import { ScreenMyTest } from '../screens/ScreenMyTest'
import { ScreenSetting } from '../screens/ScreenSetting'


const Material = createMaterialTopTabNavigator()


export default function Navigate() {

    return (
        <NavigationContainer>
            <Material.Navigator>
                <Material.Screen name="ScreenHome" component={ScreenHome} options={{
                    title: 'Создать тест',
                }} />
                <Material.Screen name="ScreenMyTest" component={ScreenMyTest} options={{
                    title: 'Мои тесты',
                }} />
                <Material.Screen name="ScreenSetting" component={ScreenSetting} options={{
                    title: 'Настройки'
                }} />
            </Material.Navigator>
        </NavigationContainer>
    )
}