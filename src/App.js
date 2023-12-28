import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css"
import { withAuthenticator, Button, Heading, Image, 
View, Card } from '@aws-amplify/ui-react';


function App({ signOut}) {
  return (
    <View className="App">

      <Card>
        <Image src={logo} alt="logo"  className="App-logo"/>
        <Heading level={1}>voila maintannt vous avez l'auth</Heading>

      </Card>
      <Button onClick={signOut}>se deconnecter</Button>
    </View>
  );
}

export default withAuthenticator(App);
