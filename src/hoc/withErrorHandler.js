import React, { Component } from 'react';
import Modal from '../components/Ui/Modal/Modal';
import Mox from './mox';




const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req;
            })
            axios.interceptors.response.use(res => res, error => {
                console.log('------------error----------');
                console.log({...error});
                console.log('------------error----------');
                this.setState({ error })
            })
        }
        cancelErrorHandler = () => {
            this.setState({ error: null })
        }
        render() {
            return (
                <Mox>
                    <Modal
                        cancelOrder={this.cancelErrorHandler}
                        modalShow={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Mox>
            )
        }
    }
}


export default withErrorHandler;