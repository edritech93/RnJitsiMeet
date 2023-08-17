import React, {useCallback, useRef} from 'react';

import {JitsiMeeting} from '@jitsi/react-native-sdk/index';
import {StyleSheet} from 'react-native';

export default function App() {
  const jitsiMeeting = useRef<any>(null);

  const room = '123qwe';

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
    />
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});
