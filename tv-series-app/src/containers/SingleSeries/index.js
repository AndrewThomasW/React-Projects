import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embeded=episodes`)
            .then(response => response.json())
            .then(json => this.setState({ show: json }))
    }

    render() {
        const { show } = this.state;
        console.log(show);
        return (
            <div>
                {
                    show === null && <Loader />
                }
                {
                    show !== null
                    &&
                    <div>
                        <p>Show Name : {show.name}</p>
                        <p>Premiered : {show.network.name}</p>
                        <p>Premiered : {show.premiered}</p>
                        <p>
                            <img src={show.image.original} alt="image" />
                        </p>
                        <p><strong>Summary</strong></p>
                        <div dangerouslySetInnerHTML={{ __html: show.summary }} />

                    </div>

                }
            </div>
        );
    }
}

export default SingleSeries;
