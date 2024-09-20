import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { id: Math.random().toString(), text: inputValue }]);
      setInputValue(''); // Clear the input field
    }
  };

  const renderMessage = ({ item }) => (
    <View 
    className='mb-10'
    style={styles.messageContainer}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
    <View 
       className='mb-10 absolute-left items-left justify-left'
       style={styles.container}>

        <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
      />
  

      <View 
         className='mb-10'
         style={styles.inputContainer}>
          <TextInput
              style={styles.input}
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Type a message..."
            />
                   
            <TouchableOpacity 
             onPress={sendMessage} 
             style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
       
      </View>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  messageList: {
    flex: 1,
  },
  messageContainer: {
    padding: 10,
    backgroundColor: '#e1ffc7',
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'flex-end'
  },
  messageText: {
    fontSize: 18,
  },
  inputContainer: {
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    borderRadius: 20,
    padding: 10,
  },
  sendButtonText: {
    color: '#fff',
  },
});

export default Chat;
