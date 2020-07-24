import React from 'react';
import { StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar } from 'react-native';
import { useState } from 'react';
import storybook from './storybook'

const IS_STORYBOOK = true;

const generateRandomSkills = (n: number): SkillProps[] => {
  return [...new Array(n)].map((it, i) => ({
    title: 'typscript' + i,
    logo: '🔍',
    hours: 500
  }))
}

interface SkillProps {
  title: string;
  logo: string;
  hours: number;
}

const Skill: React.FC <SkillProps> = ({title, logo, hours}) => {
  console.log(title);
  const [totalHoursSpent, setTotalHoursSpent] = useState<number>(hours);
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{logo}</Text>
      <Text style={styles.text}>{totalHoursSpent}</Text>
      <TouchableOpacity onPress={() => setTotalHoursSpent(totalHoursSpent + 1)}>
        <Text style={addHour.text}>Add hour</Text>
      </TouchableOpacity>
    </View>
  )
}

const addHour = StyleSheet.create({
  text: {
    fontSize: 42,
    color: 'red',
    fontWeight: 'bold'
  }

})

function App() {
  
  const skills = generateRandomSkills(99999);

  return (
    <FlatList<SkillProps>
      data={skills}
      renderItem={({item}) => <Skill title={item.title} logo={item.logo} hours={item.hours} />}
      ListHeaderComponent={<Text style={[styles.container]}>My skills</Text>}
      keyExtractor={item => item.title}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 42
  },
  text: {
    fontSize: 42,
  },
  scrollView: {
    backgroundColor: '#08FFDA',
    marginHorizontal: 10,
  }
});
export default (IS_STORYBOOK ? storybook : App)