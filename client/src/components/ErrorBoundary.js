import React, { Component } from 'react'
import { LostPage } from '404-page'
import '404-page/dist/index.css'

export class ErrorBoundary extends Component {

    constructor(props){
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if(this.state.hasError) {
            return <LostPage />
        }
        return this.props.children;
    }
}

export default ErrorBoundary
