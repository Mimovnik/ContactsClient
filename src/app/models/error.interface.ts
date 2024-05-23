export interface ErrorInterface {
    title: string;
    messages: string[];
}

export function emptyError(): ErrorInterface {
    return {
        title: '',
        messages: []
    };
}