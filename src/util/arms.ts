import BrowerLogger from 'alife-logger';
import { getEnv } from './config';
declare const window: any;

export default () => {
    if(!getEnv()) {
        window.__bl = BrowerLogger.singleton({
            pid: 'a644wg37bd@4bd92ee38431299',
            appType: "web",
            imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
            enableSPA: true,
            sample: 10,
            ignore: {
                ignoreErrors: [
                    /^Script error\.?$/,
                ]
            },
        });
    }
}