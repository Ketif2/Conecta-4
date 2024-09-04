const checkWinner = (board) => {
    const COLS = 7;
    const ROWS = 6;
    
    const checkDirection = (startIndex, direction, length) => {
      const player = board[startIndex];
      if (!player) return false;
  
      for (let i = 1; i < length; i++) {
        const nextIndex = startIndex + direction * i;
        if (nextIndex < 0 || nextIndex >= board.length || board[nextIndex] !== player) {
          return false;
        }
      }
  
      return true;
    };

    const checkHorizontal = () => {
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS - 3; col++) {
          const startIndex = row * COLS + col + 7; 
          if (checkDirection(startIndex, 1, 4)) {
            return board[startIndex];
          }
        }
      }
      return null;
    };

    const checkVertical = () => {
      for (let row = 0; row < ROWS - 3; row++) {
        for (let col = 0; col < COLS; col++) {
          const startIndex = row * COLS + col + 7;
          if (checkDirection(startIndex, COLS, 4)) {
            return board[startIndex];
          }
        }
      }
      return null;
    };

    const checkDiagonalDown = () => {
      for (let row = 0; row < ROWS - 3; row++) {
        for (let col = 0; col < COLS - 3; col++) {
          const startIndex = row * COLS + col + 7;
          if (checkDirection(startIndex, COLS + 1, 4)) {
            return board[startIndex];
          }
        }
      }
      return null;
    };

    const checkDiagonalUp = () => {
      for (let row = 3; row < ROWS; row++) {
        for (let col = 0; col < COLS - 3; col++) {
          const startIndex = row * COLS + col + 7;
          if (checkDirection(startIndex, COLS - 1, 4)) {
            return board[startIndex];
          }
        }
      }
      return null;
    };
  
    const winner = checkHorizontal() || checkVertical() || checkDiagonalDown() || checkDiagonalUp();
    return winner;
  };
  
  export default checkWinner;
  