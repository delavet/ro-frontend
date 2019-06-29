import React, {Component} from 'react';
import {
    Col,
    Row,
    Input,
    Divider,
    Tooltip,
    Select,
    PageHeader
} from 'antd';
const {Search} = Input;
const divStyle = {
    margin: 10
}
const {Option} = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

class MySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            tag: ''
        }
        this.handleEnter = this
            .handleEnter
            .bind(this);
        this.searchButton = this
            .searchButton
            .bind(this);

    }

    updateQuery(query, tag) {
        this.setState({query: query.trim(), tag: tag.trim()})

    }

    handleEnter(event) {
        if (event.charCode === 13) {
            this
                .props
                .onMessage(this.state.query, this.state.tag);
            console.log(event.charCode);
        }
    }

    searchButton(event) {
        this
            .props
            .onMessage(this.state.query, this.state.tag);
    }

    render() {
        let {items} = this.props;
        if (items) 
            console.log("items:" + items)
        let screen;
        if (items) {
            screen = (
                <ol className='contact-list'>
                    {
                        items
                            .data
                            .map(
                                (item, index) => <li key={index} className='contact-list-item'>
                                    <div className='contact-details'>
                                        <p>
                                            <code>
                                                <pre>{item.code}</pre>
                                            </code>
                                        </p>
                                        <a href={"https://stackoverflow.com/questions/" + item.id}>reach the original post</a>
                                        <p>{item.id}</p>

                                    </div>
                                </li>
                            )
                    }
                </ol>
            )
        } else {
            screen = (
                <div
                    style={{
                        padding: "10px"
                    }}
                    className='null'>
                    <Tooltip title="No to show">
                        <span>No recommanded code to show</span>
                    </Tooltip>
                </div>
            )
        }

        return (
            <div className="list-contacts">
                <Row >
                    <Col span={24}>
                        <Search
                            placeholder="Input  Your Question Here"
                            onSearch={this.searchButton}
                            onKeyPress={(event) => {
                                this.handleEnter(event)
                            }}
                            onChange={(event) => {
                                this.updateQuery(event.target.value, this.state.tag)
                            }}
                            enterButton/>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Select
                            placeholder="language"
                            style={{margin:10, width:100}}
                            onChange={handleChange}>
                            <Option value="SQL">SQL</Option>
                            <Option value="Python">Python</Option>
                        </Select>
                    </Col>
                    <Col span={8}>
                        <div style={divStyle}>
                            <Input
                                onKeyPress={(event) => {
                                    this.handleEnter(event)
                                }}
                                placeholder='Tag Here'
                                onChange={(event) => {
                                    this.updateQuery(this.state.query, event.target.value)
                                }}/>
                        </div>
                    </Col>
                </Row>
                <Divider style={{margin:10}}/>
                <Row>{screen}</Row>

            </div>
        )
    }

}

export default MySearch