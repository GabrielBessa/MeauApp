import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { Api } from '../../backend/firebase/api';
import DogCard from '../components/DogCard';
import PetDetail from './petDetail';


const Stack = createStackNavigator();

export default function PetAdoption({ navigation }) {
  const [list, setList] = useState([])

  useEffect(() => {
    Api.Database.Pet.listAdoption().then(res => setList(res.map(doc => [doc.data(), doc])))
  }, [])

  const ButtonBox = styled.View`
    width: 100%;
    padding: 5%;
    justify-content: space-between;
    flex-direction: row;
  `;

  const Title = styled.Text`
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0px;
  `;

  const styles = StyleSheet.create({
    container: {
      margin: 10,
      backgroundColor: '#fafafa',
    },
  });

  function petDetail(detail) {
    navigation.navigate(PetDetail.name, { detail })
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#f7a800" />
      <View>
        {
          list?.map(([item, doc]) => <DogCard value={item} onPress={() => petDetail(doc)} />)
        }
      </View>
    </ScrollView>
  );
}
