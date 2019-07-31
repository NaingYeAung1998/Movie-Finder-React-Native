import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { getData } from '../components/fetch';
import Card from '../components/card'
import Swipeout from 'react-native-swipeout'


class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    async componentDidMount() {
        var ids = [479455, 429617];
        ids.map(async (id, index) => {
            var movie = await getData('https://api.themoviedb.org/3/movie/' + id + '?api_key=0abfbacccab75c3fa34d12ca16862c09');
            this.state.movies.push(movie);
            this.setState({ movies: this.state.movies });
        })

    }


    render() {
        var swipeoutBtns = [
            {
                text: 'Remove',
                backgroundColor: 'red'
            }
        ]
        return (
            <ScrollView style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent:'center' }}>
                    {/* <Image source={require('../assets/images/heart.png')} style={{ width: 30, height: 30 }}></Image> */}
                    <Text style={{ fontSize: 18, color: '#2793E1', fontWeight:'bold', textAlign:'center' }}>Movies Collection</Text>
                </View>

                <View style={{ height: 10 }}></View>
                {
                    this.state.movies.map((movie, index) =>
                        <View key={index}>
                            <Swipeout right={swipeoutBtns}>
                                <Card iconFlex={1} width='90%' textFlex={2} img={{ uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{movie.title}</Text>
                                    <Text style={{ fontSize: 13 }}>{movie.overview.slice(0, 100)}</Text>
                                </Card>
                            </Swipeout>
                            <View style={{ height: 0.5, backgroundColor: '#b9bdc5' }}></View>
                            <View style={{ height: 10 }}></View>
                        </View>
                    )
                }
            </ScrollView>

        );
    }
}

export default Favorite;
