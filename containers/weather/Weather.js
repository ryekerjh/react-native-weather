import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { fetchWeather } from '../actions/weatherActions';

const mapStateToProps = (state) => ({
  weather: state
});

const mapActionsToProps = (dispatch) => ({
 
});

class _Weather extends Component {
  static defaultProps = {
    weather: []
  }
  componentDidMount() {
    fetchWeather();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.weather.map((w, i) => 
          <View key={i}>
            <Text style={styles.list}>{w}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    borderBottomWidth: 2
  },
  topbarText: {
    color: '#AB88E7',
    fontSize: 26
  },
  currentWorkout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const Weather = connect(mapStateToProps, mapActionsToProps)(_Weather);