import React from 'react';
import { BottomNavigation } from 'react-native-paper';

const HomeRoute = () => <Text>Home</Text>;
const AdsRoute = () => <Text>My Ads</Text>;
const SellRoute = () => <Text>Sell Now</Text>;
const ChatRoute = () => <Text>Chat</Text>;
const MoreRoute = () => <Text>More</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'ads', title: 'My Ads', icon: 'bookmark' },
    { key: 'sell', title: 'Sell Now', icon: 'plus-box' },
    { key: 'chat', title: 'Chat', icon: 'message' },
    { key: 'more', title: 'More', icon: 'dots-horizontal' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    ads: AdsRoute,
    sell: SellRoute,
    chat: ChatRoute,
    more: MoreRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
