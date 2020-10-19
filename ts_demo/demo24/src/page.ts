// 命名空间

import { Header, Content, Footer } from './components'
// namespace Home {


export default class Page { // 暴露引用的
    constructor() {
        new Header()
        new Content()
        new Footer()
    }
}
// }
