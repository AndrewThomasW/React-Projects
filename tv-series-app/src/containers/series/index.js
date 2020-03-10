import React, { Component } from 'react';
import SeriesList from '../../components/seriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component {
    constructor(props){
        super(props);
        this.buttonHandler = this.buttonHandler.bind(this);
       }

    state = {
        series: [],
        seriesName:"",
        isFetching:false
    }

    componentDidMount() {

    }

    buttonHandler(){
        console.log(this.movieName.value);
        fetch(`https://api.tvmaze.com/search/shows?q=v${this.movieName.value}`)
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            this.setState({ series: json });
        });
    }


    onSeriesInputChange =  (e) => {
        this.setState({seriesName:e.target.value,isFetching:true})
        fetch(`https://api.tvmaze.com/search/shows?q=v${e.target.value}`)
        .then(response => response.json())
        .then(json => {
            this.setState({ series: json, isFetching:false });
        });
    }


    //onChange= {this.onSeriesInputChange}
    render() {
        const {series,seriesName,isFetching} = this.state;
        return (
            
            <div>
                <Intro message="my passed in parameter" />
                <input ref={(ref) => {this.movieName = ref}} value = {seriesName} type = "text" onChange = {this.onSeriesInputChange}></input>
                <button onClick = {this.buttonHandler}>Search movie</button><br/>
                

                {
                   !isFetching && series.length === 0 && seriesName.trim() === ""
                    &&
                    <p>Please enter series to search</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== "" 
                    &&
                    <p>No series with that name </p>
                }
                {
                    isFetching && <Loader /> 
                }
                {
                    !isFetching
                    &&
                    <SeriesList list={this.state.series} />
                }

            </div>
        );
    }
}

export default Series;