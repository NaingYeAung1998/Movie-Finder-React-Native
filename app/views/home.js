import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Card from '../components/card'
import { getData } from '../components/fetch';
import { TextInput } from 'react-native-gesture-handler';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            searchedMovies : []
        };
    }

    async componentDidMount() {
        var ths = this;
        var result = await getData('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0abfbacccab75c3fa34d12ca16862c09')
        this.setState({ movies: result.results });
        this.setState({searchedMovies:result.results});
    }

    search(){
        var searchText = document.getElementById('search-text').value;
        var results = this.state.movies.filter(x=>x.title.includes(searchText));
        this.setState({searchedMovies:JSON.parse(JSON.stringify(results))});
    }

    render() {
        return (
            <View>
                <View style={{padding:10,flexDirection:'row'}}>
                    <TextInput id='search-text' placeholder='Search Movies' style={{width:'85%',borderColor:'#b9bdc5',borderWidth:0.8,borderRadius:5,borderTopRightRadius:0,borderBottomRightRadius:0,height:40}}></TextInput>
                    <TouchableOpacity style={{width:'15%'}}>
                        <View style={{backgroundColor:'#2793E1',height:40,justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../assets/images/search.png')} style={{height:25,width:25}}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ padding: 10 }}>
                    {
                        this.state.movies.map((movie, index) =>
                            <View key={index}>
                                <TouchableOpacity onPress={()=>(this.props.navigation.navigate('Detail', {movieid:movie.id}))}>
                                    <View style={{ height: 200 }}>
                                        <Image source={{ uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path }} style={{ width: '100%', height: '100%' }}></Image>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{movie.title}</Text>
                                <Text style={{ fontSize: 13 }}>{movie.overview.slice(0, 50)}...</Text>
                                <View style={{ height: 10 }}></View>
                                <View style={{ height: 0.5, backgroundColor: '#b9bdc5' }}></View>
                                <View></View>
                                <View style={{ height: 10 }}></View>
                            </View>)
                    }

                </ScrollView>
            </View>
        );
    }
}

export default Home;
