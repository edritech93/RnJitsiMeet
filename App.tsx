import React, {useCallback, useRef} from 'react';
import {StyleSheet, LogBox, View} from 'react-native';
import {JitsiMeeting} from '@jitsi/react-native-sdk/index';
import {
  ADD_PEOPLE_ENABLED,
  ANDROID_SCREENSHARING_ENABLED,
  CAR_MODE_ENABLED,
  CHAT_ENABLED,
  FULLSCREEN_ENABLED,
  HELP_BUTTON_ENABLED,
  INVITE_ENABLED,
  IOS_SCREENSHARING_ENABLED,
  LOBBY_MODE_ENABLED,
  PREJOIN_PAGE_ENABLED,
  SETTINGS_ENABLED,
  SPEAKERSTATS_ENABLED,
  TOOLBOX_ALWAYS_VISIBLE,
} from '@jitsi/react-native-sdk/react/features/base/flags/constants';

LogBox.ignoreAllLogs();

export default function App() {
  const jitsiMeeting = useRef<any>(null);

  const room = 'TanyoApoSajoDisiko';

  const onReadyToClose = useCallback(() => {
    jitsiMeeting.current.close();
  }, []);

  const eventListeners = {
    onReadyToClose,
  };

  return (
    <View style={styles.flex1}>
      <JitsiMeeting
        eventListeners={eventListeners as any}
        ref={jitsiMeeting}
        style={styles.flex1}
        room={room}
        serverURL={'https://meet.jit.si/'}
        config={require('./config')}
        flags={{
          [SPEAKERSTATS_ENABLED]: true,
          [FULLSCREEN_ENABLED]: false,
          [ANDROID_SCREENSHARING_ENABLED]: true,
          [IOS_SCREENSHARING_ENABLED]: true,
          [CHAT_ENABLED]: true,
          [LOBBY_MODE_ENABLED]: false,
          [SETTINGS_ENABLED]: false,
          [TOOLBOX_ALWAYS_VISIBLE]: true,
          [ADD_PEOPLE_ENABLED]: false,
          [CAR_MODE_ENABLED]: false,
          [HELP_BUTTON_ENABLED]: false,
          [INVITE_ENABLED]: false,
          [PREJOIN_PAGE_ENABLED]: false,
        }}
        userInfo={{
          displayName: 'test-user',
          email: 'test@user.com',
          avatarURL: 'https://placehold.co/400',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});
