type Props={
    onClose: () =>void;
}
const StackedDeletePopUp = (props:Props) => {
    const {onClose} = props;
    // @ts-ignore
    return <div className="modal" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Nothing to delete</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                </div>
                <div className="modal-body">
                    <p>Delete list is empty.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    </div>
}
export default StackedDeletePopUp;