import { StyleSheet, View } from 'react-native'
import { Skeleton } from '../Skeleton'

export function SkeletonCard () {
  return (
    <View style={styles.card}>
      <Skeleton height={120} width={120} style={{ borderRadius: 20 }} />
      <View>
        <Skeleton height={10} width={100} style={{ borderRadius: 8, marginTop: 15 }} />
        <Skeleton height={10} width={200} style={{ borderRadius: 8, marginTop: 15 }} />
        <Skeleton height={10} width={200} style={{ borderRadius: 8, marginTop: 15 }} />
        <Skeleton height={10} width={180} style={{ borderRadius: 8, marginTop: 15 }} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 8,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10
  }
})
