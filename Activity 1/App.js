
import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, setName] = useState('Name : ');
  const [age, setAge] = useState('Age : ');
  const [address, setAddress] = useState('Address: ');
  const [school, setSchool] = useState('School: ');
  const [course, setCourse] = useState('Course: ');
  const [email, setEmail] = useState('Email: ');
  const [contact, setContact] = useState('Contact: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
};



const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;