/**
 * <div class='parent'>
 * <div class='child>
 * <h1>this is the h1 tag</h1>
 * <h2>this is the h1 tag</h2>
 * </div>
 * </div>
 *
 *
 */

const h1tag=React.createElement('h1',{className:'h1'},'this is the h1 tag')
const h2tag=React.createElement('h2',{className:'h2'},'this is the h2 tag')
const parent=React.createElement('div',{className:'parent'},React.createElement('div',{className:'child'},[h1tag,h2tag]))

ReactDOM.createRoot(document.getElementById('root')).render(parent)