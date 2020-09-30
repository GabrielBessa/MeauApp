import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import * as React from 'react';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';
import { atalhosRoutes } from '../routes/AtalhosStack';
import { configRoutes } from '../routes/ConfigStack';
import { infoRoutes } from '../routes/InformationsStack';
import { profileRoutes } from '../routes/ProfileStack';
import { theme } from './theme';

const Avatar = styled.View`
  height: 150px;
  background-color: ${theme.colors.primary};
`;

export const routes = [profileRoutes, atalhosRoutes, infoRoutes, configRoutes];

const LogoutButton = styled.Button`
  width: 100%;
`;

export function CustomDrawerContent(
  props: DrawerContentComponentProps<DrawerContentOptions>
) {
  return (
    <DrawerContentScrollView {...props}>
      <Avatar></Avatar>
      {routes.map(item => (
        <List.Accordion
          title={item.label}
          key={item.label + '-root'}
          left={props => <List.Icon {...props} icon={item.icon} />}
        >
          {item.children.map(child => (
            <List.Item title={child.label} key={child.label + '-root'} />
          ))}
        </List.Accordion>
      ))}
      <LogoutButton title={'Sair'} onPress={() => {}} />
    </DrawerContentScrollView>
  );
}
