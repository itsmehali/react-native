import React from 'react'
import {
  TouchableHighlight,
  Text,
  Platform,
  Button as DefaultButton,
} from 'react-native'

const Button = ({ title, ...rest }) => {
  if (Platform.OS == 'ios') {
    return <DefaultButton {...rest} title={title} />
  }
  return (
    <TouchableHighlight
      {...rest}
      underlayColor="#DDD"
      style={{
        borderWidth: 1,
        padding: 5,
        borderColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
      }}
    >
      <Text>{title}</Text>
    </TouchableHighlight>
  )
}

export default Button
