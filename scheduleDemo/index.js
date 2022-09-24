
/**
 *  * 多页面、应用同步
        A:
            任务数据多页面通信（发布订阅 + postMessage)
            应用同步,因为没有做过类似的，猜测是异步轮询的方式来执行（参考印象笔记）
    * 批量上传

        
    * 支持功能拓展
 */
import { registerPlugins } from './pluginsEx.js'
import { lifeCycle } from './lifeCycle.js'
export class mainFun {
    constructor(ops) {
        const { plugins } = ops;// 结构参数
        const queue = [];// 初始化单例共享任务结构
        // lifeCycle(this);// 将生命周期挂载在实例上
        registerPlugins(this, plugins);

    }

    asyncExcauce() {
        
    }

    uploaderTask() {
        /* 批量上传 
            * 支持任务优先级
                A:
                每个数据包带个优先级熟悉，每个执行间隙做一次局部排序
            * 显示时间进度
            * 限制上传大小和任务数量 
        */
    }

    handleTaskToWindow() {
        window.schedule = this.queue;
    }
}


// how to use
//