import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import TaskItem from '../components/TaskItem';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </View>
  );
};

export default TasksScreen;
