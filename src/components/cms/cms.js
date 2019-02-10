import React, {Component} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import {createPost} from '../../graphql/mutations';
import {listPosts, getPost} from '../../graphql/queries';


class Cms extends Component {
    constructor(props) {
        super(props);
        this.listQuery();
        this.getQuery('c2bfd668-5869-47e1-ac2d-2d78f1a6439c');
        this.state = {
            contentID : props.match.params.id
        }
    };

    postMutation = async () => {
        const postDetails = {
            input: {
                title: 'new post',
                content: 'Amplify CLI rocks!'
            }
        };
        console.log(postDetails);
        const newPost = await API.graphql(graphqlOperation(createPost, postDetails));
        console.log(JSON.stringify(newPost));
    }

    listQuery = async () => {
        console.log('listing posts');
        this.state.postList = await API.graphql(graphqlOperation(listPosts));
        console.log(JSON.stringify(this.state.postList));
    }

    getQuery = async (postID) => {
        this.state.postData = await API.graphql(graphqlOperation(getPost, postID))
    }
    

    render( match ){
        return(
            <div>
                <h1>Welcome to content!</h1>
                <h3>ID: {this.props.match.params.id}</h3>
                <button onClick={this.listQuery}>GraphQL Query</button>
                <button onClick={this.postMutation}>GraphQL Mutation</button>
                <p>{this.state.postData}</p>
            </div>
        )
    }

}

export default Cms;