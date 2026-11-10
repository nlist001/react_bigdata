import { memo, useState } from "react";
import { useAppDispath } from "../../store";
import { usersSlice } from "./user.slice";
import { User } from "./user.model";


export const CellItem = memo(({userProp}) =>{
    const dispatch = useAppDispath();
    const [key,user] = userProp;

    const [isEdit, setIsEdit] = useState(false);
    const [newUserProp, setUserProp] = useState(user[key]);
    
    const save = () =>{
        
        console.log('save userProp',{[key]: newUserProp});
      dispatch(usersSlice.actions.updateUserProp(new User({...user, [key]: newUserProp})));
      setIsEdit(false);

    }
    return (
       isEdit ? 
            <span className="flex items-center hover:text-indigo-600 cursor-pointer">
                <input  className="grow-1" type="text" defaultValue={newUserProp} onChange={e=>setUserProp(e.target.value)} style={{border:'1px solid'}} />
                <span onClick={()=>save()}>Save</span>
            </span>
        :
        <span className="flex items-center hover:text-indigo-600 cursor-pointer" onClick={()=>setIsEdit(true)}>
            <span className="grow-1">{user[key]}</span>
            <span className="icon-pencil2"></span>
        </span>
                 
    );
});
