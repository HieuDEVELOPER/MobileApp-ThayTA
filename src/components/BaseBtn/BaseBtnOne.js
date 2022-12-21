

import {Text, TouchableOpacity} from 'react-native';

export default (props: TouchableOpacity) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        width: 100,
        backgroundColor: props.disabled ? '#ffffff' : '#0096FF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        height: 40
      }}>
      <Text style={{fontSize: 16, color: "#ffffff"}}>Confirm</Text>
    </TouchableOpacity>
  );
};
