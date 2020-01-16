//react 基础组件加载
import * as React from "react";

//redux 基础组件加载
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';



const mapStateToProps = (state: any) => {
    return {
        store: state
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        ...bindActionCreators(Actions, dispatch)
    }
}


interface ISprops {
    
}
interface IState {
    advertising:boolean,
    footType: number,
    formStyle: boolean
}

class Index extends React.Component<ISprops,IState> {
    constructor(props: any){
        super(props);
        this.state = {
            advertising:false,//是否显示广告位
            footType: 1,//footerbar
            formStyle: true
        }
    }
    render() {
        return (
            <React.Fragment>
                111
            </React.Fragment>
        );
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Index);