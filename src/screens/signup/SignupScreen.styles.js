import { StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'relative',
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  errorText: {
    color: 'red',
    marginBottom: 8
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  tittleRegister: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center'
  },
  passwordToggle: {
    marginLeft: 8
  },
  passwordToggleText: {
    color: 'blue',
    position: 'relative'
  },

  switchText: {
    marginVertical: 10
  },
  switchLink: {
    color: 'blue',
    textDecorationLine: 'none'
  },
  toggleIcon: {
    position: 'relative',
    top: -41,
    left: 250

  }
})
