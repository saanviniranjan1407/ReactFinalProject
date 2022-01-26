import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: { 
            screen: AppTabNavigator 
          },
},
    {
        contentComponent: CustomSideBarMenu
    },
    {
        intialRouteName: 'Home'
    }       
)