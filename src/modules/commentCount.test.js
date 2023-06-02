import commentCount from "./commentCount.js";

describe('commentCount', () => {
    test('Empty data array', () => {
     
    const emptyData = []
  
      const count = commentCount(emptyData);
  
      expect(count).toBe(0);
    });
  
    test('An array of comments with data', () => {
  
      const dataArray = [
        { username: 'user1', comment: 'comment1', creation_date: '20223-01-01' },
        { username: 'user2', comment: 'comment2', creation_date: '2023-02-02' },
        { username: 'user3', comment: 'comment3', creation_date: '2023-03-02' },
      ]
  
      const count = commentCount(dataArray);
  
    
      expect(count).toBe(3);
    });
  });