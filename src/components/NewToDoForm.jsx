import React from "react";

function NewToDoForm({NewItem, SetNewItem, NewToDoForm, handleSubmit}){

    return(
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New item</label>
                <input type="text" id="item" value={NewItem} onChange={(event)=>SetNewItem(event.target.value)}/>
            </div>
            <button className="btn">Add</button>
        </form>
    );
}

export default NewToDoForm;