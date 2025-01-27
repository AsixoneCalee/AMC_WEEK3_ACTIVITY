
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [school, setSchool] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [about, setAbout] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Enter Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setAge}
            value={age}
            placeholder="Enter Age"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setAddress}
            value={address}
            placeholder="Enter Address"
          />
          <TextInput
            style={styles.input}
            onChangeText={setSchool}
            value={school}
            placeholder="Enter School"
          />
          <TextInput
            style={styles.input}
            onChangeText={setCourse}
            value={course}
            placeholder="Enter Course"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={setContact}
            value={contact}
            placeholder="Enter Contact"
            keyboardType="phone-pad"
          />
        </View>

        <TextInput
          style={styles.aboutInput}
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={setAbout}
          value={about}
          placeholder="About Me"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  aboutInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    minHeight: 100,
  },
});

export default TextInputExample;
