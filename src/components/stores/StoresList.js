import React, { Component } from 'react';

export default class StoresList extends Component {
    componentDidMount() {
        console.log("componentDidMount -- StoresList")
    }

    render() {
        console.log("render -- StoresList")
        return (
            <article>
                <section>
                    <h2>Nashville North</h2>
                    <div>
                        1000 Infinity Way
                    </div>
                </section>
                <section>
                    <h2>Nashville South</h2>
                    <div>
                        555 Demonbreun Drive
                    </div>
                </section>
            </article>
        );
    }
}
