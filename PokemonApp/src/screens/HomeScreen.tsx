import React from 'react'
import { Image, Text, View,FlatList, ActivityIndicator, StatusBarIOS, StatusBar } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginate } from '../hooks/usePokemonPaginate';
import { styles } from '../theme/appTheme';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {
    
    const {top} = useSafeAreaInsets();
    const {simplePokemon,isLoading,loadPokemons}=usePokemonPaginate();

    return (
        <>
            <StatusBar
                backgroundColor='dark'
                barStyle='light-content'

            />  
            <Image
                source={require('../assets/pokebola-blanca.png')}
                style={styles.pokebolaBackGround}
            />
            <View style={{alignItems:'center'}}>
                <FlatList
                    data = {simplePokemon}
                    keyExtractor={(pokemon)=>pokemon.id}
                    
                    numColumns={2}
                    renderItem={({item})=>(
                        <PokemonCard
                            pokemon={item}
                        />                    
                    )}

                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={(
                        <ActivityIndicator
                            style={{height:100}}
                            size={20}
                            color='#32a4a7'
                        />
                    )}

                    ListHeaderComponent={(
                        <Text style ={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top:top+20,
                            marginBottom:top+20,
                            paddingBottom:10,
                            color:'white',
                            shadowColor: "#d5d9e0",  
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.52,
                            shadowRadius: 6.80, 
                        }}>POKEDEX</Text>
                    )}
                />
            </View>    
        </>
    )
}
