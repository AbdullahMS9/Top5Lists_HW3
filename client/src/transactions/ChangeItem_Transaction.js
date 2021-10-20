import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * ChangeItem_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
    
    @author McKilla Gorilla
 */
export default class ChangeItem_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex, initOldText, initNewText) {
        super();
        this.store = initApp;
        this.index = initIndex;
        this.oldText = initOldText;
        this.newText = initNewText;
    }

    doTransaction() {
        this.store.changeItem(this.index, this.newText);
    }
    
    undoTransaction() {
        this.store.changeItem(this.index, this.oldText);
    }
}