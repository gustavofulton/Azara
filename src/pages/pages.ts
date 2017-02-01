import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';
import { CardsPage } from './cards/cards';
import { SearchPage } from './search/search';
import { SettingsPage } from './settings/settings';
import { ProfilePage } from './profile/profile';
import { MessagesPage } from './messages/messages';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = TutorialPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = CardsPage;
export const Tab2Root = ProfilePage;
export const Tab3Root = MessagesPage;
export const Tab4Root = SearchPage;
