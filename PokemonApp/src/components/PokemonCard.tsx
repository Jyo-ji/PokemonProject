import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/PokemonInterface';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors'

const windowWidth=Dimensions.get('window').width

interface Props{
    pokemon:SimplePokemon;
}

export const PokemonCard = ({pokemon}:Props) => {

    const [bgColor, setbgColor] = useState('#32a4a7')
    const [bgShadow, setbgShadow] = useState('#000')

    useEffect(() => {
        ImageColors.getColors(pokemon.picture,{fallback:'#32a4a7'})
            .then(colors=>{
                if(colors.platform==='android'){
                    setbgColor(colors.dominant||'#32a4a7')
                    setbgShadow(colors.dominant||'#32a4a7')
                }else{
                    setbgColor(colors.background||'#32a4a7')
                    setbgShadow(colors.background||'#32a4a7')
                }
                    
                
            })

        //IOS

        //ANDROID

    }, [])

    return (
        <TouchableOpacity
            activeOpacity ={0.7}
        >
            <View style={{
                ...style.cardContainer,
                width:windowWidth*0.4,
                backgroundColor:bgColor,
                shadowColor:bgShadow,
            }}>
                
                <View>
                    <Text style ={style.name}>
                        {pokemon.name}
                        {'\n#'+pokemon.id}
                    </Text>
                </View>

                <View style ={style.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={style.pokebola}
                    />
                </View>   
                <FadeInImage
                    uri={pokemon.picture}
                    style={style.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    cardContainer:{
        marginHorizontal:10,               
        height:120,
        width:160,
        marginBottom:25,
        borderRadius:10,        
        shadowOffset: {
            width: 2,
            height: 6,
        },
        shadowOpacity: 0.9,
        shadowRadius: 7,        
        elevation: 15,
    },    
    name:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        top:5,
        left:10,  
        shadowColor: "#000",  
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.52,
        shadowRadius: 6.80,    
    },
    pokebola:{
        width:100,
        height:100,
        position:'absolute',
        right:-20,
        bottom:-20,
    },
    pokemonImage:{
        width:110,
        height:110,
        position:'absolute',
        right:-8,
        bottom:-6,  
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
    },    
    pokebolaContainer:{
        width:100,
        height:100,
        position:'absolute',
        bottom:0,
        right:0,
        opacity:0.5,        
        overflow:'hidden'
    }
})
