/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';


  const App = () =>{
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const onChange = (text) =>{
      setTask(text);
    }

    const addTask = () =>{
      setTaskList([...taskList, { id: Math.random(),estadoTares: false , task}]);
      setTask('');
    }

    const limpiar = () =>{
      setTaskList([]);
    }

    const deleteTask = (id) =>{
      setTaskList(taskList.filter(task=> task.id !== id));
    } 

    const cambiarColor = (prop) =>{
      prop.estadoTares = true;
    }

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.contenedorEncabezado}>

      <Text style={styles.titulo}>Lista de Tareas</Text>

      <View style={styles.conteinerText}>

        <TextInput 
        style={styles.textImput} 
        placeholder='Nombre tarea' 
        onChangeText={(text)=>onChange(text)}
        value={task}
        />

        <Button 
        title='send' 
        color='green' 
        onPress={()=>addTask()}
        disabled={task.trim().length === 0}
        />

      </View>
  
      </View>
      <SafeAreaView>

      {
      taskList.length > 0 ? 
      <View>
        <View style={styles.contenedorList}>
         
         <FlatList
         keyExtractor={(item)=> item.id.toString()}
         refreshing={true}
         data={taskList}
         renderItem={({item})=>
         <View key={`elemento ${item.id}`} style={styles.contenedorListaBoton}>
           
          <View style={ item.estadoTares ? styles.contenedorTaskGreen : styles.contenedorTask}>
            <Text style={styles.text}>{item.task}</Text>
          </View>
          
          {item.estadoTares ? null : <Button  color='green' title='✓' onPress={()=> cambiarColor(item)}/>}
          <Button  color='tomato' title='x' onPress={()=> deleteTask(item.id)}/>
        </View>
         }
         
         />
         
        
        </View>

        <Button color='tomato' title='Borrar lista' onPress={()=>limpiar()}/>
      </View>
      : <Text>No hay elementos en la lista</Text>
      }

      

      </SafeAreaView>
    
    </View>
  );
  }



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  titulo:{
    color:'black',
    fontSize:30,
    margin: 5,
    textAlign: 'center',
  },
  contenedorEncabezado:{
    backgroundColor:'#E4E4E4',
    width: '100%',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textImput:{
    width: 200,
  },
  conteinerText:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contenedorList:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorTask:{
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 'auto',
    borderRadius: 5,
    backgroundColor: '#E4E4E4',
    margin: 10,
  },
  contenedorTaskGreen:{
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 'auto',
    borderRadius: 5,
    backgroundColor: 'green',
    margin: 10,
  },
  text:{
    color: 'black',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  contenedorListaBoton:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
