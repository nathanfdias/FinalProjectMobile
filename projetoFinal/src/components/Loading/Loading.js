import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'

export default function Loading({ isLoading }) {
  return (
    <Modal transparent visible={isLoading}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      />
      <ActivityIndicator
        style={styles.whiteOverlay}
        size={100}
        color={'blue'}
        animating={true}
      />
    </Modal>
  )
}
const styles = StyleSheet.create({
  whiteOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

