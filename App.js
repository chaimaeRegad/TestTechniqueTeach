/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


//  page d'acceuil Teach'rs favoris



import React, { Component } from 'react';
import {
  StyleSheet,
  View,
   Dimensions
} from 'react-native';


import Carousel  from 'react-native-snap-carousel';

import {Card,Row,Col,Grid, CardItem, Thumbnail,Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

/* prend les dimensions de l'ecran */

const { width: screenWidth } = Dimensions.get('window')
const screenHeight = Math.round(Dimensions.get('window').height);


type props = {};
type state = { teachrs:any};


export default class App extends Component<props,state> {

/* Appel du constructeur pour initialiser le state 
avec la valeurs des differents items */
  
  constructor(props : any) {
super(props)
this.state = {
  teachrs:[
{formation:"gvh", thumbnail:'https://especes-animales-mondiales.e-monsite.com/medias/images/2011-01-25-chat.jpg', Description:"kjbkjbed kjjnfkjee kjbkjfboq kibfek"},
{formation:"ghgfvh", thumbnail:'https://especes-animales-mondiales.e-monsite.com/medias/images/2011-01-25-chat.jpg',Description:"kjbkjbed kjjnfkjee kjbkjfboq kibfek"},
{formation:"ghgfvh", thumbnail:'https://especes-animales-mondiales.e-monsite.com/medias/images/2011-01-25-chat.jpg',Description:"kjbkjbed kjjnfkjee kjbkjfboq kibfek"},
{formation:"gvh", thumbnail:'https://especes-animales-mondiales.e-monsite.com/medias/images/2011-01-25-chat.jpg', Description:"kjbkjbed kjjnfkjee kjbkjfboq kibfek"},
{formation:"ghgfvh", thumbnail:'https://especes-animales-mondiales.e-monsite.com/medias/images/2011-01-25-chat.jpg',Description:"kjbkjbed kjjnfkjee kjbkjfboq kibfek"},
{formation:"gvh", thumbnail:'https://especes-animales-mondiales.e-monsite.com/medias/images/2011-01-25-chat.jpg', Description:"kjbkjbed kjjnfkjee kjbkjfboq kibfek"},
{formation:"ghgfvh", thumbnail:'https://especes-animales-mondiales.e-monsite.com/medias/images/2011-01-25-chat.jpg',Description:"kjbkjbed kjjnfkjee kjbkjfboq kibfek"},
{formation:"gvh", thumbnail:'https://especes-animales-mondiales.e-monsite.com/medias/images/2011-01-25-chat.jpg', Description:"kjbkjbed kjjnfkjee kjbkjfboq kibfek"},
{formation:"ghgfvh", thumbnail:'https://especes-animales-mondiales.e-monsite.com/medias/images/2011-01-25-chat.jpg',Description:"kjbkjbed kjjnfkjee kjbkjfboq kibfek"},
{formation:"gvh", thumbnail:'https://especes-animales-mondiales.e-monsite.com/medias/images/2011-01-25-chat.jpg', Description:"kjbkjbed kjjnfkjee kjbkjfboq kibfek"},
{formation:"ghgfvh", thumbnail:'https://especes-animales-mondiales.e-monsite.com/medias/images/2011-01-25-chat.jpg',Description:"kjbkjbed kjjnfkjee kjbkjfboq kibfek"},

  ]
}



  }

/* methode qui renvoie au carousel les differents items(teach'rs favoris) a afficher sous forme de Card */

   _renderItem ({item, index}) {
        return (
              <View  style={styles.itemView}> 
                    <Card style={styles.card} >
                     
                        <CardItem  style={styles.carditem1}>
                       
                        <Left style={styles.flex1}>
                            <Thumbnail source={{ uri: item.thumbnail }} />
                               <Body style={{flex:4}} >
                            <Text>Piere du parc du Lmkhomariann</Text>
                            
                              </Body> 
                                
                       </Left>
                            
                        </CardItem>
                      
                       
                        <CardItem cardBody style={styles.carditem}>
                    
                           <Body style={{flex:2}}>
                               <Text note>Formation :</Text>
                                <Text>{ item.formation }</Text>
                            </Body>
                           
                               <Body style={styles.flex3}>
                                <Text note>Description :</Text>
                                <Text>{ item.Description }</Text>
                              </Body>
         

    {/* creation d'une gride pour aligner en colone les boutons */}

                    <Grid style={styles.flex3} >
  <Col>
  <Row> 
    <Col>
      <Button block full style={styles.buttonBorder} info>
    <Text style={styles.textCenter}   uppercase={false}>Prendre un cours avec ce Teach'r</Text>
      </Button>
    
</Col>
</Row> 
<Row>  
<Col>   
     
      <Button block full style={styles.buttonBorder} bordered danger>
    <Text style={styles.textCenter} uppercase={false}>Retirer ce Teach'r de mes Favoris</Text>
      </Button>
  
    </Col>  
    </Row> 
    </Col> 
          </Grid>
        
                        </CardItem>
 
           </Card>
     </View>      
        );
    }

    render () {
        return (
 <View style={styles.flex1}>
 <Container>
        <Content> 
      
    <Header span  style={{ backgroundColor: '#1a73e8' }}
          androidStatusBarColor="#1a73e8">
          <Left >
            <Button transparent>
              <Icon style={{fontSize: 35}} name="ios-arrow-back" />
            </Button>
          </Left>
      
          <Body>
            <Title style={{fontSize: 23}}>Teach'rs favoris</Title>
         
          </Body>

          <Right />
       
        </Header>
        
     {/* composant Carousel allant appeler la methode _renderItem
      affin s'afficher les differents items (teach'rs favoris) */}

         <Carousel
              data={this.state.teachrs}
              renderItem={this._renderItem}
               sliderWidth={screenWidth}
              sliderHeight={screenHeight}
                itemWidth={screenWidth - 90}

            />
         </Content> 
            
 </Container>


   </View>

        );
    }

 


 
}

const styles = StyleSheet.create({
  flex1: {
flex:1
  },
  carditem1: {
flex:1,
padding:10
  },
  itemView:{
flex:1,
justifyContent:'center', 
height:screenHeight-156
  },
  card:{
shadowColor: "black",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,height: screenHeight-300
  },
  carditem:{
padding: 20,
flex:4,
flexDirection:'column',
justifyContent:'center'
  },
  buttonBorder:{
borderRadius:7
  },
  textCenter:{
    textAlign: 'center'
  },
  flex3:{
       flex:3
  }
})

