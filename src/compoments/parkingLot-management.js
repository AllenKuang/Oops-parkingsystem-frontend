import React, { Component } from 'react';
import { Table, Icon, Divider, Button, Menu, Dropdown, message, Input, Row, Col, Select, Popconfirm } from 'antd'
import Edit from "./common/editComponent"

const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;

class ParkingLotMangement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowEditForm: false,
            isShowModifyForm: false,
            dataFormat: {},
            modifyId: 0,
            searchType: "name",
        }
    }

    setSearchType = (e) => {
        console.log(e)
        this.setState({
            searchType: e,
        })
    }

    componentWillMount() {
        this.props.onGetAllParkingLots();
    }
    showModifyForm = (value, id, name, size, car) => {
        this.setState({
            isShowModifyForm: value,
            modifyId: id,
            car: car,
            dataFormat: { name, size}
        })
    }

    showEditForm = (value) => {
        this.setState({
            isShowEditForm: value,
        })
    }

    modifyForm = (value) => {
        if(value.size != null && (value.size+"").match(/\D/)==null){
            this.props.onModifyParkinglot(this.state.modifyId, this.state.car, value)
        }else{
            message.error("停车场信息格式错误")
        }
    }

    submitForm = (value) => {
        this.props.onAddParkinglot(value)
    }
    render() {

        const data = this.props.parkinglotsList;
        const columns = [
            // { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
            { title: 'id', dataIndex: 'id', key: 'id', fixed: 'left' },
            { title: '名称', dataIndex: 'name', key: 'name' },
            { title: '容量', dataIndex: 'size', key: 'size' },
            {
                title: '操作',
                key: 'operation',
                fixed: 'right',
                width: 200,
                render: (parkinglot) => (
                    <span>
                        <a href="javascript:;"
                            onClick={() => this.showModifyForm(true, parkinglot.id,parkinglot.name, parkinglot.size, parkinglot.countOfCars)} >修改</a>
                        <Divider type="vertical" />
                        <Popconfirm placement="leftTop" title={`你确定要${parkinglot.status === "open" ? "注销" : "开放"}该停车场么？`}
                        onConfirm={() => {this.props.changeStatus(parkinglot.id, parkinglot.status)}} okText="Yes" cancelText="No">
                                {/* <a href="javascript:;" >{e.account_status === "normal" ? "冻结" : "开放"}</a> */}
                                <a href="javascript:;">{parkinglot.status === "open" ? "注销" : "开放"}</a>
                            </Popconfirm>
                    </span>
                ),
            },
        ];

        const dataFormat = {
            "name": "",
            "size": "",
        }
        return (
            <div>
                <Row type="flex" justify="space-around" align="middle" style={{marginBottom:"2rem"}}>
                    <Col span={6}>
                        <Button type="primary" onClick={() => this.showEditForm(true)}>新建</Button>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={6} align="right">
                        <InputGroup compact>
                            <Select defaultValue="name" style={{ width: "100px" }} onChange={(e) => this.setSearchType(e)}>
                                <Option value="name">名称</Option>
                                {/* <Option value="tel">电话号码</Option> */}
                                <Option value="sizeBt">容量大于</Option>
                                <Option value="sizeSt">容量小于</Option>
                            </Select>
                        </InputGroup>
                    </Col>
                    <Col span={6}>
                        <Search
                            placeholder="请输入搜索内容"
                            enterButton="搜索"
                            // size="large"
                            onSearch={value =>{this.props.onSearch(value, this.state.searchType)}}
                            style={{ width: 400 }}
                        />
                    </Col>
                </Row>
                <Table
                    bordered
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 1300 }} />
                {this.state.isShowEditForm && <Edit dataFormat={dataFormat} showEditForm={(e) => this.showEditForm(e)} submitForm={(e) => this.submitForm(e)} />}
                {this.state.isShowModifyForm && <Edit dataFormat={this.state.dataFormat} showEditForm={(e) => this.showModifyForm(e)} submitForm={(e) => this.modifyForm(e)} />}
            </div>
        );
    }
}

export default ParkingLotMangement;