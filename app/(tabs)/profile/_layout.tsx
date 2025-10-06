import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Profile',
          title: 'Mon profil',
        }}
      />
      <Drawer.Screen
        name="settings" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Settings',
          title: 'Paramètres',
        }}
      />
      <Drawer.Screen
        name="help" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Help',
          title: 'Aide',
        }}
      />
    </Drawer>
  );
}