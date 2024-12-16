import { lazy } from 'react';

export const FriendMessagePage = lazy(() => import('@/pages/FriendMessagePage/FriendMessagePage'));

export const CreatePlaygroundPage = lazy(
  () => import('@pages/CreatePlaygroundPage/CreatePlaygroundPage'),
);
export const DeleteAccountPage = lazy(() => import('@pages/DeleteAccountPage/DeleteAccountPage'));

export const DirectMessagePage = lazy(() => import('@pages/DirectMessagePage/DirectMessagePage'));

export const EditAccountPage = lazy(() => import('@pages/EditAccountPage/EditAccountPage'));

export const CreateProfilePage = lazy(() => import('@pages/CreateProfilePage/CreateProfilePage'));

export const EditProfilePage = lazy(() => import('@pages/EditProfilePage/EditProfilePage'));

export const FindAccountPage = lazy(() => import('@pages/FindAccountPage/FindAccountPage'));

export const FindPlaygroundFriendPage = lazy(
  () => import('@pages/FindPlaygroundFriendPage/FindPlaygroundFriendPage'),
);

export const FriendsPlayedPage = lazy(() => import('@pages/FriendsPlayedPage/FriendsPlayedPage'));

export const MainPage = lazy(() => import('@pages/MainPage/MainPage'));

export const PlaygroundMessagePage = lazy(
  () => import('@pages/PlaygroundMessagePage/PlaygroundMessagePage'),
);

export const PlaygroundRoomPage = lazy(
  () => import('@pages/PlaygroundRoomPage/PlaygroundRoomPage'),
);

export const ProfilePage = lazy(() => import('@pages/ProfilePage/ProfilePage'));

export const ReportFriendPage = lazy(() => import('@pages/ReportFriendPage/ReportFriendPage'));

export const SignInPage = lazy(() => import('@pages/SignInPage/SignInPage'));

export const SignUpCompletePage = lazy(
  () => import('@pages/SignUpCompletePage/SignUpCompletePage'),
);

export const SignUpPage = lazy(() => import('@pages/SignUpPage/SignUpPage'));

export const PlaygroundSearchPage = lazy(
  () => import('@pages/PlaygroundSearchPage/PlaygroundSearchPage'),
);

export const MyRecruitmentsPage = lazy(
  () => import('@pages/MyRecruitmentsPage/MyRecruitmentsPage'),
);

export const FreindRecommendedPage = lazy(
  () => import('@/pages/FriendRecommendedPage/FriendRecommendedPage'),
);

export const UserSettingPage = lazy(() => import('@/pages/UserSettingPage/UserSettingPage'));

export const ProfileInfoPage = lazy(() => import('@/pages/ProfileInfoPage/ProfileInfoPage'));

export const PlaygroundRoomListPage = lazy(
  () => import('@/pages/PlaygroundRoomListPage/PlaygroundRoomListPage'),
);
