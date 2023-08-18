import React, {useCallback, useRef} from 'react';
import {StyleSheet, LogBox} from 'react-native';
import {JitsiMeeting} from '@jitsi/react-native-sdk/index';

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
    <JitsiMeeting
      eventListeners={eventListeners as any}
      ref={jitsiMeeting}
      style={styles.flex1}
      room={room}
      serverURL={'https://meet.jit.si/'}
      config={require('./config')}
      flags={{
        'call-integration.enabled': true,
        'fullscreen.enabled': false,
        'invite.enabled': true,
      }}
    />
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});
