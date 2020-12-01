export const users = {
    '1': {name: 'Bob', id: '1'},
    '2': {name: 'Tony', id: '2'},
    '3': {name: 'Christy', id: '3'},
    '4': {name: 'Ben', id: '4'},
    '5': {name: 'Cros', id: '5'}
}

export const userChatsHistory = {
    '1': {
        id:'1',
        userId: '1',
        userIds: ['2'],
        draft: '',
        chatHistory: [{userId: '1', msg: 'Hello'}, {userId: '2', msg: 'Hi'}]
    },
    '2': {
        id:'2',
        userId: '1', 
        userIds: ['3'],
        draft: '',
        chatHistory: [{userId: '1', msg: 'Hello'}, {userId: '3', msg: 'Hi'}]
    },
    '4': {
        id:'4',
        userId: '1',
        userIds: ['3', '4', '5'],
        draft: '',
        chatHistory: [
            {userId: '1', msg: 'Hello'},
            {userId: '5', msg: 'its me user 5'},
            {userId: '3', msg: 'Hi'}]
    },
    '3': {
        id:'3',
        userId: '1',
        userIds: ['1'],
        draft: '',
        chatHistory: []
    }
}