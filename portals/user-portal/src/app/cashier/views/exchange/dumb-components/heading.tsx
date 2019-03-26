import * as React from 'react';
import { Tab, TabItem } from '../../../components/tab/tab';

export const CashierHeading = () => (
  <Tab>
    <TabItem to={'/cashier'}>Wallet</TabItem>
    <TabItem to={'/my-bets'}>My bets</TabItem>
    <TabItem to={'/account'}>Account</TabItem>
    <TabItem to={'/notifications'}>Notifications</TabItem>
    <TabItem to={'/settings'} active>
      Settings
    </TabItem>
    <TabItem to={'/'} divider>
      Return to sportsbook
    </TabItem>
  </Tab>
);
