// Importamos librerias instaladas
import React from 'react'
import commentBox from 'commentbox.io';

import CircularProgress from '@mui/material/CircularProgress';

// Default export
class Comments extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }



  async componentDidMount() {
    commentBox('5650535369670656-proj');
  }


  render() {

    if(this.state.isLoading) {
      return ( <React.Fragment><CircularProgress /></React.Fragment> );
    }

    return (
      <React.Fragment>
        <div className="commentbox" style={{ minheight: '52rem' }}></div>
      </React.Fragment>
    );

  }

}

export default Comments;
