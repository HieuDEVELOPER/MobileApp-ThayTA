import React, {useState} from 'react';
import {Alert, Modal, Pressable, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
export default (props: TouchableOpacity) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bạn có muốn xóa người này!</Text>
            <Pressable
              style={[styles.button, styles.buttonCancel]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyleCancel}>cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonOk]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text  style={styles.textStyleOk}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        {...props}
        style={{
          width: 100,
          backgroundColor:'#B2B2B2',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10,
          height: 40,
          marginLeft: 20,
          marginTop: 10,
          
          
        }}>
        <Text
          style={{fontSize: 16, color: '#fff', fontWeight: '700'}}
          onPress={() => setModalVisible(true)}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#00000099'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {

    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 40,
    width: 100,
    
    
  },
  buttonCancel: {
    backgroundColor: "#2196F3",
  },
  buttonOk: {
    backgroundColor: "#DC0000",
  },
  textStyleCancel: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textStyleOk: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

