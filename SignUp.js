import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
    <Image source = {require('assets/Rectangle122.svg')} style={styles.flag} width={100} height={102} />);
      <View style={styles.borderContainer}>
        <Text style={styles.text}>BHARAT VIDHI</Text>
        <Text style={styles.signUp}>SIGN UP</Text>;
        <View style={styles.rectangleView}> 
        <Text style={styles.fieldText}>Email-id</Text></View>
        <View style={styles.rectangleView}> 
        <Text style={styles.fieldText}>Name</Text></View>
        <View style={styles.rectangleView}> 
        <Text style={styles.fieldText}>Password</Text></View>
        <View style={styles.rectangleView}> 
        <Text style={styles.fieldText}>Confirm Password</Text></View>
        <View style={styles.rectangleIcon} />;
        <View style={styles.proceedBox}><Text style={styles.proceedText}>PROCEED</Text></View>
        <View style={styles.google}><Text style={styles.googleText}>Sign Up using Google</Text></View>
        <Text>{`Already have a account? `}
          <Text style={styles.logIn}>{`Log in! `}</Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  borderContainer : {
    flex: 1,
    width: '90%',
    borderWidth: 5,
    borderColor: '#FFDCB9',
    borderRadius: 10,
    padding: 20,
    marginTop : "10%",
    marginBottom: "5%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 45,
    paddingTop : "20%",
    display: "flex",
    width: 200,
    fontWeight: "bold",
    color: '#232ED1',
    textAlign: "center",
    lineHeight: 50,
    textAlignVertical: "center",
    fontFamily: "monospace",
  },
  signUp: {
    fontSize: 24,
    lineHeight: 70,
    fontFamily: "itim",
    color: "#a596ff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 122, 
    paddingTop: "8%"
  },
  rectangleView: {
    borderRadius: 15,
    backgroundColor: "#ffeedd",
    width: "90%",
    height: "8%",
    opacity: 0.5,
    paddingTop: 20,
    marginBottom: 20
  },
  fieldText: {
    fontSize: 15,
    color: "#000",
    textAlign: "left",
    paddingLeft: 20,
    paddingBottom: 5,
    display: "flex",
    alignItems: "center",
    opacity: 0.5
  },
  proceedBox : {
    height: "5%", 
    width: "30%",
    backgroundColor: "#B8B8FF",
    marginTop: "3%",
    opacity: 0.5,
    borderRadius: 10,
    borderColor: "#B8B8FF",
    borderWidth: 2,
  },
  proceedText : {
    textAlign: "center",
    color: "#232ED1",
    paddingTop: "8%",
    fontWeight: "bold"
  },
  google : {
    backgroundColor: "rgba(189, 184, 179, 0.25)",
    width: "60%",
    height: "4.5%",
    marginTop: "5%",
    opacity: 0.5,
    borderWidth: 1,
    borderRadius: 5
  },
  googleText : {
    textAlign: "center",
    paddingTop: "3%",
    paddingRight: "5%",
  },
  logIn : {
    textDecorationLine : "underline"
  },
  flag : {
    opacity : 0.1,
    flex : 1  
  }
});
export default App;
