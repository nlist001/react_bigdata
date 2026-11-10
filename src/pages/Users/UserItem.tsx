import { memo } from "react";
import { IUser } from "./user.model";
import { TableUsersColumnsEnum, tableUsersColumnsEditRules } from "./table-fields.model";
import { CellItem } from "./CellItem";

export interface IUserItemProps {
    user: IUser;
   
}

export const UserItem = memo(({user}: IUserItemProps) =>{
    

    return (
        <tr>
            {
                Object.keys(TableUsersColumnsEnum).map((el)=>
                    <td key={el}>
                    { !!tableUsersColumnsEditRules[el] ?
                        <CellItem userProp={[el, user]} />
                        :
                        <>{user[el]}</>
                    }

                    </td>
                )
            }
        </tr>
    );
});
