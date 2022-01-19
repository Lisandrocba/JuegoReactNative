import React from 'react';
import {
    FlatList,
    Text,
    View,
    Button,
  } from 'react-native';
  import {styles} from '../style';

const FlatListComponent = ({taskList, limpiar, deleteTask,cambiarColor}) =>{
    return(
        <View>    
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
        </View>
    )

    
      
}

export default FlatListComponent;


