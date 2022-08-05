export interface TodoT {
    map?(arg0: (todo: any) => JSX.Element): import("react").ReactNode;
    title: string;
    body: string;
    isComplete?: boolean;
    createDate?: string;
    completeDate?: string;
    id?: string;
    editing?: boolean;
    todo?: any;
  }

  export interface todosStateT {
    title: string;
    body: string;
    todos: TodoT[];
    isLoading: boolean;
    error: string;
    editing: boolean;
  }

 