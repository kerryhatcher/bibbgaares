import React, {Component} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
//import {createPost} from '../../graphql/mutations';
import {listPosts} from '../../graphql/queries';

const createPost = `mutation createPost($title:String! $content: String!) {
    createPost(input:{
      title:$title
      content:$content
    }){
      id
      title
      content
    }
  }`


class Cms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentID : props.match.params.id
        }
    };

    postMutation = async () => {
        const postDetails = {
        title: 'Party tonight!',
        content: 'Amplify CLI rocks!'
        };
        console.log(postDetails);
        const newPost = await API.graphql(graphqlOperation(createPost, postDetails));
        alert(JSON.stringify(newPost));
    }

    listQuery = async () => {
        console.log('listing posts');
        const allPosts = await API.graphql(graphqlOperation(listPosts));
        alert(JSON.stringify(allPosts));
    }
    

    render( match ){
        return(
            <div>
                <h1>Welcome to content!</h1>
                <h3>ID: {this.props.match.params.id}</h3>
                <button onClick={this.listQuery}>GraphQL Query</button>
                <button onClick={this.postMutation}>GraphQL Mutation</button>
            </div>
        )
    }

}

export default Cms;