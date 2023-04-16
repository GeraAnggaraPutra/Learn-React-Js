import { PureComponent } from "react";
import axios from "axios";
// import qs from "querystring"
import { Container, Table} from 'react-bootstrap'

const api = "https://api.themoviedb.org/3/movie/popular?api_key=66e78313a3a286ab74ed12ef87f7085e";
class ListComp extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            movie: [],
            response: "",
            dispaly: 'none'
        }
    }

    componentDidMount() {
        axios.get(api).then(res => {
            this.setState({
                movie: res.data.results
            })
        })
    }
    
    render() {
        return (
            <Container>
                <h2>Get Data Movie From API</h2>
                <hr />
                <Table striped>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Popularity</th>
                        <th>Overview</th>
                        <th>Poster</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movie.map(movie =>
                            <tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.release_date}</td>
                                <td>{movie.popularity}</td>
                                <td>{movie.overview}</td>
                                <td><img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="" height={200} width150 /></td>
                            </tr>
                        )}
                        </tbody>
                </Table>
            </Container>
        )
    }
}

export default ListComp