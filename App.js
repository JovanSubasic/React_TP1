import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList , TextInput , TouchableHighlight ,Alert ,KeyboardAvoidingView ,Keyboard , ImageBackground} from 'react-native';
import React , {useState} from 'react';


export default function App() {

  // const image = { uri: "https://previews.123rf.com/images/vdat85/vdat851801/vdat85180100017/93756673-liste-de-papier-ic%C3%B4ne-avec-ombre-sur-fond-transparent-.jpg" };
  
  const [name, setName] = useState('');
  const [list, setList] = useState(sampleGoals);

  // function handleChange(event) {
  //   setName(event.target.value);
  //   alert(event.target.value);
  // }
  
  function listeAdd() {
    // if(list.indexOf(name) < 0)
    // {
      if (list.filter(item=> item.key == name).length == 0){
        const newList = list.concat({key: name});
    
        setList(newList);
      }
      else
      {
        alert("ligne déjà existante")
      }
      // // alert(name)
      // alert(list.key.includes(name))
    // }
    

  }

  function suppListe(key) {
    Alert.alert(
      "Voulez vous supprimer cette ligne ?",
      "",
      [
        { 
          text: "Oui", onPress: () => {

            const filteredData = list.filter(item => item.key !== key);
            setList(filteredData);
          } 
        },
        {
          text: "Annuler",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
        
      ]
    );
    // const filteredData = list.filter(item => item.key !== key);
    // setList(filteredData);
    // alert(key);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <Text >{"\n"}{"\n"}{"\n"}{"\n"}Open up <Text style={styles.text}>App.js </Text> start working on your app! </Text>
        <FlatList
          data={list}
          renderItem={({item}) => <Text style={styles.item}>{"\n"}- {item.key}
          
          <TouchableHighlight onPress={() => suppListe(item.key)}>
            <View style={styles.buttonSupp}>
              <Text>Supprimer</Text>
            </View>
          </TouchableHighlight></Text>}
        />
        
        
        <TextInput  id='inputAddListe' style={styles.input} onChangeText={(value) => setName(value)}  placeholder="Ajouter dans la liste"/>

        <KeyboardAvoidingView onPress={Keyboard.dismiss} behavior="padding">
          <TouchableHighlight onPress={listeAdd}>
            <View style={styles.button}>
              <Text>ADD</Text>
            </View>
          </TouchableHighlight>
        </KeyboardAvoidingView>
        
        <Text >{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  item: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "#DDDDDD",
    borderWidth: 2,
  },
  input: {
    borderWidth: 2,
  },
  buttonSupp: {
    color: '#fff',
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
    textAlign: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5,
    left:     5,
    top:      7,
  },

});

// let count = 0;

// const onPress = () => count + 1;

// let setName = "ddd";

// function onPress(event) {
//   setName = event.target.value;
//   // listeAdd(setName);
// }



// function listeAdd(setName) {
//   const newList = sampleGoals.concat({ setName });

//   sampleGoals = newList;
// }




	
const sampleGoals = [
 {key: "Faire les courses"},
 {key: "Aller à la salle de sport 3 fois par semaine"},
 {key: "Monter à plus de 5000m d altitude"},
 {key: "Acheter mon premier appartement"},
 {key: "Perdre 5 kgs"},
 {key: "Gagner en productivité"},
 {key: "Apprendre un nouveau langage"},
 {key: "Faire une mission en freelance"},
 {key: "Organiser un meetup autour de la tech"},
 {key: "Faire un triathlon"},
];
