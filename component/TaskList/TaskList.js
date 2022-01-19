import React, { useState } from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    SafeAreaView,
  } from 'react-native';

import {styles} from './style';
import FlatListComponent from './components/FlatListComponent'


const TaskList = () =>{
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
            <FlatListComponent limpiar={limpiar} deleteTask={deleteTask} cambiarColor={cambiarColor} taskList={taskList} />
        </SafeAreaView>
    
    </View>
  );
  }





export default TaskList;
