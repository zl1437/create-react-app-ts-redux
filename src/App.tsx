import React from 'react';
import { Route, Switch, BrowserRouter,  } from 'react-router-dom'
import routes from './routes/routes'



//window typescript 获取window下对象报错处理
// declare const window;
// let href = window.location.href;

interface ISprops {
    [propsName: string]: any
}
interface IState {
    [statesName: string]: any
}
//添加arms前端log
// if (process.env.NODE_ENV === 'production')  {
//     require('./util/arms').default('vip');
// }

export default class App extends React.Component<ISprops, IState>{
    constructor(props: ISprops){
        super(props);
        this.state = {
        }
    }
    render(){
        const { openid } = this.state;
        return (
            !!openid ? 
                <BrowserRouter>
                    <div>
                        <Route render={({ location }) => (
                            <Switch key={location.pathname} >
                                {routes.map((r: any, key: any) => {
                                    return (
                                        <Route
                                            render={props => <r.component {...props} routes={r.routes}/>}
                                            exact={!!r.exact}
                                            key={r.path + key}
                                            path={r.path}
                                        />
                                    )
                                })}
                            </Switch>
                        )} />
                    </div>
                </BrowserRouter>
                :
                <div>loading</div>
    
        );
    }
    
}
