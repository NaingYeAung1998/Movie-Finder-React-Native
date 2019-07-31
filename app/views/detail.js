import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { getData } from '../components/fetch';
import { styles } from '../components/styles';

class Detail extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      movie_id: navigation.getParam('movieid'),
      movie: {}
    };
  }

  async componentDidMount() {
    var movie = await getData('https://api.themoviedb.org/3/movie/' + this.state.movie_id + '?api_key=0abfbacccab75c3fa34d12ca16862c09');
    this.setState({ movie: movie });
  }

  render() {
    const movie = this.state.movie;
    return (
      <>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: 'https://image.tmdb.org/t/p/w500' + this.state.movie.poster_path }} style={{ width: '100%', height: '100%' }}></Image>
        </View>
        <View style={{ flex: 1, padding: 10, paddingBottom: 0 }}>
          <View style={{ marginTop: -100 }}>
            <View style={[styles.cardStyle, { flexDirection: 'column', height: '100%' }]}>
              <View style={{ flex: 6 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{movie.title}</Text>
                <View style={{ height: 10 }}></View>
                <Text style={{ fontSize: 15 }}>{movie.overview}</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>IMDB Rating : {movie.vote_average}/10</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Language : {movie.original_language}</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Budget : ${movie.budget}</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Release Date : {movie.release_date}</Text>
              </View>

              <View style={{ flex: 1, justifyContent:'flex-end' }}>
                <TouchableOpacity onPress={()=>alert("Added To Collection")}>
                  <View style={[styles.btnSubmit, { alignContent: 'center', width: '100%' }]}>
                    <Text style={{ fontSize: 15, color: 'white' }}>Add To Favorite</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </>
    );
  }
}

export default Detail;
