
import { createStackNavigator, createAppContainer } from "react-navigation";
import Searchlist from './Searchlist';
import Homescreen from './Homescreen';
import Searchdetails from './Searchdetails';









const AppNavigator = createStackNavigator({
  Home: {
    screen: Homescreen,
  },
  Search: {
    screen: Searchdetails,
  },
  List: {
      screen:Searchlist,
  },
},
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  });

export default createAppContainer(AppNavigator);


