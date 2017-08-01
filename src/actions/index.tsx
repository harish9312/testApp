export interface ITodo {
    type: string;
    id: number;
}

export type TodoAction = ITodo;

export function doneTodo(id: number): ITodo {
   return{
        type : 'DONE',
        id
    };
}

export function toBeDone(id: number): ITodo {
   return {
        type : 'TOBEDONE',
        id
    };
}

export function moveUp(id: number): ITodo {
    return {
        type: 'MOVEUP',
        id
    };
}

export function moveDown(id: number): ITodo {
    return {
        type: 'MOVEDOWN',
        id
    };
}

export function removeItem(value: string) {
    return {
        type: 'REMOVECHIPITEM',
        value
    }
}

export function addChipItem(value: string) {
    return {
        type: 'ADDCHIPITEM',
        value
    }
}

export function searchInList(value:string) {
    return {
        type: 'SEARCHINLIST',
        value
    }
}