import { Platform } from "react-native"

const theme = {
  colors: {
    textPrimary: '#24292e',
    textsecundary: '#EEE',
    primary: '#2193b0',
    white: '#FEFEFE',
    gray: "#494949",
    blue: "#156DF1"
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading2: 24,
    heading: 40
  },
  fonts: {
    main: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System"
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  },
  textInput: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10
  },
  textInputError: {
    borderColor: 'red'
  },
  inputAddTask: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
    backgroundColor: "#2193B0",
    color: 'white',
  },
  form: {
    marginTop: 140,
    marginHorizontal: 40
  },
  inputValueError: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  },
  buttonPrimary: {
    elevation: 8,
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 15,
    marginHorizontal: 60,
    backgroundColor: "#2193b0"
  },
  gradientColors: {
    colors: {
      firstColor: '#2193b0',
      secondColor: '#6dd5ed'
    }
  },
  profile: {
    marginLeft: 12,
    width: 36,
    height: 36,
    flexDirection: "column",
    justifyContent: 'center',
    borderRadius: '50%'
  }
}

export default theme