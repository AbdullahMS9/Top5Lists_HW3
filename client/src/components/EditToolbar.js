import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { tps } from '../store'
import { useHistory } from 'react-router-dom'
/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store } = useContext(GlobalStoreContext);
    const history = useHistory();  

    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        history.push("/");
        store.closeCurrentList();
    }
    let editStatus = false;
    if (store.isListNameEditActive) {
        editStatus = true;
    }
    return (
        <div id="edit-toolbar">
            <div
                disabled={editStatus}
                id='undo-button'
                onClick={handleUndo}
                className={(store.currentList)&&(tps.hasTransactionToUndo())?"top5-button":"top5-button-disabled"}>
                &#x21B6;
            </div>
            <div
                disabled={editStatus}
                id='redo-button'
                onClick={handleRedo}
                className={(store.currentList)&&(tps.hasTransactionToRedo())?"top5-button":"top5-button-disabled"}>
                &#x21B7;
            </div>
            <div
                disabled={editStatus}
                id='close-button'
                onClick={handleClose}
                className={(store.currentList)?"top5-button":"top5-button-disabled"}>
                &#x24E7;
            </div>
        </div>
    )
}

export default EditToolbar;